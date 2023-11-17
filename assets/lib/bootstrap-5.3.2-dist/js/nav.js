const hamburger = document.querySelector(".hamburger-cozy");
const navMenu = document.querySelector(".nav-menu-cozy");
const navLink = document.querySelectorAll(".nav-link-cozy");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
