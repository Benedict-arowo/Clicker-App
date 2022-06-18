const shopItem = document.querySelectorAll(".itemLogo");
const shopItemCLick = new Audio("audio/shopItemClick.mp3")
let ethingy;

shopItem.forEach(item => {
    item.addEventListener('click', (e) => {
        const clickedItemParent = e.target.parentNode.parentNode
        const item = clickedItemParent.parentNode.id;
        const itemRequirements = clickedItemParent.getElementsByTagName("span");
        const itemClicks = parseFloat(itemRequirements[0].innerText)
        const itemPoints = parseFloat(itemRequirements[1].innerText)
        const itemMultiplier = itemRequirements[2].innerText
        // console.log(itemClicks, itemPoints, itemMultiplier, item)
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
            if (multiplier.innerText.length == 0) {
                multiplier.innerText = itemMultiplier;
            }
            else {
                alert("You currently have a booster running.")
            }




        //     if (item == "point"){
        //         parseInt(multiplier.innerText += parseInt(itemMultiplier[1]);
        //         console.log(multiplierValue)
        //         console.log("point yes")
        //     }
        //     else if (item == "click"){
        //         multiplier.innerText = itemMultiplier
        //         console.log(multiplierValue)
        //         console.log("point yes")
        //     }
        // else if (item == "autoclicker") {
        //     console.log("autoclicker yes")
        // }
    }
        
        ethingy = e
    })
});