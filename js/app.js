/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
var navbar = function(){
  var nav_header = document.querySelector('#navbar__list');  
  const sections = document.querySelectorAll("section");
  for(var i=1;i<=sections.length;i++){
    var newLi = document.createElement("li");
    var anchorEl = document.createElement("a");
    anchorEl.classList.add("menu__link")
    anchorEl.setAttribute("href", `#section${i}`);
    anchorEl.setAttribute("id", `#section ${i}`);
    anchorEl.removeAttribute("width");
    anchorEl.textContent = `Section ${i}`
    newLi.appendChild(anchorEl);
    nav_header.appendChild(newLi);
  }
}
navbar();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active