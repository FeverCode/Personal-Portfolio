//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 AOS.init({
// Global settings:
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


 });

 AOS.init({
  // AOS would work only for windows bigger than or equal to 768px
  disable: function() { var maxWidth = 768; return window.innerWidth < maxWidth; }
});


// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:

AOS.init({

 mirror: true, // whether elements should animate out while scrolling past them          

  });

AOS.init({
  
once: false, // whether animation should happen only once - while scrolling down

  });