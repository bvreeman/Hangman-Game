'use strict';

const wordBank = ["emu", "crocodile", "peacock", "camel", "cheetah", "zebra", "puma", "fox", "alpaca"]; 
let guessesRemaining = 15;
    document.querySelector('#myLives').innerHTML=(guessesRemaining);

let chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];
    let chosenWordLength = chosenWord.length;
    let dashWordLength = [];
    for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
        dashWordLength.push('_');
    document.querySelector('#word').innerHTML=dashWordLength.join(' ');
};

let remainingLetters=chosenWord.length;

$(document).on('keypress', function(event) {
    const guess = event.key;
    // if (!(event.which <= 90 && event.which >= 65)) return;

    if(chosenWord.includes(guess)) {
        correctGuess(guess);
    } 
});

function correctGuess(guess){
    const chosenWordLetters = chosenWord.split('');
    let eventLocations = [];
    for (let i = 0; i < chosenWord.length; i++){
        if(chosenWordLetters[i] === guess){
            eventLocations.push(i)
            remainingLetters--;
        } 
        if(remainingLetters === 0){
            alert("You Win!");
        }
        console.log(remainingLetters);

        console.log(guessesRemaining);
    } 

    for (let i = 0; i < chosenWord.length; i++){
        if (chosenWordLetters[i] !== guess){
                guessesRemaining--;
                document.querySelector('#myLives').innerHTML=guessesRemaining;
            }
            if (guessesRemaining === 0){
                alert("You Lose!");
            }
    }

    for(let i = 0; i < eventLocations.length; i++){
        dashWordLength[eventLocations[i]]=guess;
    }
    
    document.querySelector('#word').innerHTML=dashWordLength.join(' ')

};


let keysPressed = [""];
document.onkeydown = function(event){
    let key_press = String.fromCharCode(event.keyCode);
    let key_code = event.keyCode;
    keysPressed.push(key_press);
    document.querySelector("#guessedLetters").innerHTML=(keysPressed).join(" ");
//    console.log(keysPressed);
   
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

};

$('#reset').on('click', reset);

// Guesses Remaining section

  
//   comments = function () {
//     showLives.innerHTML = "You have " + lives + " lives";
//     if (lives < 1) {
//       showLives.innerHTML = "Game Over";
//     }
//     for (var i = 0; i < geusses.length; i++) {
//       if (counter + space === geusses.length) {
//         showLives.innerHTML = "You Win!";
//       }
//     }
//   }


// let answerArray = [];
//     for (let i = 0; i < chosenWord.length;) {
//         answerArray[i] = "_";
//     }
// let remainingLetters = wordBank.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
// }

// 


// const letters1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// const letters2 = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
// const letters3 = [ "S", "T", "U", "V", "W", "X", "Y", "Z"];

// for (let i = 0; i < letters1.length; i++) {
//     let letterBtn = $("<button>");
//     letterBtn.addClass("letter-button letter letter-button-color");
//     letterBtn.attr("data-letter", letters1[i]);
//     letterBtn.text(letters1[i]);
//     $("#buttons1").append(letterBtn);
//     onclick= "visibility = hidden";

// };

// for (let i = 0; i < letters2.length; i++) {
//     let letterBtn = $("<button>");
//     letterBtn.addClass("letter-button letter letter-button-color");
//     letterBtn.attr("data-letter", letters2[i]);
//     letterBtn.text(letters2[i]);
//     $("#buttons2").append(letterBtn);

// };

// for (let i = 0; i < letters3.length; i++) {
//     let letterBtn = $("<button>");
//     letterBtn.addClass("letter-button letter letter-button-color");
//     letterBtn.attr("data-letter", letters3[i]);
//     letterBtn.text(letters3[i]);
//     $("#buttons3").append(letterBtn);

// };

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
    


// function pictureChange()
// {
// document.getElementById('buttons1').src=("./assets/images/paw_print.png");
// };



