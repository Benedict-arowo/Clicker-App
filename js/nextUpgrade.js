const upgradeBtn = document.getElementById("upgradeBtn");
const clicksUpgradeValue = document.getElementById("clickUpgradeValue")
const pointsUpgradeValue = document.getElementById("pointsUpgradeValue")
const levelUpgradeValue = document.getElementById("levelUpgradeValue")
const boosterUpgradeValue = document.getElementById("boosterUpgradeValue")
const alertText = document.getElementById("alertText")

const pointsRequiredCal = () => {
    currentLevel = parseInt(levelValue.innerText)
    pointCal = Math.round((currentLevel * 1000) * .25);
    pointsUpgradeValue.innerText = pointCal;
    // console.log(pointCal)
}

const clicksRequiredCal = () => {
    currentLevel = parseInt(levelValue.innerText)
    clicksCal = Math.round((currentLevel * 6000) * 1.25);
    clicksUpgradeValue.innerText = clicksCal;
    //Upgrade level value
    // console.log(currentLevel)   
    levelUpgradeValue.innerText = currentLevel + 1;
    // console.log(clicksCal)
}

const Verification = () => {
    let RequiredPointsValue = parseInt(pointsUpgradeValue.innerText) 
    let CurrentPointsValue = parseInt(pointsValue.innerText)

    let RequiredClicksValue = parseInt(clicksUpgradeValue.innerText) 
    let CurrentClicksValue = parseInt(clicksValue.innerText)
    
    if (CurrentPointsValue >= RequiredPointsValue && CurrentClicksValue >= RequiredClicksValue) {
        currentLevel = parseInt(levelValue.innerText)
        let upgradeLevelValue = parseInt(levelUpgradeValue.innerText)
        let newPointValue = CurrentPointsValue - RequiredPointsValue;

        pointsValue.innerText = newPointValue;
        levelValue.innerText = currentLevel + 1;
        pointsRequiredCal()

        let newClickValue = CurrentClicksValue - RequiredClicksValue;
        clicksValue.innerText = newClickValue;
        clicksRequiredCal()
        
        let newUpgradeValue = upgradeLevelValue + 1;
        levelUpSound.currentTime = 0;
        levelUpSound.play()
        levelUpgradeValue.innerText = newUpgradeValue;
        updateLocalStorage()
    }

    else {

        if (CurrentPointsValue < RequiredPointsValue && CurrentClicksValue < RequiredClicksValue) {
            alertText.innerText = "You do not have enough points nor clicks!"
            displayAlert()
        }
        else if (CurrentPointsValue < RequiredPointsValue) {
            alertText.innerText = "You do not have enough points!"
            displayAlert()
        }
        else if (CurrentClicksValue < RequiredClicksValue) {
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
    clickSound.volume = .3;
    clickSound.play();
    Verification();
})

pointsRequiredCal();
clicksRequiredCal();