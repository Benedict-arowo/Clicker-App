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
const multiplierClicks = document.getElementById("multiplierValueClicks");
const multiplierPoints = document.getElementById("multiplierValuePoints");
const multiplierAutoclicks = document.getElementById("multiplierValueAutoClickers");


const updateStats = () => {
    value = parseInt(clicksValue.innerText)
    value += clickCount
    clicksValue.innerText = value;
    calculatePoints()
    updateLocalStorage()
    clickCount = 0
    clickDisplay.innerText = 0;
}

const calculatePoints = () => {
    let currentLevel = parseInt(levelValue.innerText);
    let currentPoints = parseInt(pointsValue.innerText);
    
    let points = ((currentLevel/10) * clickCount)
    if (multiplierPoints.innerText == "X3" || multiplierPoints.innerText == "X5" || multiplierPoints.innerText == "X8") {
        points = pointMultiplier(points)
    }
    points = parseFloat((points * 0.5) + currentPoints).toFixed(2)
    pointsValue.innerText = points
}

clickBtn.addEventListener('click', (e) => {
    clickSound.currentTime = 0;
    clickSound.play()
        // Checks if it has click modifiers
    if (multiplierClicks.innerText == "X1.5" || multiplierClicks.innerText == "X5" || multiplierClicks.innerText == "X6") {
        let click = clicksMultiplier()
        clickCount = clickCount + click;
        clickDisplay.innerText = clickCount;
    }
    else {
        clickCount++;
        clickDisplay.innerText = clickCount;
    }
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
        multiplierClicks.innerText = "";
        multiplierPoints.innerText = "";
        multiplierAutoclicks.innerText = "";
        pointsRequiredCal();
        clicksRequiredCal();
        updateLocalStorage();
    }
    else {

    }

})

const updateLocalStorage = () => {
    localStorage.setItem("clicks", parseInt(clicksValue.innerText))
    localStorage.setItem("points", parseFloat(pointsValue.innerText))
    localStorage.setItem("level", parseInt(levelValue.innerText));
}

if (localStorage.getItem("level") == null) {
    
}
else {
    clicksValue.innerText = localStorage.getItem("clicks");
    pointsValue.innerText = localStorage.getItem("points");
    levelValue.innerText = localStorage.getItem("level");

}
