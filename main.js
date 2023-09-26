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

function userCalculate(a, b) {
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