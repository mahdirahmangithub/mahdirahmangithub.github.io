// Skeleton controller
$(window).on("load", function() {
    $(".skeleton").removeClass("skeleton");
    $(".skeletonHide").removeClass("skeletonHide");
    $(".skeletonRound").removeClass("skeletonRound");
    $(".skeletonRadius").removeClass("skeletonRadius");
    $(".skeletonRadiusP").removeClass("skeletonRadiusP");
    $(".skeletonRoundLarge").removeClass("skeletonRoundLarge");
    $(".skeletonBorder").removeClass("skeletonBorder");
});



var font = new FontFaceObserver('IRANSans', {
    weight: 400
});
font.load().then(function() {
    $(".skeletonRadius").removeClass("skeletonRadius");
    $(".skeletonRadiusP").removeClass("skeletonRadiusP");
    $(".skeletonBorder").removeClass("skeletonBorder");
    $(".skeletonHide").removeClass("skeletonHide");
}, function() {

});


function revealText() {
    $(".skeletonRadius").removeClass("skeletonRadius");
}

//Header on scroll
$(document).scroll(function navbar() {
    var y = $(this).scrollTop();
    if (y > 80) {
        $(".headerBase").addClass("onScroll");
        $(".menuBase").addClass("onScroll");
        $(".menuBaseMobile").addClass("onScroll");

    } else {
        $(".headerBase").removeClass("onScroll");
        $(".menuBase").removeClass("onScroll");
        $(".menuBaseMobile").removeClass("onScroll");

    }
});

//Header search animations
var mouseOverSearchResult = false;

$(".headerSearchResultWrapper").mouseenter(function() {
    mouseOverSearchResult = true;
});
$(".headerSearchResultWrapper").mouseleave(function() {
    mouseOverSearchResult = false;
});

$('.headerSearchBtn').click(function() {
    $(this).toggleClass('active');
    $('.headerSearchInput').focus();
    if (!$(this).hasClass('active')) {
        $('.headerSearchResultWrapper').removeClass('active');
    }
});

$('.headerSearchInput').focusout(function() {
    if (mouseOverSearchResult == false) {
        $('.headerSearchResultWrapper').removeClass('active');
        var headerSearch = document.getElementById("headerSearchInput");
        if (!headerSearch.checkValidity()) {
            $('.headerSearchBtn').removeClass('active');
        }
    }

});

$('.headerSearchInput').focus(function() {
    if ($('.headerSearchResult.typedSearch').hasClass('active')) {
        $('.headerSearchResultWrapper').addClass('active');
    }
});



// Header search function

var mainSearchInput = $("input[name*='headerSearch']").val();

$("input[name*='headerSearch']").on('keyup', function() {
    searchTheWord();
    searchMaster();
    searchTags();
    mainSearchInput = $("input[name*='headerSearch']").val();
});

function searchTheWord() {
    var searchWord = $("input[name*='headerSearch']").val();
    if (searchWord != "") {
        $('.headerSearchResult.typedSearch').addClass('active');
        $('.headerSearchResultWrapper').addClass('active');
        document.getElementById("searchWord").innerHTML = "' " + searchWord + " '";
    } else if (searchWord == "") {
        $('.headerSearchResult.typedSearch').removeClass('active');
        $('.headerSearchResultWrapper').removeClass('active');
    }
};

function searchMaster() {
    var searchWord = $("input[name*='headerSearch']").val().toUpperCase(),
        masterWrapper = $('.headerSearchResultMasterWrapper')[0],
        masterContainer = masterWrapper.getElementsByClassName('masterSearch');

    for (i = 0; i < masterContainer.length; i++) {
        masterName = masterContainer[i].getElementsByTagName("span")[0];
        if (masterName.innerHTML.toUpperCase().indexOf(searchWord) > -1) {
            masterContainer[i].className = "headerSearchResult masterSearch active";
        } else {
            masterContainer[i].className = "headerSearchResult masterSearch";
        };
        if ($('.masterSearch').hasClass('active')) {
            $('.headerSearchResultMasterWrapper').addClass('active');
        } else {
            $('.headerSearchResultMasterWrapper').removeClass('active');
        }
    }
};

function searchTags() {
    var searchWord = $("input[name*='headerSearch']").val().toUpperCase(),
        tagsWrapper = $('.headerSearchResultTagsWrapper')[0],
        tagsContainer = tagsWrapper.getElementsByClassName('tagsSearch');

    for (i = 0; i < tagsContainer.length; i++) {
        masterName = tagsContainer[i].getElementsByTagName("span")[0];
        if (masterName.innerHTML.toUpperCase().indexOf(searchWord) > -1) {
            tagsContainer[i].className = "headerSearchResult tagsSearch active";
        } else {
            tagsContainer[i].className = "headerSearchResult tagsSearch";
        };
        if ($('.tagsSearch').hasClass('active')) {
            $('.headerSearchResultTagsWrapper').addClass('active');
        } else {
            $('.headerSearchResultTagsWrapper').removeClass('active');
        }
    }
};


//Bookmark Btn
$('.courseBookmarkBtn').click(function() {
    $(this).toggleClass('active');
});

//Header bookmark Btn
$('.headerBookmarkContainer').click(function() {
    $('.headerBookmarkContainer').toggleClass('active');

});

//Click on Windows
document.addEventListener("click", function() {
    $('.courseShareBtn').removeClass('active');
    $('.menuBase').removeClass('active');
    $('.headerStarBtn').removeClass('active');
    $('.headerShareContainer').removeClass('active');

    $('.menuBaseMobile').removeClass('active');
    $('.headerBurgerContainer').removeClass('active');
    $('.headerAvatarContainer').removeClass('active');
    $('.headerTextBtn').removeClass('active');
    $('.headerOptionBtn').removeClass('active');


});

//Share Btn
$('.courseShareBtn').click(function(event) {
    $('.courseShareBtn').removeClass('active');
    $(this).addClass('active');
    event.stopPropagation();
});

//Header share Btn
$('.headerShareContainer').click(function(event) {
    $(this).toggleClass('active');
    $('.headerStarBtn').removeClass('active');
    $('.headerBurgerContainer').removeClass('active');

    $('.menuBase').removeClass('active');
    $('.headerAvatarContainer').removeClass('active');
    $('.menuBaseMobile').removeClass('active');

    event.stopPropagation();
});
$('.tooltipHeaderShareContainer').click(function(event) {
    event.stopPropagation();
});


// Menu scroll Prevent
$('.menuBaseMobile').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;
    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    } else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }
    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});


//Menu
$('.headerBurgerContainer').click(function(event) {
    $(this).toggleClass('active');
    $('.menuBase').toggleClass('active');
    $('.headerAvatarContainer').toggleClass('active');
    $('.menuBaseMobile').toggleClass('active');
    $('.headerStarBtn').removeClass('active');
    $('.headerShareContainer').removeClass('active');
    $('.headerTextBtn').toggleClass('active');
    $('.headerOptionBtn').toggleClass('active');
    event.stopPropagation();
});

$('.menuBase').click(function(event) {
    event.stopPropagation();
});
$('.menuBaseMobile').click(function(event) {
    event.stopPropagation();
});


//Star rating Btn
$('.headerStarBtn').click(function(event) {
    $(this).toggleClass('active');
    $('.headerShareContainer').removeClass('active');
    $('.headerBurgerContainer').removeClass('active');
    $('.menuBase').removeClass('active');
    $('.headerAvatarContainer').removeClass('active');
    $('.menuBaseMobile').removeClass('active');
    event.stopPropagation();
});
$('.tooltipStarContainer').click(function(event) {
    event.stopPropagation();
});

$('.starRate1').click(function() {
    $('.starRate1').addClass('active');
    $('.starRate2').removeClass('active');
    $('.starRate3').removeClass('active');
    $('.starRate4').removeClass('active');
    $('.starRate5').removeClass('active');
});
$('.starRate2').click(function() {
    $('.starRate2').addClass('active');
    $('.starRate1').addClass('active');
    $('.starRate3').removeClass('active');
    $('.starRate4').removeClass('active');
    $('.starRate5').removeClass('active');
});
$('.starRate3').click(function() {
    $('.starRate3').addClass('active');
    $('.starRate2').addClass('active');
    $('.starRate1').addClass('active');
    $('.starRate4').removeClass('active');
    $('.starRate5').removeClass('active');
});
$('.starRate4').click(function() {
    $('.starRate4').addClass('active');
    $('.starRate2').addClass('active');
    $('.starRate1').addClass('active');
    $('.starRate3').addClass('active');
    $('.starRate5').removeClass('active');
});
$('.starRate5').click(function() {
    $('.starRate5').addClass('active');
    $('.starRate2').addClass('active');
    $('.starRate1').addClass('active');
    $('.starRate3').addClass('active');
    $('.starRate4').addClass('active');
});


// My video star rating
$('.myVideoStarRate1').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('.myVideoStarRate2').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('.myVideoStarRate3').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('.myVideoStarRate4').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
$('.myVideoStarRate5').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

// Add to cart animation
$('.coursePriceContainer').click(function() {
    $(this).addClass('waiting');
    $(this).children('.addtoCartBtnLarge')[0].innerHTML = "در انتظار نهایی شدن";
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
// Go back in browser
function goBack() {
    window.history.back();
}


// RadioBox
$('.radioBtnBase').click(function() {
    $('.radioBtnBase').removeClass('checked');
    $(this).addClass('checked');
});