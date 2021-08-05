var saveState = false
// Focus on name editor
$(document).ready(function() {
    $('.nameEditorInput').focus();
});

// Avatar editor 
$('.userPanelEditorFileInput').change(function() {
    $('.avatarLoading').addClass('loading');
     avatarChange()
});

function avatarChange() {
    var file = document.getElementById("avatarInput").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        $('#avatarImg').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {};
    $('.avatarLoading').removeClass('loading');
}

// Edit info input
$('.userpanelInfoEditBtn').click(function() {
    $(this).prev()[0].removeAttribute("readonly");
    $(this).prev().focus();
    $(this).addClass('active');
    $(this).next().addClass('active');
});
var mousedownHappened = false;
$('.userpanelInfoInput').blur(function() {
    if (mousedownHappened) {
        $(this).focus();
        mousedownHappened = false;
    } else {
        $(this)[0].setAttribute("readonly", "true");
        $(this).next().removeClass("active");
        $(this).next().next('ul').removeClass('active');
    }
});

// Input options scroll
$('.userpanelinputOptionsContainer').bind('mousewheel DOMMouseScroll', function(e) {
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

// input option select
$('.userpanelinputOption').click(function() {
    var optionName = $(this).children().text();
    $(this).parents('ul').prev().prev().val(optionName);
    $(this).parents('ul').removeClass('active');
    $('.alertWrapper').removeClass('active');
    $('.alertWrapper').removeClass('exit');
    $('.alertContainer').removeClass('close');
    var newPassword = $("input[name*='newPassword']").val();
    var retypeNewPassword = $("input[name*='retypeNewPassword']").val();
    saveState = true;
    if (newPassword == retypeNewPassword) {
        $('.saveUserpanelEditsBtn').addClass('active');
    }

});

$('.userpanelinputOption').mousedown(function() {
    mousedownHappened = true;
});

// input option search
$('.searcherInput').on('keyup', function() {
    var input, filter, ul, li, a, i;
    input = $(this);
    filter = input.val().toUpperCase();
    ul = $(this).next().next('ul')[0];
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});




function passChecker() {
    var newPass = $("input[name*='newPass']").val();
    var newPassRetype = $("input[name*='retypeNewPass']").val();
    $("input[name*='retypeNewPass']").next().addClass('filledPass');
    if (newPassRetype == newPass && newPass != "") {
        $("input[name*='retypeNewPass']").next().addClass('correct');
        $('.saveUserpanelEditsBtn').addClass('active');

    } else {
        $("input[name*='retypeNewPass']").next().removeClass('correct');
        $('.saveUserpanelEditsBtn').removeClass('active');
    }
};

$("input[name*='newPass']").on('keyup', passChecker);
$("input[name*='retypeNewPass']").on('keyup', passChecker);

$('input').on('change', function() {
    var newPassword = $("input[name*='newPass']").val();
    var retypeNewPassword = $("input[name*='retypeNewPass']").val();
    $('.alertWrapper').removeClass('active');
    $('.alertWrapper').removeClass('exit');
    $('.alertContainer').removeClass('close');
    saveState = true;
    if (newPassword == retypeNewPassword) {
        $('.saveUserpanelEditsBtn').addClass('active');
    }
});

// Save & cancel btns + alerts
$('.cancelUserpanelEditsBtn').click(function() {
    document.getElementById("userPanelEditorForm").reset();
    $(this).prev().removeClass('active');
    $("input[name*='retypeNewPass']").next().removeClass('filledPass');

})

$('.saveUserpanelEditsBtn').click(function() {
    $('.alertWrapper').addClass('active');
    $(this).removeClass('active');
    setTimeout(alertExit, 3000)
});

$('.alertContainer').click(function() {
    $(this).addClass('close');
});

function alertExit() {
    $('.alertWrapper').addClass('exit')
}


// Progress chart
window.onload = function() {
    progressChart();
    starsChart();
    timeChartHeight();
    var winWidth = $(window).width();
    var scollerW = $('.userPanelEditorMobileMenuContainer')[0].offsetWidth;
    if (winWidth <= 850 && scollerW > 510) {
        $('.userPanelEditorMobileMenuHiderRight').addClass('hide');
        $('.userPanelEditorMobileMenuHiderLeft').addClass('hide');
    } else {
        $('.userPanelEditorMobileMenuHiderRight').removeClass('hide');
        $('.userPanelEditorMobileMenuHiderLeft').removeClass('hide');
    }
}

window.onresize = function() {
    progressChart();
    var winWidth = $(window).width();
    var scollerW = $('.userPanelEditorMobileMenuContainer')[0].offsetWidth;
    if (winWidth <= 850 && scollerW > 510) {
        $('.userPanelEditorMobileMenuHiderRight').addClass('hide');
        $('.userPanelEditorMobileMenuHiderLeft').addClass('hide');
    } else {
        $('.userPanelEditorMobileMenuHiderRight').removeClass('hide');
        $('.userPanelEditorMobileMenuHiderLeft').removeClass('hide');
    }
}

function progressChart() {
    var progressBaseWidth = document.getElementById('userpanelProgressBar').getClientRects()[0].width;
    var r = progressBaseWidth * 0.26 + 14;
    var c = 2 * Math.PI * r;
    $('.userpanelProgressBar').each(function() {
        var percent = $(this).data("percent") / 100;
        var dashoffset = c * (1 - percent);
        $(this).css('stroke-dashoffset', dashoffset);
        $(this).css('stroke-dasharray', c);

    });
    $('.userpanelSideProgressChartNum').each(function() {
        this.innerHTML = $('.userpanelProgressBar').data("percent") + " %";
    });

}
// stars chart
function starsChart() {
    var starRate = document.getElementById("userpanelStarsAve").innerHTML * 20;
    $('.userpanelStarsAveBar').css('width', starRate + '%');
}
// Time chart
function timeChartHeight() {
    $('.userpanelEditorSideTimeChart').each(function() {
        var hours = $(this).data("percent");
        var height = hours * .125;
        $(this).css('transform', 'scaleY(' + height + ')');
        if (height <= .2) {
            $(this).addClass('min')
        } else if (height > .2 && height <= .5) {
            $(this).addClass('med')
        } else if (height > .5) {
            $(this).addClass('max')
        }
    });
}

$('.userpanelEditorSideTimeChart').mouseover(function() {
    var hours = $(this).data("percent");
    var date = $(this).data("date");
    document.getElementById('timeChartDate').innerHTML = date;
    document.getElementById('timeChartHour').innerHTML = hours + '&nbsp;' + 'ساعت';
});



// Perfect Scroll


$('.horizContainer').each(function() { const ps = new PerfectScrollbar($(this)[0]); });

$('.userPanelEditorMobileMenuHiderRight').click(function() {
    var scrollerW = $('.userPanelEditorMobileMenuContainer')[0].offsetWidth;
    $('.userPanelEditorMobileMenuContainer').animate({
        scrollLeft: scrollerW
    }, 500);
});

$('.userPanelEditorMobileMenuHiderLeft').click(function() {
    $('.userPanelEditorMobileMenuContainer').animate({
        scrollLeft: 0
    }, 500);
});