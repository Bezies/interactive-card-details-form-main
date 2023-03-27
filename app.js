// FORM ANTI REFRESH 
const form = document.querySelector(".form");
form.onsubmit = () => {
    return false
}


// SUBMIT 
const submit = document.querySelector("#confirm");



// NAME 

const formName = document.querySelector("#name");
const cardName = document.querySelector("#credit-card-name");
let smallName = document.querySelector("#error-name")

function enterName() {
    if (formName.value.length < 1) {
        smallName.innerHTML = "Can't be blank";
        formName.style.border = "1px solid red";
        cardName.innerHTML = "JANE APPLESEED"
    } else {
        smallName.innerHTML = "";
        formName.style.border = "1px solid hsl(270, 3%, 87%)";
        cardName.innerHTML = formName.value;
        return true
    }
}
formName.addEventListener("change", enterName);
submit.addEventListener("click", enterName);





// CREDIT CARD 


// CARD FORMAT 0000 0000 0000 0000 
const input = document.getElementById("cardNumber");
input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
}, "");



// REGEX FORMAT 
let regexCard = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;
function validateCard(number) {
    if (regexCard.test(number)) {
        return true
    } else {
        return false
    }
}


// CARD NUMBERS 
const cardNumbers = document.querySelector("#credit-card-number");
let smallCard = document.querySelector("#error-number")

function enterNumbersCard() {
    if (input.value.length < 1) {
        smallCard.innerHTML = "Can't be blank";
        input.style.border = "1px solid red";
        cardNumbers.innerHTML = "0000 0000 0000 0000"
    } else if (input.value.length < 19) {
        smallCard.innerHTML = "Wrong format, please type 16 figures";
        input.style.border = "1px solid red";
        cardNumbers.innerHTML = "0000 0000 0000 0000"
    } else if (validateCard(input.value) === false) {
        smallCard.innerHTML = "Invalid card numbers";
        input.style.border = "1px solid red";
        cardNumbers.innerHTML = "0000 0000 0000 0000"
    } else {
        smallCard.innerHTML = "";
        input.style.border = "1px solid hsl(270, 3%, 87%)";
        cardNumbers.innerHTML = input.value;
        return true
    }
}

input.addEventListener("change", enterNumbersCard);
submit.addEventListener("click", enterNumbersCard);



// DATE 
const formMonth = document.querySelector("#month");
const cardMonth = document.querySelector("#credit-card-month");
let smallMonth = document.querySelector("#error-month");
let regexDate = /^[0-9]{2}/;

function validateDate(number) {
    if (regexDate.test(number)) {
        return true
    } else {
        return false
    }
}

// MONTH 
function enterDateMonth() {
    if (formMonth.value.length < 1) {
        smallMonth.innerHTML = "Can't be blank";
        formMonth.style.border = "1px solid red";
        cardMonth.innerHTML = "00";
    } else if (validateDate(formMonth.value) === false || formMonth.value < 1 || formMonth.value > 12) {
        smallMonth.innerHTML = "Month invalid";
        formMonth.style.border = "1px solid red";
        cardMonth.innerHTML = "00";

    } else {
        smallMonth.innerHTML = "";
        formMonth.style.border = "1px solid hsl(270, 3%, 87%)";
        cardMonth.innerHTML = formMonth.value;
        return true
    }
}

formMonth.addEventListener("change", enterDateMonth);
submit.addEventListener("click", enterDateMonth);



// YEAR 
const formYear = document.querySelector("#year");
let smallYear = document.querySelector("#error-year");
const cardYear = document.querySelector("#credit-card-year");

function enterDateYear() {
    if (formYear.value.length < 1) {
        smallYear.innerHTML = "Can't be blank";
        formYear.style.border = "1px solid red";
        cardYear.innerHTML = "00";
    } else if (formYear.value < 23) {
        smallYear.innerHTML = "Card invalid";
        formYear.style.border = "1px solid red";
        cardYear.innerHTML = "00";
    } else if (formYear.value.length < 2 || validateDate(formYear.value) === false) {
        smallYear.innerHTML = "Year invalid";
        formYear.style.border = "1px solid red";
        cardYear.innerHTML = "00";
    } else {
        smallYear.innerHTML = "";
        formYear.style.border = "1px solid hsl(270, 3%, 87%)";
        cardYear.innerHTML = formYear.value;
        return true
    }
}

formYear.addEventListener("change", enterDateYear);
submit.addEventListener("click", enterDateYear);


// CVC 

const formCVC = document.querySelector("#CVC");
const cardCVC = document.querySelector("#credit-card-cvc");
let smallCVC = document.querySelector("#error-cvc");
let regexCVC = /^[0-9]{3}/;

function validateCVC(number) {
    if (regexCVC.test(number)) {
        return true
    } else {
        return false
    }
}

function enterCVC() {
    if (formCVC.value.length < 1) {
        smallCVC.innerHTML = "Can't be blank";
        formCVC.style.border = "1px solid red";
        cardCVC.innerHTML = "000";

    } else if (validateCVC(formCVC.value) === false || formCVC.value.length < 3) {
        smallCVC.innerHTML = "Invalid format";
        formCVC.style.border = "1px solid red";
        cardCVC.innerHTML = "000";
    } else {
        smallCVC.innerHTML = "";
        formCVC.style.border = "1px solid hsl(270, 3%, 87%)";
        cardCVC.innerHTML = formCVC.value;
        return true
    }
}

formCVC.addEventListener("change", enterCVC);
submit.addEventListener("click", enterCVC);




// CONFIRM 
const completed = document.querySelector(".completed-off");

submit.addEventListener("click", () => {
    if (enterName() && enterNumbersCard() && enterDateMonth() && enterDateYear() && enterCVC()) {
        form.classList.replace("form", "form-off");
        completed.classList.replace("completed-off", "completed-on")
    } 
    })
