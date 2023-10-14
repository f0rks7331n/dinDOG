//
const togglerMenu = document.querySelector(".toggler-menu");
const navMenu = document.querySelector(".nav-menu");
//
togglerMenu.addEventListener("click", () => {
    togglerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});