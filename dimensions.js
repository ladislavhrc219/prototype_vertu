var swatchIndx = 1;
showSwatches(swatchIndx);


function currentSwtch(n) {
  showSwatches(swatchIndx = n);
}

function showSwatches(n) {
  var s;
  var swatches = document.getElementsByClassName("tabnav__swatches");
  var colorDots = document.getElementsByClassName("color__selector");
  if (n > swatches.length) {swatchIndx = 1}    
  if (n < 1) {swatchIndx = swatches.length}
  for (s = 0; s < swatches.length; s++) {
      swatches[s].style.display = "none";  
  }
  for (s = 0; s < colorDots.length; s++) {
      colorDots[s].className = colorDots[s].className.replace(" active", "");
  }
  swatches[swatchIndx-1].style.display = "block";  
  colorDots[swatchIndx-1].className += " active";
}