var title = document.getElementById('title');
title.style.color = "#F5147E";

var title_2 = document.getElementById('title_2');
title_2.style.color = "#E75480";

var body = document.getElementById('body');
body.style.backgroundColor = "#FFC0CB";

setTimeout(whattheysaid, 5000);

function whattheysaid() {
    confirm("Красиво?");
    console.log(whattheysaid);
}

var counter_button = 0;

function onClickButton(el) {
    counter_button++;
    el.innerHTML = "You've clicked: " + counter_button;
    el.style.background = "#ba55d3";
    el.style.color = "#4b0082";
}
