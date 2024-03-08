const body = document.querySelector("body"); //can search by element, class, or id
const button = document.querySelector("button");
const logoText = document.querySelector("#logoText")


/* Change background color with press of button*/
let colors = ['red', 'blue', 'green','yellow', 'pink', 'purple', 'orange' ];
let lastNum = 0;
button.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * colors.length - 1);
    if (randomNum == lastNum)
    {
        randomNum = Math.floor(Math.random() * colors.length - 1);
    }
    lastNum = randomNum;
    logoText.style.color = colors[randomNum];
});

/** Make Header sticky */
/**Currently only works for home page */
// When the user scrolls the page, toggleSticky navbar
window.onscroll = function() {toggleSticky()};

// Get the navbar
var navBar = document.getElementsByClassName("headerNav");

// Get the offset position of the navbar
var sticky = navBar[0].offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleSticky() {
  if (window.scrollY >= sticky) {
    navBar[0].classList.add("sticky")
  } else {
    navBar[0].classList.remove("sticky");
  }
}

