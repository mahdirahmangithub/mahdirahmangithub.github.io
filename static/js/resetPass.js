 // Reset password
 $('#signup-resetPassBtn').click(function() {
     var newPass = document.getElementById("newPass").value;
     var newPassRepeat = document.getElementById("retypeNewPass").value;
     document.getElementById("retypeNewPass").focus();
     if (newPass == newPassRepeat && newPass != "") {
         $(this).addClass('sent');
         $('.signup-checkContainer').addClass('sent');
         document.getElementById("signup-resetPassBtn").innerHTML = ""
         setTimeout(function() {
             $('.signup-check').addClass('active');
         }, 600);
     }
 });


 function passChecker() {
     var newPass = document.getElementById("newPass").value;
     var newPassRepeat = document.getElementById("retypeNewPass").value;
     console.log(newPass);
     $(this).next().addClass('filledPass');
     if (newPassRepeat == newPass && newPass != "") {
         $("input[name*='retypeNewPass']").next().addClass('correct');

     } else {
         $("input[name*='retypeNewPass']").next().removeClass('correct');
     }
 }

 $("input[name*='newPass']").on('keyup', passChecker);
 $("input[name*='retypeNewPass']").on('keyup', passChecker);