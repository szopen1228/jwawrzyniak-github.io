window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.left = "0";
  } else {
    document.getElementById("navbar").style.left = "-100px";
  }
}

function opacity() {
  if (document.getElementById("navbar_img").style.opacity = "0")
  {
    document.getElementById("navbar_img").style.opacity = "1"
  }
}

function opacity2() {
  if (document.getElementById("navbar_img").style.opacity = "1")
  {
    document.getElementById("navbar_img").style.opacity = "0"
  }
}

function useMethods() {
        var oDiv = document.getElementById("navbar_social");
        oDiv.style.removeProperty("transition-delay");
    }

function opacity_logo() {
  if (document.getElementById("navbar_social").style.opacity = "0")
  {
    document.getElementById("navbar_social").style.opacity = "1"
  }
}

function opacity_logo2() {
  if (document.getElementById("navbar_social").style.opacity = "1")
  {
    document.getElementById("navbar_social").style.opacity = "0"
    useMethods();
  }
}
