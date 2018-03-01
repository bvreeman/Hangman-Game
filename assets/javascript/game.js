'use strict';

const wordBank = ["cat", "crocodile", "human", "fish"];

const chosenWord = wordBank [Math.floor((Math.random()*wordBank.length))];

alert(chosenWord);

let chosenWordLength = chosenWord.length;

alert(chosenWordLength);

let dashWordLength = [];

for(let dashCounter=0; dashCounter <= chosenWordLength.legth; dashCounter++); {
    dashWordLength.push('_');
}

alert(dashWordLength);