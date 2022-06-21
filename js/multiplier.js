const pointMultiplier = (currentPoints) => {
    let currentClicksMultiplier = multiplierPoints.innerText;
    
    if (currentClicksMultiplier == 'X3'){
        currentPoints *= 3;
        return currentPoints;
    }
    else if (currentClicksMultiplier == 'X5'){
        currentPoints *= 5;
        return currentPoints;
    }
    else if (currentClicksMultiplier == 'X8'){ 
        currentPoints *= 8;
        return currentPoints;
    }
};

const clicksMultiplier = (click) => {
    let currentClicksMultiplier = multiplierClicks.innerText;
    
    if (currentClicksMultiplier == 'X1.5'){
        click = 1.5;
        return click;
    }
    else if (currentClicksMultiplier == 'X3'){
        click = 3;
        return click;
    }
    else if (currentClicksMultiplier == 'X6'){ 
        click = 6;
        return click;
    }
};

const autoclicker = () => {
    let currentClicksMultiplier = multiplierAutoclicker.innerText;
    
    if (currentClicksMultiplier == '2c/s'){

    }
    else if (currentClicksMultiplier == '4c/s'){

    }
    else if (currentClicksMultiplier == '6c/s'){ 

    }
};