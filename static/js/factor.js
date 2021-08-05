$(window).on("load", function() {
    $(".factor-userInfoError").addClass("onLoad");
    setTimeout(function() {
        $(".factor-userInfoError").removeClass("onLoad");
    }, 900);
});


// Remove course from factor 

$('.factor-courseRemoveBtnContainer').click(function() {
    var courseTitle = $(this).parents(".factor-courseMainContainer").children('.factor-courseContentContainer').children('a').children(".courseTitleMedium").children()[0].innerHTML;
    console.log(courseTitle);
    if (confirm("دوره " + courseTitle + "از علاقه مندی ها حذف شود؟")) {
        $(this).parents('.factor-courseContainer').addClass("removed");
    }
});


$('.factor-paymentGatewayContainer').click(function() {
    $('.factor-paymentGatewayContainer').removeClass('active');
    $('.radioBtnBase').removeClass('checked');
    $(this).addClass('active');
    $(this).children().children('.radioBtnBase').addClass('checked');
});