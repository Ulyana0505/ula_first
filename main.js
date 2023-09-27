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
