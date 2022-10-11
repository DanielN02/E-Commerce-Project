let slides = document.querySelectorAll(".slide-container"); //selected the slide-container div class
let index = 0; //choosing the first slide

function next() {
  //created a function called next
  slides[index].classList.remove("active"); //this removes the first slider when the function is called
  index = (index + 1) % slides.length; //moves the index up a number which changes the slide to the one after
  slides[index].classList.add("active"); //this adds the first slider when the function is called
}

function prev() {
  slides[index].classList.remove("active"); //this removes the first slider when the function is called
  index = (index - 1 + slides.length) % slides.length; //moves the index down a number which changes the slide in reverse
  slides[index].classList.add("active"); //this adds the first slider when the function is called
}
