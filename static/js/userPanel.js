// Userpanel header animation
$(document).scroll(function navbar() {
    var y = $(this).scrollTop();
    if (y >= 80) {
        $(".userPanelHeaderContainer").addClass("onScroll");
    } else {
        $(".userPanelHeaderContainer").removeClass("onScroll");
    }
});

// Tab Btn
$('.tabBtnContainer').click(function() {
    $('.tabBtnContainer').removeClass('active');
    $(this).addClass('active');
});
$('#myVideosTabBtn').click(function() {
    $('.userPanelMyVideosContainer').addClass('active');
    $('.userPanelMyShoppingsContainer').removeClass('active');
    $('.userPanelMyBookmarksContainer').removeClass('active');
    $('.userPanelMyMessagesContainer').removeClass('active');
});
$('#myShoppingsTabBtn').click(function() {
    $('.userPanelMyVideosContainer').removeClass('active');
    $('.userPanelMyShoppingsContainer').addClass('active');
    $('.userPanelMyBookmarksContainer').removeClass('active');
    $('.userPanelMyMessagesContainer').removeClass('active');
});
$('#myBookmarksTabBtn').click(function() {
    $('.userPanelMyVideosContainer').removeClass('active');
    $('.userPanelMyShoppingsContainer').removeClass('active');
    $('.userPanelMyBookmarksContainer').addClass('active');
    $('.userPanelMyMessagesContainer').removeClass('active');
});
$('#myMessagesTabBtn').click(function() {
    $('.userPanelMyVideosContainer').removeClass('active');
    $('.userPanelMyShoppingsContainer').removeClass('active');
    $('.userPanelMyBookmarksContainer').removeClass('active');
    $('.userPanelMyMessagesContainer').addClass('active');
});
// Course progress bar animation
window.onload = function() {
    var r = 11;
    var c = 2 * Math.PI * r;
    $('.courseProgressBar').each(function() {
        var percent = $(this).data("percent") / 100;
        var dashoffset = c * (1 - percent);
        $(this).css('stroke-dashoffset', dashoffset);
        $(this).css('stroke-dasharray', c);
    });
    $('.tooltipProgressContentContainer').each(function() {
        this.innerHTML = $(this).data("percent") + " %";
    });
}

// My bookmark remover
$('.myBookmarkRemover').click(function() {
    var courseTitle = $(this).parents().eq(2).children(".courseTitleMedium").children()[0].innerHTML;
    console.log(courseTitle);
    if (confirm("دوره " + courseTitle + "از علاقه مندی ها حذف شود؟")) {
        $(this).parents().eq(4).addClass("removed");
        $(this).parents().eq(4).next(".userPanelSep").addClass("removed");
    } else {
        $(this).addClass("active")
    }
});

// My shopping remover
$('.removeItemBtnContainer').click(function() {
    var courseTitle = $(this).parents().eq(1).children(".myShoppingMainContainer").children(".maincourseContentContainer").children(".courseTitleMedium").children()[0].innerHTML;
    console.log(courseTitle);
    if (confirm("دوره " + courseTitle + "از علاقه مندی ها حذف شود؟")) {
        $(this).parents().eq(1).addClass("removed");
        $(this).parents().eq(1).next(".userPanelSep").addClass("removed");
    }
});