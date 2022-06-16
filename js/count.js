const clickBtn = document.getElementById("button");
const clickDisplay = document.getElementById("clickCountValue");
const updateButton = document.getElementById("updateButton")
const clickSound = new Audio("audio/clickSound.mp3");
const resetBtn = document.getElementById("reset");

let clickCount = 0;
const levelUpSound = new Audio("audio/levelUpSound.mp3")

// Stats 
const clicksValue = document.getElementById("clickValue");
const pointsValue = document.getElementById("pointsValue");
const levelValue = document.getElementById("levelValue");
const boosterValue = document.getElementById("boosterValue");


const updateStats = () => {
    calculatePoints()
    updateLocalStorage()
    value = parseInt(clicksValue.innerText)
    value += clickCount
    clicksValue.innerText = value;
    clickCount = 0
    clickDisplay.innerText = 0;
}

const calculatePoints = () => {
    let currentLevel = parseInt(levelValue.innerText);
    let currentPoints = parseInt(pointsValue.innerText);
    let points = ((currentLevel/10) * clickCount)
    points = ((points * 0.5) + currentPoints)
    pointsValue.innerText = points;
}

clickBtn.addEventListener('click', (e) => {
    clickSound.currentTime = 0;
    clickSound.play()
    clickCount++
    clickDisplay.innerText = clickCount;
})

updateButton.addEventListener('click', (e) => {
    updateStats();
})

resetBtn.addEventListener("click", (e) => {
    let promptValue = prompt("Are you sure? (y/n)").toLowerCase();
    if (promptValue == "yes" || promptValue == "y"){
        clicksValue.innerText = 0;
        pointsValue.innerText = 0;
        levelValue.innerText = 1;
        pointsRequiredCal();
        clicksRequiredCal();
        updateLocalStorage()
    }
    else {

    }

})

const updateLocalStorage = () => {
    localStorage.setItem("clicks", parseInt(clicksValue.innerText))
    localStorage.setItem("points", parseFloat(pointsValue.innerText))
    localStorage.setItem("level", parseInt(levelValue.innerText));
   
    console.log(localStorage.getItem("clicks"))
    console.log(localStorage.getItem("points"))
    console.log(localStorage.getItem("level"))
}

if (localStorage.getItem("level") == null) {
    
}
else {
    clicksValue.innerText = localStorage.getItem("clicks");
    pointsValue.innerText = localStorage.getItem("points");
    levelValue.innerText = localStorage.getItem("level");

}

