    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        document.getElementsByTagName("video")[0].setAttribute("controls", "");
    }


    //Header on scroll
    $(document).scroll(function navbar() {
        var y = $(this).scrollTop();
        if (y > 80) {} else {}
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


        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            document.getElementsByTagName("video")[0].setAttribute("controls", "");
            $('.onVideoScreenLogoContainer').removeClass('play')
        } else if (videoBox.play) {
            document.getElementsByTagName("video")[0].removeAttribute("controls");
            $('.onVideoScreenLogoContainer').addClass('play')
        } else {
            document.getElementsByTagName("video")[0].removeAttribute("controls");
            $('.onVideoScreenLogoContainer').removeClass('play')

        };


        if ($('.toggleBase').hasClass('active')) {
            var palyerFocusLeftPanelLeft = $('.palyerFocusLeftPanel').offset().left + 12;
            $('.insertQuestionFocusWrapper')[0].style.left = palyerFocusLeftPanelLeft + "px";
            if ($(window).width() < 1126) {
                var palyerFocusLeftPanelHeight = $('.palyerFocusLeftPanel').height() + 140;
                $('.palyerFocusRightPanel')[0].style.height = "calc(100vh - " + palyerFocusLeftPanelHeight + "px)";
            } else {
                $('.palyerFocusRightPanel')[0].style.height = "480px";
            }
        }
    }

    //Video star rating
    $('.starRate1').click(function() {
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.starRate2').removeClass('active');
        $('.myVideoStarRate2').removeClass('active');
        $('.myVideoStarRate2Focus').removeClass('active');
        $('.starRate3').removeClass('active');
        $('.myVideoStarRate3').removeClass('active');
        $('.myVideoStarRate3Focus').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.starRate2').click(function() {
        $('.starRate2').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.starRate3').removeClass('active');
        $('.myVideoStarRate3').removeClass('active');
        $('.myVideoStarRate3Focus').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');

    });
    $('.starRate3').click(function() {
        $('.starRate3').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.starRate2').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.starRate4').removeClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.starRate4').click(function() {
        $('.starRate4').addClass('active');
        $('.myVideoStarRate4').addClass('active');
        $('.myVideoStarRate4Focus').addClass('active');
        $('.starRate3').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.starRate2').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.starRate5').click(function() {
        $('.starRate5').addClass('active');
        $('.myVideoStarRate5').addClass('active');
        $('.myVideoStarRate5Focus').addClass('active');
        $('.starRate4').addClass('active');
        $('.myVideoStarRate4').addClass('active');
        $('.myVideoStarRate4Focus').addClass('active');
        $('.starRate3').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.starRate2').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
    });
    $('.myVideoStarRate1').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate2').removeClass('active');
        $('.starRate3').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.myVideoStarRate2Focus').removeClass('active');
        $('.myVideoStarRate3Focus').removeClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.myVideoStarRate2').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate3').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.myVideoStarRate3Focus').removeClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.myVideoStarRate3').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.myVideoStarRate4Focus').removeClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.myVideoStarRate4').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate4').addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.myVideoStarRate4Focus').addClass('active');
        $('.myVideoStarRate5Focus').removeClass('active');
    });
    $('.myVideoStarRate5').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate5').addClass('active');
        $('.starRate4').addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1Focus').addClass('active');
        $('.myVideoStarRate2Focus').addClass('active');
        $('.myVideoStarRate3Focus').addClass('active');
        $('.myVideoStarRate4Focus').addClass('active');
        $('.myVideoStarRate5Focus').addClass('active');
    });




    $('.myVideoStarRate1Focus').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate2').removeClass('active');
        $('.starRate3').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate2').removeClass('active');
        $('.myVideoStarRate3').removeClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
    });
    $('.myVideoStarRate2Focus').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate3').removeClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate3').removeClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
    });
    $('.myVideoStarRate3Focus').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate4').removeClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate4').removeClass('active');
        $('.myVideoStarRate5').removeClass('active');
    });
    $('.myVideoStarRate4Focus').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate4').addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.starRate5').removeClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate4').addClass('active');
        $('.myVideoStarRate5').removeClass('active');
    });
    $('.myVideoStarRate5Focus').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.starRate5').addClass('active');
        $('.starRate4').addClass('active');
        $('.starRate3').addClass('active');
        $('.starRate2').addClass('active');
        $('.starRate1').addClass('active');
        $('.myVideoStarRate1').addClass('active');
        $('.myVideoStarRate2').addClass('active');
        $('.myVideoStarRate3').addClass('active');
        $('.myVideoStarRate4').addClass('active');
        $('.myVideoStarRate5').addClass('active');
    });





    //Video table of content header Btn
    $('.headerContentTableContainer').click(function() {
        $('.contentTableMobileContainer').addClass('active');
        $('.overlayCloseBtn').addClass('active');
        $('body').addClass('active');
    });
    //Video table of content close Btn
    $('.overlayCloseBtn').click(function() {
        $('.contentTableMobileContainer').removeClass('active');
        $('.overlayCloseBtn').removeClass('active');
        $('body').removeClass('active');
    });

    //Insert questionBtn
    $('.questionAnswerTitleContainer').click(function() {
        $('.questionAnswerExpanderContainer').toggleClass('active');
        $('.questionAnswerContainer').toggleClass('active');
    });






    //Question Answer Btn
    $('.videoInsertQuestionBtn').click(function() {
        $('.videoInsertQuestionContainer').addClass('active');
        $('.videoInsertQuestionBtn').addClass('active');
        $('.videoSubmitQuestionBtn').addClass('active');
        $('.videoCancelQuestionBtn').addClass('active');
        $('.videoInsertQuestionWrapper').addClass('active');
    });
    $('.videoCancelQuestionBtn').click(function() {
        $('.videoInsertQuestionContainer').removeClass('active');
        $('.videoInsertQuestionBtn').removeClass('active');
        $('.videoSubmitQuestionBtn').removeClass('active');
        $('.videoCancelQuestionBtn').removeClass('active');
        $('.videoInsertQuestionWrapper').removeClass('active');

    });

    // Play & pause Btn

    var progressDiv = document.getElementById('videoProgressContainer');
    var progressBase = document.getElementById('videoProgressBase');
    var videoBox = document.getElementById('videoBox');
    var totalWidth = $('.videoProgressContainer').width();

    $('.videoPlayBtn').click(function() {
        $('.onVideoScreenLogoContainer').addClass('play');
        if (videoBox.paused || videoBox.ended) {
            $(this).addClass('pause');
            videoBox.play();
        } else {
            $(this).removeClass('pause');
            videoBox.pause();
        }
    });

    $('.videoWrapper').click(function(e) {
        var videoScreenTarget = e.target;
        if (videoScreenTarget == videoBox) {
            $('.onVideoScreenLogoContainer').addClass('play');
            if (videoBox.paused || videoBox.ended) {
                $('.videoPlayBtn').addClass('pause');
                $('.onVideoScreenPlayStatus').removeClass('pause');
                $('.onVideoScreenPlayStatus').addClass('play');
                videoBox.play();
            } else {
                $('.videoPlayBtn').removeClass('pause');
                $('.onVideoScreenPlayStatus').removeClass('play');
                $('.onVideoScreenPlayStatus').addClass('pause');
                videoBox.pause();
            };
        }
    });


    videoBox.onended = function() {
        $(".videoPlayBtn").removeClass('pause');
        videoBox.pause();
        videoBox.currentTime = 0;
        document.getElementById("videoPlayed").style.width = "0%";
    };
    videoBox.onplaying = setInterval(function() {
        var totalWidth = $('.videoProgressContainer').width();
        var progressBarUpdateNum = parseInt(videoBox.currentTime * totalWidth / videoBox.duration);
        var progressBarUpdate = ((progressBarUpdateNum * 100) / totalWidth) + "%";
        document.getElementById("videoPlayed").style.width = progressBarUpdate;

        var videoHours = Math.floor(videoBox.currentTime / 3600);
        var videoMinutes = Math.floor((videoBox.currentTime - (videoHours * 3600)) / 60);
        var videoSeconds = Math.floor(videoBox.currentTime - (videoHours * 3600) - (videoMinutes * 60));
        if (videoHours < 10) { videoHours = "0" + videoHours; }
        if (videoMinutes < 10) { videoMinutes = "0" + videoMinutes; }
        if (videoSeconds < 10) { videoSeconds = "0" + videoSeconds; }
        if (videoHours == 0) {
            document.getElementById("videoCurrent").innerHTML = videoMinutes + ":" + videoSeconds;
        } else {
            document.getElementById("videoCurrent").innerHTML = videoHours + ":" + videoMinutes + ":" + videoSeconds;
        };
    }, 200);

    videoBox.onpaused = function() {
        var totalWidth = $('.videoProgressContainer').width();
        var progressBarUpdateNum = parseInt(videoBox.currentTime * totalWidth / videoBox.duration);
        var progressBarUpdate = ((progressBarUpdateNum * 100) / totalWidth) + "%";
        document.getElementById("videoPlayed").style.width = progressBarUpdate;
    };

    $('.videoIndicator').on('mousedown', function(e) {
        var totalWidth = $('.videoProgressContainer').width();
        videoBox.pause();
        $('body').addClass('videoIndicatorActive');
        $('.videoIndicatorUnder').addClass('active');
        $('.videoPlayed').addClass('onDrag');
        $('.videoWrapper').on('mousemove', function(e) {
            $('.videoBottomBtnContainer').addClass('active');
            $('.videoIndicator').addClass('active');
            var offset = progressDiv.getClientRects()[0];
            var progressDrag = e.clientX - offset.left;
            var dragWidthNum = ((progressDrag * 100) / totalWidth)
            var dragWidth = ((progressDrag * 100) / totalWidth) + "%";
            document.getElementById("videoPlayed").style.width = dragWidth;
            videoBox.currentTime = progressDrag * videoBox.duration / totalWidth;
            if (dragWidthNum == 100) {
                $(".videoPlayBtn").removeClass('pause');
                videoBox.pause();
                videoBox.currentTime = 0;
            }
        });
        $(window).on('mouseup', function() {
            $('.videoWrapper').off('mousemove');
        });
    });

    $(window).on('mouseup', function(e) {
        $('.videoBottomBtnContainer').removeClass('active');
        $('.videoIndicator').removeClass('active');
        $('body').removeClass('videoIndicatorActive');
        $('.videoIndicatorUnder').removeClass('active');
        $('.videoPlayed').removeClass('onDrag');
        if (videoBox.paused && $('.videoPlayBtn').hasClass('pause')) {
            videoBox.play();
        }
    });

    progressDiv.addEventListener('click', function(e) {
        var totalWidth = $('.videoProgressContainer').width();
        var offset = this.getClientRects()[0];
        var progressClick = e.clientX - offset.left;
        var playedWidthNum = ((progressClick * 100) / totalWidth);
        var playedWidth = ((progressClick * 100) / totalWidth) + "%";
        document.getElementById("videoPlayed").style.width = playedWidth;
        videoBox.currentTime = progressClick * videoBox.duration / totalWidth;
        if (playedWidthNum == 100) {
            $(".videoPlayBtn").removeClass('pause');
            videoBox.pause();
            videoBox.currentTime = 0;
        }
    }, false);


    progressDiv.addEventListener('mousemove', function(e) {
        var totalWidth = $('.videoProgressContainer').width();
        var offset = this.getClientRects()[0];
        var progressMove = e.clientX - offset.left;
        var selectWidth = ((progressMove * 100) / totalWidth) + "%";
        document.getElementById("videoSelect").style.width = selectWidth
    }, false);


    progressDiv.addEventListener('mouseout', function(e) {
        var totalWidth = $('.videoProgressContainer').width();
        var playedWidthonOut = $('.videoPlayed').width();
        var selectonOutWidth = ((playedWidthonOut * 100) / totalWidth) + "%";
        document.getElementById("videoSelect").style.width = selectonOutWidth;
    }, false);


    progressBase.addEventListener('mousemove', function(e) {
        var totalWidth = $('.videoProgressContainer').width();
        var videoTimeBox = document.getElementById('videoTimeTooltip');
        $(".videoTimeTooltipWrapperr").addClass('active');
        var y = ($('#videoProgressBase').offset().top - $(window).scrollTop() - 36) + 'px';
        var x = (e.clientX - 20) + 'px';
        var offsetX = progressDiv.getClientRects()[0];
        var tooltipXposition = e.clientX - offsetX.left + 10;
        videoTimeBox.style.top = y;
        videoTimeBox.style.left = x;
        var tooltipDuration = (videoBox.duration * tooltipXposition) / totalWidth;
        var tooltipHours = Math.floor(tooltipDuration / 3600);
        var tooltipMinutes = Math.floor((tooltipDuration - (tooltipHours * 3600)) / 60);
        var tooltipSeconds = Math.floor(tooltipDuration - (tooltipHours * 3600) - (tooltipMinutes * 60));
        if (tooltipHours < 10) { tooltipHours = "0" + tooltipHours; }
        if (tooltipMinutes < 10) { tooltipMinutes = "0" + tooltipMinutes; }
        if (tooltipSeconds < 10) { tooltipSeconds = "0" + tooltipSeconds; }
        if (tooltipHours == 0) {
            document.getElementById("videoTooltipTime").innerHTML = tooltipMinutes + ":" + tooltipSeconds;
        } else {
            document.getElementById("videoTooltipTime").innerHTML = tooltipHours + ":" + tooltipMinutes + ":" + tooltipSeconds;
        }
    });

    progressBase.addEventListener('mouseleave', function(e) {
        $(".videoTimeTooltipWrapperr").removeClass('active');
    });


    // Vol controller
    var volControl = document.getElementById("volControl");
    var volContainer = document.getElementById('volControlContainer');
    var volDiv = document.getElementById('volControlWrapper');



    $(".videoVolBtn").on('click', function(e) {
        var volTarget = e.target;
        var volControlWrapperTarget = document.getElementById('volControlWrapper');
        var volControlContainerTarget = document.getElementById('volControlContainer');
        var volControlTarget = document.getElementById('volControl');
        var volControlH = $('.volControl').height();
        var volControlAmount = volControlH / 100;
        if (volTarget == volControlWrapperTarget || volTarget == volControlContainerTarget || volTarget == volControlTarget) {

        } else {

            if ($('.videoVolBtn').hasClass('mute')) {
                videoBox.volume = volControlAmount;
                $('.videoVolBtn').removeClass('mute');
                if (volControlH < 4) {
                    $('.volCountMiddle').removeClass('active');
                    $('.volCountLoud').removeClass('active');
                } else if (volControlH >= 4 && volControlH < 30) {
                    videoBox.volume = volControlAmount;
                    $('.volCountMiddle').removeClass('active');
                    $('.volCountLoud').removeClass('active');
                } else if (volControlH >= 30 && volControlH < 60) {
                    videoBox.volume = volControlAmount;
                    $('.volCountMiddle').addClass('active');
                    $('.volCountLoud').removeClass('active');
                } else if (volControlH >= 60) {
                    $('.volCountMiddle').addClass('active');
                    $('.volCountLoud').addClass('active');
                }
            } else if (!$('.videoVolBtn').hasClass('mute')) {
                videoBox.volume = 0;
                $('.videoVolBtn').addClass('mute');
                $('.volCountMiddle').removeClass('active');
                $('.volCountLoud').removeClass('active');
            }
        }
    });

    $(".volControlWrapper").on('mouseenter', function(e) {
        $(this).bind('mousewheel DOMMouseScroll', function(e) {
            var scrollTo = null;

            if (e.type == 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            if (scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        });
    });



    volDiv.addEventListener('click', function(e) {
        var offset = volContainer.getClientRects()[0];
        var volClick = e.clientY - offset.top;
        var totalHeight = $('.volControlContainer').height();
        var muteTrigger = 100 - ((volClick * 100) / totalHeight);
        var finalVol = 100 - ((volClick * 100) / totalHeight) + "%";
        document.getElementById("volControl").style.height = finalVol;
        videoBox.volume = muteTrigger / 100;
        if (muteTrigger < 4) {
            $('.videoVolBtn').addClass('mute');
            $('.volCountMiddle').removeClass('active');
            $('.volCountLoud').removeClass('active');
            videoBox.volume = 0;
        } else if (muteTrigger >= 4 && muteTrigger < 30) {
            $('.videoVolBtn').removeClass('mute');
            $('.volCountMiddle').removeClass('active');
            $('.volCountLoud').removeClass('active');
        } else if (muteTrigger >= 30 && muteTrigger < 60) {
            $('.videoVolBtn').removeClass('mute');
            $('.volCountMiddle').addClass('active');
            $('.volCountLoud').removeClass('active');
        } else if (muteTrigger >= 60 && muteTrigger <= 100) {
            $('.videoVolBtn').removeClass('mute');
            $('.volCountMiddle').addClass('active');
            $('.volCountLoud').addClass('active');
        }
    }, false);


    $('.volControlWrapper').on('mousedown', function(e) {
        $('body').addClass('videoIndicatorActive');
        $('.volControlWrapper').on('mousemove', function(e) {
            var offset = volContainer.getClientRects()[0];
            var volClick = e.clientY - offset.top;
            var totalHeight = $('.volControlContainer').height();
            var muteTrigger = 100 - ((volClick * 100) / totalHeight);
            var finalVol = 100 - ((volClick * 100) / totalHeight) + "%";
            document.getElementById("volControl").style.height = finalVol;
            $('.volControlWrapper').addClass('active');
            $('.videoVolBtn').addClass('disable');
            videoBox.volume = muteTrigger / 100;
            if (muteTrigger < 4) {
                $('.videoVolBtn').addClass('mute');
                $('.volCountMiddle').removeClass('active');
                $('.volCountLoud').removeClass('active');
                videoBox.volume = 0;
            } else if (muteTrigger >= 4 && muteTrigger < 30) {
                $('.videoVolBtn').removeClass('mute');
                $('.volCountMiddle').removeClass('active');
                $('.volCountLoud').removeClass('active');
            } else if (muteTrigger >= 30 && muteTrigger < 60) {
                $('.videoVolBtn').removeClass('mute');
                $('.volCountMiddle').addClass('active');
                $('.volCountLoud').removeClass('active');
            } else if (muteTrigger >= 60 && muteTrigger <= 100) {
                $('.videoVolBtn').removeClass('mute');
                $('.volCountMiddle').addClass('active');
                $('.volCountLoud').addClass('active');
            }
        });
        $(window).on('mouseup', function() {
            $('.volControlWrapper').off('mousemove');
        });

    });

    $(window).on('mouseup', function(e) {
        $('.volControlWrapper').removeClass('active');
        $('.videoVolBtn').removeClass('disable');

    });



    window.onload = function() {
        videoSidePanelRate();
        videoSidepanelPercent();
        // table of content line corrector 
        var secTitleHeight = $('.contentTableTitleSection').height();
        $('.indSec').css('height', secTitleHeight + 'px');

        // Course progress bar animation
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

        // Course progress bar animation focusMode
        var r = 11;
        var c = 2 * Math.PI * r;
        $('.courseProgressBarFocus').each(function() {
            var percent = $(this).data("percent") / 100;
            var dashoffset = c * (1 - percent);
            $(this).css('stroke-dashoffset', dashoffset);
            $(this).css('stroke-dasharray', c);
        });
        $('.tooltipProgressContentContainerFocus').each(function() {
            this.innerHTML = $(this).data("percent") + " %";
        });

        // Course progress bar animation focusMode
        var rSection = 11;
        var cSection = 2 * Math.PI * rSection;
        $('.lessonListSectionStatusProgressBar').each(function() {
            var percent = $(this).data("percent") / 100;
            var dashoffset = cSection * (1 - percent);
            $(this).css('stroke-dashoffset', dashoffset);
            $(this).css('stroke-dasharray', cSection);
        });

        var rChapter = 9;
        var cChapter = 2 * Math.PI * rChapter;
        $('.lessonListChapterStatusProgressBar').each(function() {
            var percent = $(this).data("percent") / 100;
            var dashoffset = cChapter * (1 - percent);
            $(this).css('stroke-dashoffset', dashoffset);
            $(this).css('stroke-dasharray', cChapter);
        });



        //Set duration
        setInterval(function() {
            var videoHours = Math.floor(videoBox.duration / 3600);
            var videoMinutes = Math.floor((videoBox.duration - (videoHours * 3600)) / 60);
            var videoSeconds = Math.floor(videoBox.duration - (videoHours * 3600) - (videoMinutes * 60));
            if (videoHours < 10) { videoHours = "0" + videoHours; }
            if (videoMinutes < 10) { videoMinutes = "0" + videoMinutes; }
            if (videoSeconds < 10) { videoSeconds = "0" + videoSeconds; }
            if (videoHours == 0) {
                document.getElementById("videoDuration").innerHTML = videoMinutes + ":" + videoSeconds;
            } else {
                document.getElementById("videoDuration").innerHTML = videoHours + ":" + videoMinutes + ":" + videoSeconds;
            }

        }, 200);



        // Vol Setter
        var volControlH = $('.volControl').height();
        var volControlAmount = volControlH / 100;

        if (volControlH < 4) {
            videoBox.volume = 0;
            $('.videoVolBtn').addClass('mute');
            $('.volCountMiddle').removeClass('active');
            $('.volCountLoud').removeClass('active');

        } else if (volControlH >= 4 && volControlH < 30) {
            videoBox.volume = volControlAmount;
            $('.volCountMiddle').removeClass('active');
            $('.volCountLoud').removeClass('active');

        } else if (volControlH >= 30 && volControlH < 60) {
            videoBox.volume = volControlAmount;
            $('.volCountMiddle').addClass('active');
            $('.volCountLoud').removeClass('active');

        } else if (volControlH >= 60) {
            videoBox.volume = volControlAmount;
            $('.volCountMiddle').addClass('active');
            $('.volCountLoud').addClass('active');
        };
        //  Video buffered
        setInterval(function() {
            var bf = videoBox.buffered;
            var time = videoBox.currentTime;
            if (!bf.length) {
                return;
            }
            var loadStartPercentage = bf.start(0) / videoBox.duration;
            var loadEndPercentage = bf.end(bf.length - 1) / videoBox.duration;
            var loadPercentage = loadEndPercentage - loadStartPercentage;
            var val = loadPercentage * 100;
            document.getElementById("videoBuffered").style.width = val + "%";

        }, 200);

    };


    //Video full screen

    var videoFullscreen = document.getElementById("videoFullBtn");

    if (videoBox && videoFullscreen) {
        videoFullscreen.addEventListener("click", function(evt) {
            if (videoBox.requestFullscreen) {
                videoBox.requestFullscreen();
            } else if (videoBox.msRequestFullscreen) {
                videoBox.msRequestFullscreen();
            } else if (videoBox.mozRequestFullScreen) {
                videoBox.mozRequestFullScreen();
            } else if (videoBox.webkitRequestFullScreen) {
                videoBox.webkitRequestFullScreen();
            }
        }, false);
    }



    // Theater mode
    $('.videoTheaterBtn').click(function() {
        if ($('.toggleBaseFocus').hasClass('active')) {
            if ($('.playerFocusModeTopContainer').hasClass('theater')) {
                if (videoBox.paused || videoBox.ended) {
                    $("#videoWrapper").appendTo("#palyerFocusVideoContainer");
                    $('.playerFocusModeWrapper').removeClass('theater');
                    $('.playerFocusModeTopContainer').removeClass('theater');
                    $('.theaterWrapper').removeClass('theater');
                } else {
                    $("#videoWrapper").appendTo("#palyerFocusVideoContainer");
                    $('.playerFocusModeWrapper').removeClass('theater');
                    $('.playerFocusModeTopContainer').removeClass('theater');
                    $('.theaterWrapper').removeClass('theater');
                    videoBox.play();
                }
            } else {
                $(window).scrollTop(0);
                if (videoBox.paused || videoBox.ended) {
                    $("#videoWrapper").appendTo("#theaterContainer");
                    $('.playerFocusModeWrapper').addClass('theater');
                    $('.playerFocusModeTopContainer').addClass('theater');
                    $('.theaterWrapper').addClass('theater');
                } else {
                    $("#videoWrapper").appendTo("#theaterContainer");
                    $('.playerFocusModeWrapper').addClass('theater');
                    $('.playerFocusModeTopContainer').addClass('theater');
                    $('.theaterWrapper').addClass('theater');
                    videoBox.play();
                }
            }

        } else {
            if ($('.player-main').hasClass('theater')) {
                if (videoBox.paused || videoBox.ended) {
                    $("#videoWrapper").appendTo("#videoSection");
                    $('.player-main').removeClass('theater');
                    $('.theaterWrapper').removeClass('theater');
                } else {
                    $("#videoWrapper").appendTo("#videoSection");
                    $('.player-main').removeClass('theater');
                    $('.theaterWrapper').removeClass('theater');
                    videoBox.play();
                }
            } else {
                $(window).scrollTop(0);
                if (videoBox.paused || videoBox.ended) {
                    $("#videoWrapper").appendTo("#theaterContainer");
                    $('.player-main').addClass('theater');
                    $('.theaterWrapper').addClass('theater');
                } else {
                    $("#videoWrapper").appendTo("#theaterContainer");
                    $('.player-main').addClass('theater');
                    $('.theaterWrapper').addClass('theater');
                    videoBox.play();
                }
            }
        }

    });

    // Keyboard video control
    document.addEventListener("keydown", function(event) {
        var videoWrapperTop = $("#videoWrapper").offset().top;
        var videoWrapperBottom = videoWrapperTop + $("#videoWrapper").outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (videoWrapperBottom > viewportTop && videoWrapperTop < viewportBottom && !$('#insertQuestionTitleInput').is(":focus") && !$('#insertQuestionContentTextarea').is(":focus") && !$('#insertQuestionTextareaFocus').is(":focus")) {
            if (event.which == 32) {
                $('.onVideoScreenLogoContainer').addClass('play');
                event.preventDefault();
                if (videoBox.paused || videoBox.ended) {
                    $('.videoPlayBtn').addClass('pause');
                    $('.onVideoScreenPlayStatus').removeClass('pause');
                    $('.onVideoScreenPlayStatus').addClass('play');
                    videoBox.play();
                } else {
                    $('.videoPlayBtn').removeClass('pause');
                    $('.onVideoScreenPlayStatus').removeClass('play');
                    $('.onVideoScreenPlayStatus').addClass('pause');
                    videoBox.pause();
                };
            } else if (event.which == 39) {
                event.preventDefault();
                videoBox.currentTime = Math.min(videoBox.duration, videoBox.currentTime + 1.5);
            } else if (event.which == 37) {
                event.preventDefault();
                videoBox.currentTime = Math.max(0, videoBox.currentTime - 1.5);
            } else if (event.which == 70) {
                if (videoBox.requestFullscreen) {
                    videoBox.requestFullscreen();
                } else if (videoBox.msRequestFullscreen) {
                    videoBox.msRequestFullscreen();
                } else if (videoBox.mozRequestFullScreen) {
                    videoBox.mozRequestFullScreen();
                } else if (videoBox.webkitRequestFullScreen) {
                    videoBox.webkitRequestFullScreen();
                }
            } else if (event.which == 84) {
                $('.videoTheaterBtn').click();
                return false;
            }

        };
    });


    // Video side rate
    function videoSidePanelRate() {
        var starRate = document.getElementById("videoSidePanelRate").innerHTML * 20;
        $('.videoSidePanelStarBar').css('width', starRate + '%');
    };

    function videoSidepanelPercent() {
        var oneRate = document.getElementById("oneRate").innerHTML;
        var twoRate = document.getElementById("twoRate").innerHTML;
        var threeRate = document.getElementById("threeRate").innerHTML;
        var fourRate = document.getElementById("fourRate").innerHTML;
        var fiveRate = document.getElementById("fiveRate").innerHTML;
        var sum = +oneRate + +twoRate + +threeRate + +fourRate + +fiveRate;

        $("#oneBar").css('width', (oneRate / sum) * 100 + '%');
        $("#twoBar").css('width', (twoRate / sum) * 100 + '%');
        $("#threeBar").css('width', (threeRate / sum) * 100 + '%');
        $("#fourBar").css('width', (fourRate / sum) * 100 + '%');
        $("#fiveBar").css('width', (fiveRate / sum) * 100 + '%');
    };

    // Show more lesson description
    $('.lessonDescriptionHiderContainer').click(function() {
        if ($('.lessonDescriptionContainer').hasClass('showMore')) {
            $('.lessonDescriptionContainer').removeClass('showMore');
            $(this)[0].getElementsByTagName('span')[0].innerHTML = "ادامه مطلب";
        } else {
            $('.lessonDescriptionContainer').addClass('showMore');
            $(this)[0].getElementsByTagName('span')[0].innerHTML = "بستن";
        }
    });




    $(window).scroll(function() {
        var footerTop = $('.playerFooterWrapper').offset().top,
            footerHeight = $('.playerFooterWrapper').outerHeight(),
            wHeight = $(window).height(),
            windowScrTp = $(this).scrollTop();
        if (windowScrTp > (footerTop + footerHeight - wHeight + 24)) {}
    });