const clickBtn = document.getElementById("button");
const clickDisplay = document.getElementById("clickCountValue");
const updateButton = document.getElementById("updateButton")
const clickSound = new Audio("audio/clickSound.mp3");
const resetBtn = document.getElementById("reset");

// Stats 
const clicksValue = document.getElementById("clickValue");
const pointsValue = document.getElementById("pointsValue");
const levelValue = document.getElementById("levelValue");



// Default Stat Values

let click = 0
let point = 0
let level = 1
let currentClickCount = 0

const updateStatsDisplay = () => {
    pointsValue.innerText = point.toFixed(2);
    levelValue.innerText = level; 
    clicksValue.innerText = click;
}

const updateStats = () => {
    click += currentClickCount
    calculatePoints()
    updateStatsDisplay()

    // Resetting the click value

    currentClickCount = 0
    updateClickAmount()
    updateLocalStorage()
}


const updateClickAmount = () => {
    clickDisplay.innerText = currentClickCount;
}

const calculatePoints = () => {    

        // Random Numbers used for calculating a set amount of points gained depending on the amount of clicks.

    let pointsGained = parseFloat((((level/10) * currentClickCount) * 0.5).toFixed(2))

    // Checks if any point modifier is active 
    
    if (pointMultiplier == null) {
        point += pointsGained
    }
    else {
        point += pointsGained * parseInt(pointMultiplier.slice(1))
    }
}


clickBtn.addEventListener('click', (e) => {
    clickSound.currentTime = 0;
    clickSound.play()

        // Checks if any click modifier is active, and if any is present, it adds it to the variable

    if (clickMultipler == null) {
        currentClickCount++;
    }
    else {
        currentClickCount += parseFloat(clickMultipler.slice(1))
    }

    updateClickAmount()
    updateLocalStorage()
})


updateButton.addEventListener('click', (e) => {
    updateStats();
})

resetBtn.addEventListener("click", (e) => {
    let promptValue = prompt("Are you sure? (y)").toLowerCase();
    if (promptValue == "yes" || promptValue == "y"){
        click = 0;
        point = 0;
        level = 1;
        nextlevel = 2;
        pointMultiplier = null;
        clickMultipler = null;
        autoclickerValue = null;
        updateMultiplierDisplay()
        updateStatsDisplay();
        updateRequiredValues();
        updateLocalStorage();
    }
})

const updateLocalStorage = () => {
    localStorage.setItem("clicks", click)
    localStorage.setItem("points", point)
    localStorage.setItem("level", level);
    localStorage.setItem('clickCount', currentClickCount)
}

// Checks if the player has stats saved in the localStorage, It checks the level since a player can only have a level set in the localstorage if they've played previously.

if (localStorage.getItem("level") === null) {
}
else {
    click = parseFloat(localStorage.getItem("clicks"));
    point = parseFloat(localStorage.getItem("points"));
    level = parseFloat(localStorage.getItem("level"));
    currentClickCount = parseFloat(localStorage.getItem('clickCount'));
    updateClickAmount();
    updateStatsDisplay();
    }


