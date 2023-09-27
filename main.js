// setTimeout(whattheysaid, 5000);

// function whattheysaid() {
//    confirm("Красиво?");
//    console.log(whattheysaid);
// }

var counter_button = 0;

function onClickButton(el) {
    counter_button++;
    el.innerHTML = "You've clicked: " + counter_button;
    el.style.background = "#ba55d3";
    el.style.color = "#4b0082";
}

function userCalculate() {
    let a = +prompt("Enter first number: ");
    let b = +prompt("Enter second number: ");
    let c = a + b;
    let sum = +prompt("Enter sum of those two numbers: ");
    if (c == sum) {
        alert("Congratulations! You're absolutely right :)")
    } else {
        alert("Nope. You've made a mistake. Please try again to count another numbers")
    }
}
// below is code for hiding-not-hiding text
const hiding_button = document.querySelector('.hiding-button');

hiding_button.addEventListener('click', hideText);

function hideText() {
    const text = document.querySelector('.text-for-hiding');
    text.hidden = true;

    const hiding_button = document.querySelector('.hiding-button');
    hiding_button.removeEventListener('click', hideText);
    hiding_button.addEventListener('click', showText);
}

function showText() {
    const text = document.querySelector('.text-for-hiding');
    text.hidden = false;

    const hiding_button = document.querySelector('.hiding-button');
    hiding_button.removeEventListener('click', showText);
    hiding_button.addEventListener('click', hideText);
}
// this part of code for hiding-not-hiding text has ended

// below is code for a user list
function buttonClick() {
    const text = getInputText();
    addElementToList(text);
    clearInput();
}

function getInputText() {
    const input = document.querySelector('.text-field');
    return input.value;
}

function addElementToList(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector('.user-list');
    list.append(listItem);
}

function clearInput() {
    const input = document.querySelector('.text-field');
    input.value = '';
}
// this par of code for a user list ended