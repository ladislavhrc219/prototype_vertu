function tabSlider(x) {
  showTabs(slideIndex = x);
}

function showTabs(x) {
  var t;
  var slides = document.getElementsByClassName("tabnav__slides");
  
  if (x > slides.length) {slideIndex = 1}    
  if (x < 1) {slideIndex = slides.length}
  for (t = 0; t < slides.length; t++) {
      slides[t].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
 
}