let projectSectionP1 = document.getElementById("sectionProjectsHome");
let snippetSectionS1 = document.getElementById("snippetSection");
snippetSectionS1.classList.add("d-none");

function projectSectionContainer() {
    projectSectionP1.classList.remove("d-none");
    snippetSectionS1.classList.add("d-none");
}

function snippetSectionContainer() {
    projectSectionP1.classList.add("d-none");
    snippetSectionS1.classList.remove("d-none");
}


let counterValueIncrement = document.getElementById("counterIncrement");
let counterValueIncrementBig = document.getElementById("counterIncrementBig");

function counterDecrement() {
    let previuosCounter = counterValueIncrementBig.textContent;
    let updatedCounter = parseInt(previuosCounter) - 1;
    counterValueIncrementBig.textContent = updatedCounter;
}

function counterIncrement() {
    let previuosCounter = counterValueIncrementBig.textContent;
    let updatedCounter = parseInt(previuosCounter) + 1;
    counterValueIncrementBig.textContent = updatedCounter;
}

function counterReset() {
    let updatedCounter = 0;
    counterValueIncrementBig.textContent = updatedCounter;
}

// function for deliveryApp
let deliveryCounterPrice = document.getElementById("messageMaximumSelected");
let deliveryItemCounter = document.getElementById("deliveryItemCounter");
let messageMaximumSelectedItems = document.getElementById("messageMaximumSelected");
let messageMinimumSelectedItems = document.getElementById("messageMinimumSelected");
let updatedPriceofDelivery = document.getElementById("updatedPriceofDelivery");
let priceCounter = parseInt(updatedPriceofDelivery.textContent);

function counterDecrementDelivery() {
    let previousDeliveryCount = deliveryItemCounter.textContent;
    let updatedCounterDelivery = parseInt(previousDeliveryCount) - 1;
    if (updatedCounterDelivery <= 0) {
        messageMinimumSelectedItems.textContent = "* Please select minimum order 1";
        deliveryItemCounter.textContent = 0;
        updatedPriceofDelivery.textContent = 0;
    } else {
        messageMinimumSelectedItems.textContent = "";
        messageMaximumSelectedItems.textContent = "";
        deliveryItemCounter.textContent = updatedCounterDelivery;
        let priceFinal = (parseInt(updatedCounterDelivery) * priceCounter);
        updatedPriceofDelivery.textContent = priceFinal;

    }
}

function counterIncrementDelivery() {
    let previousDeliveryCount = deliveryItemCounter.textContent;
    let updatedCounterDelivery = parseInt(previousDeliveryCount) + 1;
    if (updatedCounterDelivery < 10) {
        messageMinimumSelectedItems.textContent = "";
        deliveryItemCounter.textContent = updatedCounterDelivery;
        let priceFinal = priceCounter * parseInt(updatedCounterDelivery);
        updatedPriceofDelivery.textContent = parseInt(priceFinal);
    } else {
        messageMaximumSelectedItems.textContent = "*selected maximum number ";
        deliveryItemCounter.textContent = 10;
        updatedPriceofDelivery.textContent = 10 * priceCounter;
    }
}