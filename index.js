const words = require("./words.json")

function allWords(words) {
    return console.log(words);
}
allWords(words);

function logsFirstTenWords(words) {
    firstTenWords = [];
    for (let i = 0; i <= 9; i++) {
        firstTenWords.push(words[i]);
    }
    console.log(firstTenWords)
}
logsFirstTenWords(words);

function logsNextTenWords(words) {
    nextTenWords = [];
    for (let i = 10; i <= 19; i++) {
        nextTenWords.push(words[i]);
    }
    console.log(nextTenWords);
}
logsNextTenWords(words);

function logsfirstXWords(words, x) {
    firstXWords = [];
    for (let i = 0; i <= x - 1; i++) {
        firstXWords.push(words[i]);
    }
    console.log(firstXWords);
}
logsfirstXWords(words, 14);

function logsSubsetOfWords(words, y, x) {
    subsetOfWords = [];
    for (let i = y; i <= x - 1; i++) {
        subsetOfWords.push(words[i]);
    }
    console.log(subsetOfWords);
}
logsSubsetOfWords(words, 20, 30) // y is equal to inital position, x is ending position. 

function logsSortedWords(words) {
    let sortedWords = words.sort();
    console.log(sortedWords);
}
logsSortedWords(words);

function logswordsWithQ(words) {
    wordsWithQ = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().includes('q')) {
            wordsWithQ.push(words[i])
        }
    }
    console.log(wordsWithQ)
}
logswordsWithQ(words);

function findWordsWithLetter(words, letter) {
    wordsWithLetter = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().includes(letter.toLowerCase())) {
            wordsWithLetter.push(words[i])
        }
    }
    return wordsWithLetter
}
const inputLetter = process.argv[2]
if (inputLetter) {
    const wordsWithLetter = findWordsWithLetter(words, inputLetter)
    console.log(wordsWithLetter)
} else {
    console.log('Please provide a letter in the command')
}


module.exports = {
    allWords,
    logsFirstTenWords,
    logsNextTenWords,
    logsSortedWords,
    logsSubsetOfWords,
    logsfirstXWords,
    logswordsWithQ,
    findWordsWithLetter,
};