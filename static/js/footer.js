
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const footer = document.querySelector("footer");
      if (entry.target.classList.contains("works") && entry.isIntersecting) {
        footer.style.opacity = 1;
        footer.style.pointerEvents = "auto";

      } else {
        footer.style.opacity = 0;
        footer.style.pointerEvents = "none";

      }
    });
  }
  
  const options = {
    threshold: 0.5, // Percentage of the element's visibility required to trigger the callback
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  const target = document.querySelector(".works");
  
  observer.observe(target);

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    const footerHeight = window.getComputedStyle(footer).getPropertyValue("height");
    
    document.documentElement.style.setProperty("--footer_height", footerHeight);
  });

  function updateFooterHeight() {
    const footer = document.querySelector("footer");
    const footerHeight = window.getComputedStyle(footer).getPropertyValue("height");
    
    document.documentElement.style.setProperty("--footer_height", footerHeight);
  }
  
  // Initial update on page load
  updateFooterHeight();
  
  // Update on viewport resize
  window.addEventListener("resize", updateFooterHeight);
  