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

// below starts the part of code for messages
const message_button = document.querySelector('.message-button');

message_button.addEventListener('click', clickMessage);

const messageEl = document.createElement('p');

function clickMessage() {
    const mes = prompt('Enter a messege');

    messageEl.innerText = mes;

   const messageBox = document.querySelector('.messages');
   messageBox.append(messageEl);
}

const remove_button = document.querySelector('.remove-button');

remove_button.addEventListener('click', removeMessage);

function removeMessage() {
   messageEl.remove();
}
// the part for messages ended

//buton with seconds
function addSecondsToList(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector('.seconds');
    list.append(listItem);
}

function buttonSeconds() {
    const now = new Date();

    const secInDay = 24 * 60 * 60;

    const hrs = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const secPass = (hrs * 3600)+(min * 60)+sec;

    const secUntilTomorrow = (secInDay - secPass) + ' ' + 'seconds';

    addSecondsToList(secUntilTomorrow);
}
// button with seeconds end

//new title (as user want)
function newTitle() {
    const inputNewTitle = prompt('Enter a few words');
    const newTitle = document.querySelector('#title');

    newTitle.innerText = inputNewTitle;
}
// end of new title