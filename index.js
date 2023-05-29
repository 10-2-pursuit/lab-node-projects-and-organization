const words = require("./words.json")

function allWords(words) {
   return console.log(words)
}

function firstTenWords(words) {
    for (i = 0; i < 10; i++) {
        console.log(words[i])
    }
}

function nextTenWords(words) {
    for (i = 10; i < 20; i++) {
        console.log(words[i])
    }
}


function firstXWords(words, x) {
    for (i = 0; i < x; i++) {
        console.log(words[i])
    }
}

function subsetOfWords(words, x, y) {
    for (i = x; i < y; i++) {
        console.log(words[i])
    }
}

function sortWords(words) {
    return words.sort()
}

function wordsWithQ(words) {
    return words.filter(word => word.includes('q'))
}

function findWordsWithLetter(words) {
    return words.filter(word => word.includes(process.argv[2]))
}