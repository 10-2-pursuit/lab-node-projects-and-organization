const wordsFile = require("./words.json")

function _allWords(words) {
    return console.log(words)
}

function _firstTenWords(words) {
    for(i =0; i < 10; i++) {
        console.log(words[i])
    }
}

function _nextTenWords(words) {
    for(i = 10; i < 20; i++) {
        console.log(words[i])
    }
}

function _firstXWords(words,x) {
    for (i = 0; i < x; i++) {
        console.log(words[i])
    }
}

function _subsetOfWords(words) {
    for (i = x; i < y; i++) {
        console.log(words[i])
    }
}

function _sortWords(words) {
    console.log(words.sort());
}

function wordsWithQ(words) {
    return words.filter(word => word.includes("q"));
}

function findWordsWithLetter(words, letters) {
    return words.filter(word => word.includes(process.argv[2]))
}
console.log(findWordsWithLetter(words, process.argv[2]));
