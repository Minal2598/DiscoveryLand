
// javascript for background video
var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//  javascript for toggle Menu
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.classList.add("active");
}
function hideMenu(){
    navLinks.classList.remove("active");
}