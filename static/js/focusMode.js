    // Toggle focus mode
    var videoBox = document.getElementById('videoBox');

    $('.toggleBase').click(function() {
        $(this).addClass('active');
        $('.toggleBaseFocus').addClass('active');
        $('.playerFocusModeWrapper').addClass('focusMode');
        $('.player-main').addClass('focusMode');
        $('.headerBase').addClass('focusMode');
        $('.menuBase').addClass('focusMode');
        $('.menuBaseMobile').addClass('focusMode');
        $('body').addClass('focusMode');
        $('.playerFocusModeTopContainer').removeClass('theater');
        $('.player-main').removeClass('theater');
        $('.theaterWrapper').removeClass('theater');
        $('.playerFocusModeTopContainer').removeClass('theater');
        $('.playerFocusModeWrapper').removeClass('theater');
        if (videoBox.paused || videoBox.ended) {
            $("#videoWrapper").appendTo("#palyerFocusVideoContainer");
        } else {
            $("#videoWrapper").appendTo("#palyerFocusVideoContainer");
            videoBox.play();
        };
            var palyerFocusLeftPanelLeft = $('.palyerFocusLeftPanel').offset().left + 12;
            $('.insertQuestionFocusWrapper')[0].style.left = palyerFocusLeftPanelLeft + "px";
        if ($(window).width() < 1126) {
            var palyerFocusLeftPanelHeight = $('.palyerFocusLeftPanel').height() + 140;
            $('.palyerFocusRightPanel')[0].style.height = "calc(100vh - " + palyerFocusLeftPanelHeight + "px)";
        };
    });

    $('.toggleBaseFocus').click(function() {
        $(this).removeClass('active');
        $('.toggleBase').removeClass('active');
        $('.playerFocusModeWrapper').removeClass('focusMode');
        $('.player-main').removeClass('focusMode');
        $('.headerBase').removeClass('focusMode');
        $('.menuBaseMobile').removeClass('focusMode');

        $('.menuBase').removeClass('focusMode');
        $('body').removeClass('focusMode');
        $('.playerFocusModeTopContainer').removeClass('theater');
        $('.player-main').removeClass('theater');
        $('.theaterWrapper').removeClass('theater');
        $('.playerFocusModeTopContainer').removeClass('theater');
        $('.playerFocusModeWrapper').removeClass('theater');

        if (videoBox.paused || videoBox.ended) {
            $("#videoWrapper").appendTo("#videoSection");
        } else {
            $("#videoWrapper").appendTo("#videoSection");
            videoBox.play();
        }
    });

    // Lesson list scroll
    $('.LessonListWrapper').bind('mousewheel DOMMouseScroll', function(e) {
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

    // Chat list scroll
    $('.questionAnswerContainerFocus').bind('mousewheel DOMMouseScroll', function(e) {
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

    // Caht drag & Btn
    $(function() {
        $(".insertQuestionFocusWrapper").draggable({ containment: "window", opacity: 0.9, handle: ".insertQuestionHeaderFocus" });
    });

    $('.insertQuestionBtnFocus').click(function() {
        $(this).toggleClass('active');
        $(this).parents('.insertQuestionFocusWrapper').toggleClass('active');
    });


    $('.insertQuestionHeaderFocusCloseBtn').click(function() {
        $('.insertQuestionBtnFocus').removeClass('active');
        $(this).parents('.insertQuestionFocusWrapper').removeClass('active');

    });