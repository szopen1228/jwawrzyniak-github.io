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





function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
