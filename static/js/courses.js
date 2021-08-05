 // Carousel
 $(document).ready(function() {
     $('.owl-carousel').owlCarousel({
         items: 1,
         center: true,
         autoplay: true,
         autoplayTimeout: 3000,
         loop: true,
         autoplayHoverPause: true,
         dots: true
     });
 });

 // Carousel item size
 //Courses Left Panel Height

 $(document).ready(function() {
     var coursesCarouselHeight = $('.coursesCarouselContainer').height();
     var coursesCarouselWidth = $('.coursesCarouselContainer').width();
     $('.coursesCarouselItem').css('height', coursesCarouselHeight + 'px');
     $('.coursesCarouselItem').css('width', coursesCarouselWidth + 'px');
     var windoWidth = $(window).width();
     if (windoWidth > 850) {
         var coursesRightPanelHeight = $('.mainCoursesRightPanel').height();
         $('.mainCoursesLeftPanel').css('height', coursesRightPanelHeight + 'px');
     }

 });
 window.onresize = function() {
     var coursesCarouselHeight = $('.coursesCarouselContainer').height();
     var coursesCarouselWidth = $('.coursesCarouselContainer').width();
     $('.coursesCarouselItem').css('height', coursesCarouselHeight + 'px');
     $('.coursesCarouselItem').css('width', coursesCarouselWidth + 'px');
     var windoWidth = $(window).width();
     if (windoWidth > 850) {
         var coursesRightPanelHeight = $('.mainCoursesRightPanel').height();
         $('.mainCoursesLeftPanel').css('height', coursesRightPanelHeight + 'px');
     } else {
         $('.mainCoursesLeftPanel').css('height', 'auto');
     }
 }