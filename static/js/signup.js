 // Signup page script
 $('.signup-optionBtn').click(function() {
     $('.signup-optionBtn').removeClass('active');
     $(this).toggleClass('active');
 });

 // Login options
 $('#registerBtn').click(function() {
     $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', 1);
     $(".signup-loginPanelContainer").children().children().children().children('.signup-checkboxBase').attr('tabIndex', 1);
     $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', 1);

     $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
     $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);
     $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
     $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);

     if ($('.signup-loginPanelContainer').hasClass('forget')) {
         $('.signup-loginPanelContainer').removeClass('forget');
         $('.signup-forgetPanelContainer').addClass('forget');
         setTimeout(function() {
             $('.signup-fieldContainer').removeClass('login');
         }, 310);

     } else {
         $('.signup-fieldContainer').removeClass('login');
     }
 });

 $('#loginBtn').click(function() {
     $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
     $(".signup-loginPanelContainer").children().children().children().children('.signup-checkboxBase').attr('tabIndex', -1);
     $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);


     $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', 1);
     $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', 1);
     $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
     $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);

     $('.signup-fieldContainer').addClass('login');
 });


 $("#registerBtn").keyup(function(event) {
     if (event.keyCode === 13) {
         $("#registerBtn").click();
     }
 });

 $("#loginBtn").keyup(function(event) {
     if (event.keyCode === 13) {
         $("#loginBtn").click();
     }
 });

 $(".signup-checkboxBase").keyup(function(event) {
     if (event.keyCode === 13) {
         $(".signup-checkboxBase").click();
     }
 });

 //Forget password
 $('.signup-forgetSpan').click(function() {
     $('.signup-loginPanelContainer').toggleClass('forget');
     $('.signup-forgetPanelContainer').toggleClass('forget');

     if ($('.signup-loginPanelContainer').hasClass('forget')) {
         $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', 1);
         $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', 1);
     } else {
         $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
         $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);
     }
 });

 // email input
 $("input[type=email]").blur(function() {
     if (!$(this).val() == '') {
         $(this).next().addClass('hasValue')
     } else {
         $(this).next().removeClass('hasValue')
     };
 });

 // Sent forget password mail Loading
 $('#signup-sendMailBtn').click(function() {
     $(this).addClass('sent');
     $('.signup-loadingContainer').addClass('loading');
     document.getElementById("signup-sendMailBtn").innerHTML = "";
     var forgetPanelTitle = document.getElementById("forgetPanelTitleContainer")
     setTimeout(function() {
         $(".signup-forgetPanelContainer").addClass('sent');
         $("#forgetPanelTitleContainer").children('span')[0].innerHTML = "چند لحظه صبر کنید ...";
     }, 200);
     setTimeout(mailSent, 5000);
 });

 // Mail sent animation
 function mailSent() {
     $(this).addClass('sent');
     $('.signup-checkContainer').addClass('sent');
     var forgetPanelTitle = document.getElementById("forgetPanelTitleContainer")
     setTimeout(function() {
         $('.signup-check').addClass('active');
         $("#forgetPanelTitleContainer").children('span')[0].innerHTML = "لینک تغییر رمز عبور به ایمیلتان ارسال شد. در صورت عدم دریافت ایمیل <a>اینجا </a > را کلیک کنید.";
         $(".signup-forgetPanelContainer").addClass('sent');
         $(".signup-mailAnimationContainer").addClass('sent');
     }, 600);
 };


 window.onload = function() {
     if ($('.signup-fieldContainer').hasClass('login')) {
         $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
         $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);
         $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
         $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);
     } else {
         $(".signup-loginPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
         $(".signup-loginPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);

         $(".signup-forgetPanelContainer").children().children().children('.signup-input').attr('tabIndex', -1);
         $(".signup-forgetPanelContainer").children().children('.signup-enterBtn').attr('tabIndex', -1);
     }
 }

 // Checkbox

 $('.signup-checkboxBase').click(function() {
     $(this).toggleClass('checked')
 });