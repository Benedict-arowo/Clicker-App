const shopItem = document.querySelectorAll(".itemLogo");
const shopItemCLick = new Audio("audio/shopItemClick.mp3")
let ethingy;


const calculateStats = (clicks, points) => {
    let newClickValue = parseFloat(clicksValue.innerText) - clicks;
    let newPointValue = parseFloat(pointsValue.innerText) - points;
    clicksValue.innerText = newClickValue;
    pointsValue.innerText = newPointValue;
};

shopItem.forEach(item => {
    item.addEventListener('click', (e) => {
        const clickedItemParent = e.target.parentNode.parentNode
        const item = clickedItemParent.parentNode.id;
        const itemRequirements = clickedItemParent.getElementsByTagName("span");
        const itemClicks = parseFloat(itemRequirements[0].innerText)
        const itemPoints = parseFloat(itemRequirements[1].innerText)
        const itemMultiplier = itemRequirements[2].innerText
        console.log(itemClicks, itemPoints, itemMultiplier, item)
        let currentPoints = parseFloat(pointsValue.innerText)
        let currentClicks = parseFloat(clicksValue.innerText)
        if (itemPoints > currentPoints && itemClicks > currentClicks) {
            alert("You do not have enough points nor clicks!");
        }
        else  if (itemPoints > currentPoints)  {
            alert("You do not have enough points!")
        }
        else if (itemClicks > currentClicks) {
            alert("You do not have enough clicks!")
        }
        else {
            shopItemCLick.play()
            if (item == 'point'){
                if (multiplierPoints.innerText.length == 0) {
                    multiplierPoints.innerText = itemMultiplier;
                    calculateStats(itemClicks, itemPoints)
                    const pointMultiplierTimeout = setTimeout(() => {
                        multiplierPoints.innerText = null;
                        alert("Point multiplier ran out!");
                    }, 60000)
                }
                else {
                    alert("You currently have a booster running.")
                }
            }

            else if (item == 'click') {
                if (multiplierClicks.innerText.length == 0) {
                    multiplierClicks.innerText = itemMultiplier;
                    console.log(itemClicks, itemPoints)
                    calculateStats(itemClicks, itemPoints)
                    const clickMultiplierTimeout = setTimeout(() => {
                        multiplierClicks.innerText = null;
                        alert("Click multiplier ran out!");
                    }, 120000)
                }
                else {
                    alert("You currently have a booster running.")
                }
            }

            else if (item == 'autoclicker'){
                console.log("Autoclicker clicked")
                setTimeout(() => {
                    multiplierClicks.innerText = null;
                    alert("Click multiplier ran out!");
                }, 30000)
            }
        }
    })
});