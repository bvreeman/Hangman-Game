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
    const eventLocations = [];

    chosenWord.forEach((item, i) => {
        if (item === guess) {
        eventLocations.push(item)
        // dashWordLength.push(item[i])
        remainingLetters--
        }
    })
    
    if(remainingLetters === 0){
        alert("You Win!");
    }

    // chosenWord.forEach((item, i) => {
    //     dashWordLength[i] === guess
    // })

    // for(let i = 0; i < eventLocations.length; i++){
    //     dashWordLength[eventLocations[i]]=guess;
    // }
    
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

// 'use strict';

// const wordBank = ["emu", "crocodile", "peacock", "camel", "cheetah", "zebra", 
//                     "puma", "fox", "alpaca", "bear", "lion", "koala", "kangaroo",
//                     "hyena", "leopard", "orangutan", "seal", "penguin", "puffin",
//                     "dolphin", "shark", "wolf", "deer", "tiger", "rhino", "dinosaur",
//                     "butterfly", "gorilla", "buffalo", "bison", "reindeer", "bat"]; 
// let guessesRemaining = 15;
//     document.querySelector('#myLives').innerHTML=(guessesRemaining);

// let chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];
// let chosenWordLength = chosenWord.length;
// console.log(chosenWordLength)
// let dashWordLength = [];
    

// for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
//     dashWordLength.push('_');
//     document.querySelector('#word').innerHTML=dashWordLength.join(' ');
// };

// let remainingLetters=chosenWord.length;

// $(document).on('keypress', function(event) {
//     const guess = event.key;

//     if(chosenWord.includes(guess)) {
//         correctGuess(guess);
//     } 
    
//     if (guess) {
//         guessesRemaining--;
//         document.querySelector('#myLives').innerHTML=guessesRemaining;
//         }
//         if (guessesRemaining === 0){
//             alert("You Lose!");
//         }
// });

// function correctGuess(guess) {
//     const chosenWordLetters = chosenWord.split('');
//     const eventLocations = [];

//     for (let i = 0; i < chosenWord.length; i++){
//         if(chosenWordLetters[i] === guess){
//             eventLocations.push(i)
//             remainingLetters--;
//         } 
//     } 
//     if(remainingLetters === 0){
//         alert("You Win!");
//     }

//     for(let i = 0; i < eventLocations.length; i++){
//         dashWordLength[eventLocations[i]]=guess;
//     }
    
//     document.querySelector('#word').innerHTML=dashWordLength.join(' ')
// };

// let keysPressed = [""];
// document.onkeydown = function(event){
//     let key_press = String.fromCharCode(event.keyCode);
//     let key_code = event.keyCode;
//     keysPressed.push(key_press);
//     document.querySelector("#guessedLetters").innerHTML=(keysPressed).join(" ");
// };


// //Reset

// function reset(){
//     chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];
//     chosenWordLength = chosenWord.length;
//     dashWordLength = [];
//     for(let dashCounter=0; dashCounter < chosenWordLength; dashCounter++) {
//         dashWordLength.push('_');
//     document.querySelector('#word').innerHTML=dashWordLength.join(' ');
//     }

//     $('#guessedLetters').empty();
//     keysPressed.length=0;
//     remainingLetters=chosenWord.length;
//     guessesRemaining=15;
//     document.querySelector('#myLives').innerHTML=(guessesRemaining);
// };

// $('#reset').on('click', reset);