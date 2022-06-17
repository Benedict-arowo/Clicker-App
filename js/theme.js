const themeButtons = document.querySelectorAll(".theme")
const style = document.getElementById("style")
const logo = document.getElementById("logo")
const themeSound = new Audio("audio/themeSound.mp3")
let themeValue = "";

const updateTheme = (theme) => {
    style.setAttribute("href", theme)
    themeValue = theme
    localStorage.setItem("theme", theme);
    // console.log(style)
}

themeButtons.forEach(item => {
    item.addEventListener("click", (e) => {
        let data = item.dataset.id
        themeSound.volume = .3;
        themeSound.play()
        updateTheme(data)
    })
})

if (localStorage.getItem("theme") == null) {

}
else {
    updateTheme(localStorage.getItem("theme"));
}




