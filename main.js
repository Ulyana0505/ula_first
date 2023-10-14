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

//hours from certaon date
function buttonHours() {
    const input = prompt('Enter a date in thos format: DD MM YYYY (like 18 08 2008)');
    const [day, month, year] = input.split(' ');

    const inputDate = new Date(`${year}-${month}-${day}`);

    let diff =  Date.now() - inputDate;

    diff = diff / 1000 / 60 / 60;

    const hours = document.querySelector('#hours');

    hours.innerHTML = diff.toFixed(0) + ' ' + 'hours';
}
// end

//guess the number
const numsForGuess = [1, 2, 7, 9, 11, 15, 21, 24, 27, 29, 30, 32, 33, 35, 36, 37, 38, 41, 47, 51, 63, 64, 65, 66, 68, 69, 71, 75, 76, 79, 84, 87, 89, 90, 93, 95, 103, 104, 108, 115, 117, 118, 119, 120, 121, 125, 133, 135, 136, 138, 139, 141, 142, 144, 145, 146, 152, 157, 161, 166, 170, 171, 172, 175, 182, 183, 184, 186, 187, 188, 189, 192, 194, 195, 200, 206, 210, 219, 222, 225, 228, 230, 231, 237, 239, 243, 245, 248, 250, 255, 259, 268, 277, 278, 284, 285, 287, 290, 298, 299, 300, 303, 312, 314, 316, 317, 318, 328, 335, 337, 338, 340, 344, 345, 346, 348, 356, 359, 363, 366, 369, 371, 374, 375, 387, 389, 390, 399, 401, 402, 409, 414, 418, 429, 430, 434, 438, 440, 442, 446, 448, 452, 456, 464, 467, 470, 476, 478, 480, 482, 483, 484, 487, 490, 491, 493, 495, 498, 505, 507, 510, 512, 519, 520, 522, 523, 534, 535, 537, 539, 540, 544, 548, 550, 551, 560, 569, 581, 584, 597, 600, 609, 612, 614, 616, 624, 628, 630, 635, 636, 640, 642, 646, 648, 649, 654, 659, 662, 666, 667, 672, 680, 681, 682, 684, 691, 701, 706, 707, 709, 717, 718, 721, 722, 725, 729, 731, 737, 738, 739, 740, 745, 746, 747, 753, 756, 758, 760, 761, 767, 774, 775, 776, 779, 783, 789, 790, 792, 799, 808, 812, 813, 819, 823, 824, 829, 830, 835, 836, 840, 841, 846, 849, 851, 857, 864, 866, 867, 869, 872, 873, 876, 879, 880, 881, 885, 886, 888, 889, 891, 894, 896, 899, 902, 904, 905, 909, 914, 923, 926, 927, 929, 930, 932, 934, 935, 937, 941, 953, 956, 957, 965, 966, 971, 973, 977, 981, 988, 995, 1000];

function buttonGuess() {
    const input = +prompt('Enter any one number from 1 to 1000');
    const index = numsForGuess.indexOf(input);

    if (index > -1) {
        alert('Right!' + ' ' + 'There is a number ' + numsForGuess[index] + '.');
    } else {
        alert("There isn't a number like this. Try again!");
    }
}
//end
// for commit