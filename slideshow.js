var slideNum = 1;
displaySlides(slideNum);

// Next/previous controls
function changeSlides(n) {
  displaySlides(slideNum += n);
}

function displaySlides(n) {
  var s;
  var slides = document.getElementsByClassName("slider__next");

  if (n > slides.length) {slideNum = 1}
  if (n < 1) {slideNum = slides.length}
  for (s = 0; s < slides.length; s++) {
      slides[s].style.display = "none";
  }
  slides[slideNum-1].style.display = "block";

}