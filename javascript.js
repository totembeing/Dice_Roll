var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

if (dice1 == 1) {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice1.png' alt='image of a dice showing one'>";
}else if (dice1 == 2) {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice2.png' alt='image of a dice showing two'>";
}else if (dice1 == 3) {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice3.png' alt='image of a dice showing three'>";
}else if (dice1 == 4) {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice4.png' alt='image of a dice showing four'>";
}else if (dice1 == 5) {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice5.png' alt='image of a dice showing five'>";
}else {
    document.querySelector(".roll1").innerHTML = "<img src='images/dice6.png' alt='image of a dice showing six'>";
}


if (dice2 == 1) {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice1.png' alt='image of a dice showing one'>";
}else if (dice2 == 2) {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice2.png' alt='image of a dice showing two'>";
}else if (dice2 == 3) {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice3.png' alt='image of a dice showing three'>";
}else if (dice2 == 4) {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice4.png' alt='image of a dice showing four'>";
}else if (dice2 == 5) {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice5.png' alt='image of a dice showing five'>";
}else {
    document.querySelector(".roll2").innerHTML = "<img src='images/dice6.png' alt='image of a dice showing six'>";
}

if(dice1 == dice2){
    document.querySelector(".outputText").innerHTML = "<h1 class='outputText'>IT'S A DRAW!</h1>";
}else if(dice1 > dice2){
    document.querySelector(".outputText").innerHTML = "<h1 class='outputText'>PLAYER 1 WON!</h1>";
}else {
    document.querySelector(".outputText").innerHTML = "<h1 class='outputText'>PLAYER 2 WON!</h1>";
}