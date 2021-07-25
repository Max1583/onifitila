//CHANGE HEADER BACKGROUND ON SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.background = "linear-gradient(315deg, #0bab64 0%, #3bb78f 74%)";
    document.getElementById("navbar").style.transition = ".5s all";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  
  }
}

