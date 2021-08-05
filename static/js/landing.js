 window.onload = function() {}

 // header menu change on scroll
 $(document).scroll(function navbar() {
     var y = $(this).scrollTop();
     if (y > 120) {
         $(".landing-headerContainerScroll").addClass("onScroll");
         $(".landing-headerContainerMobileScroll").addClass("onScroll");


     } else {
         $(".landing-headerContainerScroll").removeClass("onScroll");
         $(".landing-headerContainerMobileScroll").removeClass("onScroll");
     }
 });

 // click on burger menu in mobile view
 $('.landing-headerBurgerContainer').click(function() {
     $('.landing-mainContainer').toggleClass('active');
     $('.landing-menuBase').toggleClass('active');
     $('.landing-headerBurgerTop').toggleClass('active');
     $('.landing-headerBurgerBottom').toggleClass('active');
     $('.landing-headerBurgerTopScroll').toggleClass('active');
     $('.landing-headerBurgerBottomScroll').toggleClass('active');
     $('.landing-headerContainerMobileScroll').toggleClass('active');
     $('.landing-headerLogoMobileScroll').toggleClass('active');
     $('.landing-menuItem').toggleClass('active');
     $('.landing-menuItemSocialContainer').toggleClass('active');
     $('body').toggleClass('active');
 });

 // click on menu options in mobile view
 $('.landing-menuItem').click(function() {
     $('.landing-mainContainer').toggleClass('active');
     $('.landing-menuBase').toggleClass('active');
     $('.landing-headerBurgerTop').toggleClass('active');
     $('.landing-headerBurgerBottom').toggleClass('active');
     $('.landing-headerBurgerTopScroll').toggleClass('active');
     $('.landing-headerBurgerBottomScroll').toggleClass('active');
     $('.landing-headerContainerMobileScroll').toggleClass('active');
     $('.landing-headerLogoMobileScroll').toggleClass('active');
     $('.landing-menuItem').toggleClass('active');
     $('.landing-menuItemSocialContainer').toggleClass('active');
     $('body').toggleClass('active');
 });

 // landing search box function
 $('.landing-page3SearchInput').focus(function() {
     $(".landing-page3SearchContainer").addClass("active");
 });
 $('.landing-page3SearchInput').blur(function() {
     $(".landing-page3SearchContainer").removeClass("active");
 });

 // Pie charts animation

 $(function() {
     var elementTop = $("#pieChartBase1").offset().top - window.innerHeight;
     $(window).scroll(function() {
         var scrollTop = $(window).scrollTop();
         if (elementTop < scrollTop) {
             var r = 60;
             var c = 2 * Math.PI * r;
             $("#pieChartBase1").children('.landing-pieChartBar').each(function() {
                 var percent = $(this).data("percent") / 100;
                 var dashoffset = c * (1 - percent);
                 $(this).css('stroke-dashoffset', dashoffset);
                 $(this).css('stroke-dasharray', c);
             });
             $("#pieChartBase1").children('.landing-pieChartBar').addClass('active');
         } else {}
     });
 });


 $(function() {
     var elementTop = $("#pieChartBase2").offset().top - window.innerHeight;
     $(window).scroll(function() {
         var scrollTop = $(window).scrollTop();
         if (elementTop < scrollTop) {
             var r = 60;
             var c = 2 * Math.PI * r;
             $("#pieChartBase2").children('.landing-pieChartBar').each(function() {
                 var percent = $(this).data("percent") / 100;
                 var dashoffset = c * (1 - percent);
                 $(this).css('stroke-dashoffset', dashoffset);
                 $(this).css('stroke-dasharray', c);
             });
             $("#pieChartBase2").children('.landing-pieChartBar').addClass('active');
         } else {}
     });
 });

 $(function() {
     var elementTop = $("#pieChartBase3").offset().top - window.innerHeight;
     $(window).scroll(function() {
         var scrollTop = $(window).scrollTop();
         if (elementTop < scrollTop) {
             var r = 60;
             var c = 2 * Math.PI * r;
             $("#pieChartBase3").children('.landing-pieChartBar').each(function() {
                 var percent = $(this).data("percent") / 100;
                 var dashoffset = c * (1 - percent);
                 $(this).css('stroke-dashoffset', dashoffset);
                 $(this).css('stroke-dasharray', c);
             });
             $("#pieChartBase3").children('.landing-pieChartBar').addClass('active');
         } else {}
     });
 });

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
 $(document).ready(function() {
     var iPhoneXDisplayHeight = $('.landing-page4iPhoneXDisplay').height();
     var iPhoneXDisplayWidth = $('.landing-page4iPhoneXDisplay').width();
     $('.landing-page4CarouselItem').css('height', iPhoneXDisplayHeight + 'px');
     $('.landing-page4CarouselItem').css('width', iPhoneXDisplayWidth + 'px');

 });
 window.onresize = function() {
     var iPhoneXDisplayHeight = $('.landing-page4iPhoneXDisplay').height();
     var iPhoneXDisplayWidth = $('.landing-page4iPhoneXDisplay').width();
     $('.landing-page4CarouselItem').css('height', iPhoneXDisplayHeight + 'px');
     $('.landing-page4CarouselItem').css('width', iPhoneXDisplayWidth + 'px');

 }

 // Back to top animation
 $(function() {
     var elementTop = $("#landing-footer").offset().top - window.innerHeight;
     $(window).scroll(function() {
         var scrollTop = $(window).scrollTop();
         if (elementTop < scrollTop) {
             $('.landing-backToTopBtn ').addClass("onScroll");
         } else {
             $('.landing-backToTopBtn ').removeClass("onScroll");

         }
     });
 });