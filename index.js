const words = require("./words.json")

function allWords(words) {
    return words;
}

function firstTenWords(words) {
    return words.slice(0, 10);
}

function nextTenWords(words) {
    return words.slice(10, 20);
}

function firstXWords(words, x) {
    return words.slice(0, x);
}

const subsetOfWords = (words, x, y) => {
    return words.slice(x, y);
}

const sortWords = (words) => {
    return words.sort();
} 
// console.log(sortWords(words))



//Begin wordle solver function

function wordsWithQ(words) {
    let qWords = [];

    for (let word of words) {
        let splitWord = word.split("");

        for (let i = 0; i <= splitWord.length; i++) {
            if(splitWord[i] == "q") {
                qWords.push(word);
            }
        }
    }
    return qWords;
}
//console.log(wordsWithQ(words))


function findWordsWithLetter(words) {
    let foundWordsByLetter = [];

    for (let word of words) {
        let splitWord = word.split("");

        for (let i = 0; i <= splitWord.length; i++) {
            if(splitWord[i] == process.argv[2]) {
                foundWordsByLetter.push(word);
            }
        }
    }
    return foundWordsByLetter;
}
console.log(findWordsWithLetter(words))