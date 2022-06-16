const hamburger = document.getElementById("hamburger");
const toggleMenu = document.getElementById("toggleMenu")

hamburger.addEventListener('click', (e) => {
    toggleMenu.classList.toggle("showToggleMenu");
})