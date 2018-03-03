'use strict';

const wordBank = ["cat", "crocodile", "human", "fish"];

const chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];

console.log(chosenWord);

let chosenWordLength = chosenWord.length;

console.log(chosenWordLength);

let dashWordLength = [];

for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
    dashWordLength.push('_');

    console.log(dashWordLength);

};

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

for (const i = 0; i < letters.length; i++) {
    const letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);
    $("#buttons").append(letterBtn);

};

// function pictureChange()
// {
// document.getElementById('btn-letter').src=("./assets/images/paw_print.png");
// };



