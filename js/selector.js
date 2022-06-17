const hamburger = document.getElementById("hamburger");
const toggleMenu = document.getElementById("toggleMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener('click', (e) => {
    toggleMenu.classList.toggle("showToggleMenu");
    hamburger.style.visibility = "hidden";
})

closeBtn.addEventListener("click", (e) => {
    toggleMenu.classList.remove("showToggleMenu");
    hamburger.style.visibility = "visible";
});