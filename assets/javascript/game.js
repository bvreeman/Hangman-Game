'use strict';

const wordBank = ["emu", "crocodile", "peacock", "camel", "cheetah", "zebra", 
                    "puma", "fox", "alpaca", "bear", "lion", "koala", "kangaroo",
                    "hyena", "leopard", "orangutan", "seal", "penguin", "puffin",
                    "dolphin", "shark", "wolf", "deer", "tiger", "rhino", "dinosaur",
                    "butterfly", "gorilla", "buffalo", "bison", "reindeer", "bat"]; 
let guessesRemaining = 15;
    document.querySelector('#myLives').innerHTML=(guessesRemaining);

let chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))].split('');
let chosenWordLength = chosenWord.length;
let dashWordLength = [];
    
console.log(chosenWord);

chosenWord.forEach(() => {
    dashWordLength.push('_');
})

document.querySelector('#word').innerHTML=dashWordLength.join(' ');

let remainingLetters=chosenWord.length;

$(document).on('keypress', function(event) {
    const guess = event.key;

    if(chosenWord.includes(guess)) {
        correctGuess(guess);
    } 
    
    if (guess) {
        guessesRemaining--;
        document.querySelector('#myLives').innerHTML=guessesRemaining;
        }
        if (guessesRemaining === 0){
            alert("You Lose!");
        }
});

function correctGuess(guess) {
    chosenWord.forEach((item, i, arr) => {
        if (item === guess) {
        dashWordLength.splice(i, 1, guess.toUpperCase())
        remainingLetters--
        }
    })
    
    if(remainingLetters === 0){
        alert("You Win!");
        guessesRemaining = null
    }
    
    document.querySelector('#word').innerHTML=dashWordLength.join(' ')
};

let keysPressed = [""];
document.onkeydown = function(event){
    let key_press = String.fromCharCode(event.keyCode);
    let key_code = event.keyCode;
    keysPressed.push(key_press);
    document.querySelector("#guessedLetters").innerHTML=(keysPressed).join(" ");
};


//Reset

function reset(){
    chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];
    chosenWordLength = chosenWord.length;
    dashWordLength = [];
    for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
        dashWordLength.push('_');
    document.querySelector('#word').innerHTML=dashWordLength.join(' ');
    }

    $('#guessedLetters').empty();
    keysPressed.length=0;
    remainingLetters=chosenWord.length;
    guessesRemaining=15;
    document.querySelector('#myLives').innerHTML=(guessesRemaining);
};

$('#reset').on('click', reset);