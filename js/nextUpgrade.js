const upgradeBtn = document.getElementById("upgradeBtn");
const clicksUpgradeValue = document.getElementById("clickUpgradeValue")
const pointsUpgradeValue = document.getElementById("pointsUpgradeValue")
const levelUpgradeValue = document.getElementById("levelUpgradeValue")
const boosterUpgradeValue = document.getElementById("boosterUpgradeValue")
const alertText = document.getElementById("alertText")
const levelUpSound = new Audio("audio/levelUpSound.mp3")

// Next upgrade Values 
    let pointRequired;
    let clickRequired;
    let nextlevel = level + 1;

const updateRequiredValues = () => {

    // Random constant values made up to calculate the next upgrade values.

    pointRequired = Math.round((level * 1000) * .25);
    clickRequired = Math.round((level * 6000) * 1.25);

    updateRequiredValuesDisplay()
}
 
const updateRequiredValuesDisplay = () => {
    clicksUpgradeValue.innerText = clickRequired;
    pointsUpgradeValue.innerText = pointRequired;
    levelUpgradeValue.innerText = nextlevel;
}


const Verification = () => {
    if (point >= pointRequired && click >= clickRequired) {

        // Subtracting the upgrade click and point from the required values.
        
        point -= pointRequired;
        click -= clickRequired;
        nextlevel++;
        level++;

        updateStatsDisplay()
        updateRequiredValues();

        levelUpSound.currentTime = 0;
        levelUpSound.play()
        updateLocalStorage()
    }

    else {

        if (point < pointRequired && click < clickRequired) {
            alertText.innerText = "You do not have enough points nor clicks!"
            displayAlert()
        }
        else if (point < pointRequired) {
            alertText.innerText = "You do not have enough points!"
            displayAlert()
        }
        else if (click < clickRequired) {
            alertText.innerText = "You do not have enough clicks!"
            displayAlert()
        }
    }
}

const displayAlert = () => {
    alertText.classList.add("alertVisible");
    let alertTimeout = setTimeout(removeAlert, 3000);
}

const removeAlert = () => {
    alertText.classList.remove("alertVisible")
}

upgradeBtn.addEventListener("click", (e) => {
    Verification();
})

updateRequiredValues();
