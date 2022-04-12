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

const sections = document.querySelectorAll("section");

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
const navbar = () => {
  // select navbar_list class from 
  var nav_header = document.querySelector("#navbar__list");

  // loop through sectiona to get num of navbar elements
  for (var i = 1; i <= sections.length; i++) {
    // start create li elemet
    var newLi = document.createElement("li");
    var anchorEl = document.createElement("a");

    // give css class style to li element 
    anchorEl.classList.add("menu__link");

    // give href to navigate through section
    anchorEl.setAttribute("href", `#section${i}`);

    // give id to make each element unique
    anchorEl.setAttribute("id", `section ${i}`);

    // give inner html content "name"
    anchorEl.innerHTML = `Section ${i}`;

    // append anchor tag as a child for li element 
    newLi.appendChild(anchorEl);

    // append li element as a child for navbar list
    nav_header.appendChild(newLi);
  }
};

// call navbar function to build navbar
navbar();

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  let i = sections.length;

  // while section near top of view 
  while (--i && window.scrollY + 50 < sections[i].offsetTop) {}

  // remove active class from other sections
  sections.forEach((section) => section.classList.remove("your-active-class"));

  // then add active class if within visible height of the element
  if (scrollY - sections[i].offsetHeight < sections[i].offsetTop) {
    sections[i].classList.add("your-active-class");
  }
  // if top of the page remove active class
  if (window.scrollY < 400){
    sections.forEach((section) => section.classList.remove("your-active-class"));
  }
}

// call active class function to fire actions
addActiveClass();

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", addActiveClass);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
