 
  var video = document.getElementById("dark_matter_video");

   var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isIOS && isSafari) {
     video.play();

  }
  video.addEventListener("ended", function () {
     var nextSource = "../static/img/dark_matter_loop.mp4"; // Replace with your next video source
    video.src = nextSource;
    video.load();
    video.play();
    video.loop = true; // Enable looping for the second video
  });
 

 
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    var darkMatterContainer = document.querySelector(".dark_matter_container");
    darkMatterContainer.classList.add("safari");

    var darkMatterContainer = document.querySelector(".portal_container");
    darkMatterContainer.classList.add("safari");
  }
 