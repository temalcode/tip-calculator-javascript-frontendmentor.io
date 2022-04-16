
const tipsButtons = document.getElementsByClassName('tips__button')
const tipAmountPerPersonText = document.getElementById('tipAmountPerPersonText')
const totalAmountPerPersonText = document.getElementById('totalAmountPerPersonText')

const tips = [0.05, 0.1, 0.15, 0.25, 0.5]
let buttonClicked = 0;

function checkNumber(itemNeedToCheck){

    if(isNaN(itemNeedToCheck.value)){
        itemNeedToCheck.style.border = 'red solid 2px'
        itemNeedToCheck.style.color = 'red'
    }
    else{
        itemNeedToCheck.style.border = 'hsl(183, 100%, 15%)'
        itemNeedToCheck.style.color = 'hsl(183, 100%, 15%)'
        return (itemNeedToCheck.value)
    }
}

function changeColor(i) {

    buttonClicked = i;

    //change colors on buttons
    tipsButtons[i].style.backgroundColor = 'hsl(172, 67%, 45%)'
    tipsButtons[i].style.color = 'hsl(183, 100%, 15%)'
    for (let j = 0; j <= 4; j++) {
        if (!(i === j)) {
            tipsButtons[j].style.backgroundColor = 'hsl(183, 100%, 15%)'
            tipsButtons[j].style.color = 'white'
        }
    }

    let customText = document.getElementById('customText')
    if (customText.value) {
        customText.value = ""
    }

    calculateTip()
}


function calculateTip() {

    let billValue = checkNumber(document.getElementById('billValue'))
    let numberOfPersons = checkNumber(document.getElementById('numberOfPersons'))
    let customText = checkNumber(document.getElementById('customText'))
    let tipPrecent = 0

    //calcuate tip person
    if (!(customText)) {
        tipPrecent = tips[buttonClicked]
    }
    else {
        tipPrecent = customText / 100
        tipsButtons[buttonClicked].style.backgroundColor = 'hsl(183, 100%, 15%)'
        tipsButtons[buttonClicked].style.color = 'white'
    }

    let tipTotal = billValue * tipPrecent
    let tipPerPerson = tipTotal / numberOfPersons
    tipAmountPerPersonText.innerText = tipPerPerson

    //calculate total per person
    let totalBill = parseFloat(billValue) + parseFloat(tipTotal)
    let totalPerPorson = totalBill / numberOfPersons
    totalAmountPerPersonText.innerText = totalPerPorson
}

function resetButton() {

    document.getElementById('billValue').value = ""
    document.getElementById('numberOfPersons').value = ""
    document.getElementById('customText').value = ""
    tipAmountPerPersonText.innerText = '$0.00'
    totalAmountPerPersonText.innerText = '$0.00'
    tipsButtons[buttonClicked].style.backgroundColor = 'hsl(183, 100%, 15%)'
    tipsButtons[buttonClicked].style.color = 'white'
}