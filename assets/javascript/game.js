'use strict';

const wordBank = ["cat", "crocodile", "human", "fish"];

const chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];
    let chosenWordLength = chosenWord.length;
    let dashWordLength = [];
    for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
        dashWordLength.push('_');
    
    $("#word").push(dashWordLength);


};

// let answerArray = [];
//     for (let i = 0; i < chosenWord.length;) {
//         answerArray[i] = "_";
//     }
// let remainingLetters = wordBank.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
// }

// 


const letters1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const letters2 = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
const letters3 = [ "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (let i = 0; i < letters1.length; i++) {
    let letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters1[i]);
    letterBtn.text(letters1[i]);
    $("#buttons1").append(letterBtn);
    onclick= "visibility = hidden";

};

for (let i = 0; i < letters2.length; i++) {
    let letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters2[i]);
    letterBtn.text(letters2[i]);
    $("#buttons2").append(letterBtn);

};

for (let i = 0; i < letters3.length; i++) {
    let letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters3[i]);
    letterBtn.text(letters3[i]);
    $("#buttons3").append(letterBtn);

};

function setup() {
    myGuesses = 10;
    messages = {
        win: 'You Win!',
        lose: 'Game Over',

    };

}

// let guessesRemaining ;
// let showLives = document.getElementById("myGuesses");

// comments = function () {
//     guessesRemaining.innerHTML = "You have " + guesses + " remaining";
//     if (lives < 1) {
//       guessesRemaining.innerHTML = "Game Over";
//     }
//     for (let i = 0; i < geusses.length; i++) {
//       if (counter + space === geusses.length) {
//         guessesRemaining.innerHTML = "You Win!";
//       }
//     }
// };
    


function pictureChange()
{
document.getElementById('buttons1').src=("./assets/images/paw_print.png");
};



