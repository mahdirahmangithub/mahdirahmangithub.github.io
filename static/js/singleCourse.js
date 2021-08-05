//Header on scroll
$(document).scroll(function navbar() {
    var y = $(this).scrollTop();
    if (y > 180) {
        $(".courseBottomFooterBase").addClass("onScroll");
        $(".headerStarContainer").addClass("onScroll");
        $(".headerBookmarkContainer").addClass("onScroll");
        $(".headerShareContainer").addClass("onScroll");
        $(".headerLogoSep").addClass("onScroll");
        $(".headerCourseTitle").addClass("onScroll");


    } else {
        $(".courseBottomFooterBase").removeClass("onScroll");
        $(".headerStarContainer").removeClass("onScroll");
        $(".headerBookmarkContainer").removeClass("onScroll");
        $(".headerShareContainer").removeClass("onScroll");
        $(".headerLogoSep").removeClass("onScroll");
        $(".headerCourseTitle").removeClass("onScroll");

    }
});


// table of content section Btn
$('.contentTableSectionContainer').click(function() {
    $(this).toggleClass('active');
    var secTitleHeight = $('.contentTableTitleSection').height();
    $('.indSec').css('height', secTitleHeight + 'px');
    var chapTitleHeight = $('.contentTableTitleChapter').height();
    $('.indChapSec').css('height', chapTitleHeight + 'px');
    $('.indChap').css('height', chapTitleHeight + 'px');
    var lessTitleHeight = $('.contentTableTitleLesson').height();
    $('.indLessSec').css('height', lessTitleHeight + 'px');
    $('.indLessChap').css('height', lessTitleHeight + 'px');
    $('.indLess').css('height', lessTitleHeight + 'px');

});

// table of content chapter Btn

$('.contentTableChapterContainer').click(function() {
    $(this).toggleClass('active');
    var secTitleHeight = $('.contentTableTitleSection').height();
    $('.indSec').css('height', secTitleHeight + 'px');
    var chapTitleHeight = $('.contentTableTitleChapter').height();
    $('.indChapSec').css('height', chapTitleHeight + 'px');
    $('.indChap').css('height', chapTitleHeight + 'px');
    var lessTitleHeight = $('.contentTableTitleLesson').height();
    $('.indLessSec').css('height', lessTitleHeight + 'px');
    $('.indLessChap').css('height', lessTitleHeight + 'px');
    $('.indLess').css('height', lessTitleHeight + 'px');
});





// table of content line corrector
window.onload = function() {
    var secTitleHeight = $('.contentTableTitleSection').height();
    $('.indSec').css('height', secTitleHeight + 'px');
}
window.onresize = function() {
    var secTitleHeight = $('.contentTableTitleSection').height();
    $('.indSec').css('height', secTitleHeight + 'px');
    var chapTitleHeight = $('.contentTableTitleChapter').height();
    $('.indChapSec').css('height', chapTitleHeight + 'px');
    $('.indChap').css('height', chapTitleHeight + 'px');
    var lessTitleHeight = $('.contentTableTitleLesson').height();
    $('.indLessSec').css('height', lessTitleHeight + 'px');
    $('.indLessChap').css('height', lessTitleHeight + 'px');
    $('.indLess').css('height', lessTitleHeight + 'px');

}


// Add to cart animation
$('.courseBottomFooter').click(function() {
    $(this).addClass('waiting');
    $(this).children('.addtoCartBtnLarge')[0].innerHTML = "در انتظار نهایی شدن";
    $('.coursePriceContainer').addClass('waiting');
    $('.coursePriceContainer').children('.addtoCartBtnLarge')[1].innerHTML = "در انتظار نهایی شدن";
    var $burger = $('.headerAvatarNotif');
    var offsetburger = $burger.offset();
    var widthburger = $burger.width();
    var heightburger = $burger.height();
    var centerXburger = offsetburger.left + widthburger / 2;
    var centerYburger = offsetburger.top + heightburger / 2;

    var $addtoCart = $(this).children('.addtoCartBtnSmal').children('.addtoCartAnimation');
    var offsetaddtoCart = $addtoCart.offset();
    var widthaddtoCart = $addtoCart.width();
    var heightaddtoCart = $addtoCart.height();
    var centerXaddtoCart = offsetaddtoCart.left + widthaddtoCart / 2;
    var centerYaddtoCart = offsetaddtoCart.top + heightaddtoCart / 2;

    if ($('.headerAvatarNotif').hasClass('active')) {
        var xChange = centerXburger - centerXaddtoCart + 2 + "px";
        var yChange = -(centerYaddtoCart - centerYburger) + 2 + "px";
        $(this).children('.addtoCartBtnSmal').children('.addtoCartAnimation').
        css({
            "transform": "translate(" + xChange + "," + yChange + ") ",
            "animation": " addtoCartAnimation 600ms linear 1 normal forwards"
        });
        $('.headerAvatarNotif').addClass('puls');
        setTimeout(function() {
            $('.headerAvatarNotif').removeClass('puls');
        }, 1000);
    } else {
        var xChange = centerXburger - centerXaddtoCart - 2 + "px";
        var yChange = -(centerYaddtoCart - centerYburger) - 4 + "px";
        $(this).children('.addtoCartBtnSmal').children('.addtoCartAnimation').
        css({
            "transform": "translate(" + xChange + "," + yChange + ") ",
            "animation": " addtoCartAnimation 600ms linear 1 normal forwards"
        });
        $('.headerAvatarNotif').addClass('active');
    }
});

$('.coursePriceContainer').click(function() {
    $('.courseBottomFooter').addClass('waiting')
    $('.courseBottomFooter').children('.addtoCartBtnLarge')[0].innerHTML = "در انتظار نهایی شدن";
});


// Single course show more
$('.singleCourseDescriptionHiderContainer').click(function () {
    if ($('.singleCourseExpandableWrapper').hasClass('showMore')) {
        $('.singleCourseExpandableWrapper').removeClass('showMore');
        $(this)[0].getElementsByTagName('span')[0].innerHTML = "ادامه مطلب";
    } else {
        $('.singleCourseExpandableWrapper').addClass('showMore');
        $(this)[0].getElementsByTagName('span')[0].innerHTML = "بستن";
    }
});