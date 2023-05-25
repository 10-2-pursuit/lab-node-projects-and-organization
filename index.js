const wordsJSON = require("./words.json");

function allWords(wordsJSON){
    console.log(wordsJSON);
}

function firstTenWords(wordsJSON){
    for (let i = 0; i < 10; i++) {
        console.log(wordsJSON[i]);
    }
}

function nextTenWords(wordsJSON){
    for (let i = 10; i < 20; i++) {
        console.log(wordsJSON[i]);
    }
}

function firstXWords(wordsJSON, x){
    for (let i = 0; i < x; i++) {
        console.log(wordsJSON[i]);
    }
}

function subsetOfWords(wordsJSON, x, y) {
    for (let i = x; i < y; i++) {
        console.log(wordsJSON[i]);
    }
}


function sortWords(wordsJSON) {
    console.log(wordsJSON.sort());
}

function wordsWithQ(wordsJSON) {
    return wordsJSON.filter(word => word.includes("q"));
}

function findWordsWithLetter(wordsJSON, letter) {
    return (wordsJSON.filter(word => word.includes(letter))).length != 0 ? wordsJSON.filter(word => word.includes(letter)) : `No words include ${letter}`;
}
console.log(findWordsWithLetter(wordsJSON, process.argv[2]));