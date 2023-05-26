function fillDates() {
  const dateElements = document.querySelectorAll('.date');

  dateElements.forEach(dateElement => {
    const startMonth = dateElement.getAttribute('start_month');
    const startYear = dateElement.getAttribute('start_year');
    const endMonth = dateElement.getAttribute('end_month');
    const endYear = dateElement.getAttribute('end_year');
    
    let dateString = startMonth + ' ' + startYear + ' - ';
    
    if (endMonth && endYear) {
      dateString += endMonth + ' ' + endYear;
    } else {
      dateString += 'present';
    }
    
    dateElement.textContent = dateString;
    
    // Calculate duration
    const startDate = new Date(startYear, convertMonthToNumber(startMonth));
    const endDate = endMonth && endYear ? new Date(endYear, convertMonthToNumber(endMonth)) : new Date();
    const duration = calculateDuration(startDate, endDate);
    
    const positionDurElement = dateElement.parentElement.querySelector('.position_dur');
    positionDurElement.textContent = duration;
  });
}

function convertMonthToNumber(month) {
  const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthAbbreviations.indexOf(month);
}

function calculateDuration(startDate, endDate) {
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = (endDate.getMonth() - startDate.getMonth()) + (yearsDiff * 12);

  let durationString = '';

  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  if (years > 0) {
    durationString += years + (years > 1 ? 'yrs' : 'yr');
  }

  if (months > 0 || (years === 0 && months === 0)) {
    durationString += (durationString ? ', ' : '') + (months + 1) + (months > 0 ? 'mos' : 'mo');
  }

  if (durationString) {
    durationString = `{${durationString}}`;
  }

  return durationString;
}


