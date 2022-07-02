const shopItem = document.querySelectorAll(".itemLogo");
const shopItemClickAudio = new Audio("audio/shopItemClick.mp3")

const multiplierClicks = document.getElementById("multiplierValueClicks");
const multiplierPoints = document.getElementById("multiplierValuePoints");
const multiplierAutoclicks = document.getElementById("multiplierValueAutoClickers");

let pointMultiplier = null;
let clickMultipler = null;
let autoclickerValue = null;

const updateMultiplierDisplay = () => {
    multiplierClicks.innerText = pointMultiplier;
    multiplierPoints.innerText = clickMultipler;
    multiplierAutoclicks.innerText = autoclickerValue;
}

const calculateStats = (clickCost, pointCost) => {
    click -= parseFloat(clickCost);
    point -= parseFloat(pointCost);
    updateStatsDisplay();
};

shopItem.forEach(item => {
    item.addEventListener('click', (e) => {

        const clickedItemParent = e.target.parentNode.parentNode
        const item = clickedItemParent.parentNode.id;
        const itemRequirements = clickedItemParent.getElementsByTagName("span");
        const clickCost = parseFloat(itemRequirements[0].innerText)
        const pointCost = parseFloat(itemRequirements[1].innerText)
        const itemMultiplier = itemRequirements[2].innerText

        if (pointCost > point && clickCost > click) {
            alert("You do not have enough points nor clicks!");
        }
        else  if (pointCost > point)  {
            alert("You do not have enough points!")
        }
        else if (clickCost > click) {
            alert("You do not have enough clicks!")
        }
        else {
            if (item == 'point'){
                if (pointMultiplier == null) {
                    pointMultiplier = itemMultiplier;
                    calculateStats(clickCost, pointCost)
                    const pointMultiplierTimeout = setTimeout(() => {
                        pointMultiplier = null;
                        updateMultiplierDisplay()
                        alert("Point multiplier ran out!");
                    }, 60000)
                }
                else {
                    alert("You currently have a booster running.")
                }
            }

            else if (item == 'click') {
                if (clickMultipler == null) {
                    clickMultipler = itemMultiplier;
                    calculateStats(clickCost, pointCost)
                    const clickMultiplierTimeout = setTimeout(() => {
                        clickMultipler = null;
                        updateMultiplierDisplay()
                        alert("Click multiplier ran out!");
                    }, 120000)
                }
                else {
                    alert("You currently have a booster running.")
                }
            }

            else if (item == 'autoclicker'){
                if (autoclickerValue == null) {
                    autoclickerValue = itemMultiplier;
                    calculateStats(clickCost, pointCost)
                    setTimeout(() => {
                        autoclickerValue = null;
                        updateMultiplierDisplay()
                        alert("Autoclicker ran out!");
                    }, 30000)

                    const clicksPerSecond = parseInt(itemMultiplier.slice(0, 1))

                    function addClick() {
                        currentClickCount += clicksPerSecond
                        updateClickAmount()
                    }
                    
                    
                    let myInterval = setInterval(addClick, 1000)
                    let timeout = setTimeout(() => {
                        clearInterval(myInterval)
                    }, 30000)
                }
                else {
                    alert("You currently have a booster running.")
                }
            }
            updateMultiplierDisplay()
            shopItemClickAudio.play()
        }
    })
});

