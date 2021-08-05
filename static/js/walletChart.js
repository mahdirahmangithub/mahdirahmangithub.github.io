var chart = document.getElementById('walletLineChart').getContext('2d');


var data = {


    labels: ['Jan ', 'Feb ', 'March', 'Apr', 'May', 'Jun', 'Jul ', 'Aug ', 'Sep', 'Oct', 'Nov', 'Dec'],

    datasets: [

        // {
        //     label: 'Task Type 1',
        //     backgroundColor: 'rgba( 73, 178, 227, .01)',
        //     pointBackgroundColor: 'rgba( 73, 178, 227, 0)',
        //     pointBorderColor: 'rgba( 73, 178, 227, 0)',
        //     pointRadius: 10,
        //     pointHoverRadius: 5,
        //     pointHoverBackgroundColor: 'rgba( 73, 178, 227, .5)',
        //     pointHoverBorderColor: 'rgba( 73, 178, 227, .0)',
        //     borderWidth: 1,
        //     borderColor: 'rgba( 73, 178, 227, 1)',
        //     data: [1, .5, 2, .3, 1.5, 3, 2.25, 5, 3.5, 4, 3, .5],
        //     hidden: false,

        // },
        {
            label: 'سبد خرید',
            backgroundColor: 'rgba(147, 179, 100, .1) ',
            pointBackgroundColor: 'rgba(147, 179, 100, 0) ',
            pointBorderColor: 'rgba(147, 179, 100, 0)',
            pointRadius: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(147, 179, 100, 1)',
            pointHoverBorderColor: 'rgba(147, 179, 100, 1)',
            borderWidth: 1,
            borderColor: 'rgba(147, 179, 100, 1)',
            data: [8, 5, 10, 3, 15, 6, 5, 4, 7, 5, 11, 9],
            hidden: false,
        },
        {
            label: 'خرید نهایی',
            backgroundColor: 'rgba(243, 119, 72, .1)',
            pointBackgroundColor: 'rgba(243, 119, 72, 0)',
            pointBorderColor: 'rgba(243, 119, 72, 0)',
            pointRadius: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(243, 119, 72, 1)',
            pointHoverBorderColor: 'rgba(243, 119, 72, 1)',
            borderWidth: 1,
            borderColor: 'rgba(243, 119, 72, 1)',
            data: [3, 4, 2, 2, 6, 1, 3, 1, 4, 2.5, 2, 6],
            hidden: false,
        },
    ]
};


var options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        easing: 'easeOutExpo',
        duration: 5000,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: ' rgba(120, 134, 159, 0)',
                lineWidth: .5,
                drawTicks: false,
                zeroLineWidth: 1,

            },
            ticks: {
                fontColor: ' rgba(120, 134, 159, .6)',
                padding: 20

            },
        }],
        yAxes: [{
            gridLines: {
                color: ' rgba(120, 134, 159, .4)',
                lineWidth: .5,
                drawTicks: false,
                zeroLineWidth: 0



            },
            ticks: {
                fontColor: ' rgba(120, 134, 159, .6)',
                padding: 10
            },
        }]
    },
    elements: {
        line: {
            tension: 0.4
        }
    },
    legend: {
        display: false
    },
    point: {},
    tooltips: {
        mode: 'index',
        intersect: true,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,.4)',
        titleFontFamily: 'IRSansNumMedium',
        cornerRadius: 2,


        custom: function(tooltip) {
            if (!tooltip) return;
            // disable displaying the color box;
            tooltip.displayColors = false;
        },
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 24,
            bottom: 0
        }
    },


};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});


$(document).on('change', '.chart-legend', function() {
    var index = parseInt($(this).attr('chart-dataset'));
    chartInstance.data.datasets[index].hidden = !this.checked;
    chartInstance.update();
});


 