//SELECTORS
// target the div with id="mobile-menu"
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//FUNCTIONS
//Arrow function below
//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active'); //toggles is-active under #mobile-menu in css. (Responsible for hamburger menu effect)
    menuLinks.classList.toggle('active'); //toggles active under .navbar__menu in css (Responsible for showing navbar menu popup)
};

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    // console.log(scrollPos)


    // adds 'highlight' class to my menu items
    // Do not want highlight effect to occur on mobile/small screen
    // Switches to the next tab in navbar, as you scroll down.
    if(window.innerWidth > 960 && scrollPos < 600) { //Targets home
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight') //remove highlight from about when you scroll up to home
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) { //Targets About
        aboutMenu.classList.add('highlight') //add highlight to about when you reach scrollPos 600-1400
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight') //remove from servicesMenu when scrolling up
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) { 
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
} 

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active') //T/F if the menubar is down (hamburger icon is clicked)
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

//EVENT LISTENERS
//Whenever menu is clicked, run the mobileMenu function above.
menu.addEventListener('click', mobileMenu);
// Highlight tabs in the navbar when scrolling up and down the page or clicking the navbar tabs.
window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)
// Make mobile menu disappear when a menu item is clicked
menuLinks.addEventListener('click',hideMobileMenu)
//Make mobile menu disappear when the logo is clicked
navLogo.addEventListener('click',hideMobileMenu)