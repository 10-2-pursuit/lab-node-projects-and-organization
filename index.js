const words = require("./words.json")

function allWords(words) {
    for (let i=0; i<words.length; i++) {
        console.log(i) 
    }
};

function firstTenWords(words) {
    for(let i=0; i<10; i++) {
        return words[i]
    }
}

function nextTenWords(words, position) {
    for( let i = position; i < position +10; index++){
        console.log(words[i])
    }
}

function firstXWords(words, X) {
    for (let i=0; i< X; i++) {
        console.log(words[i])
    }

}

function subsetOfWords(words, x, y) {
    for(let i=x; i< y; i++) {
        console.log(words[i])
    }
}

function sortWords(words) {
    words.sort((a,b) => a-b)

    console.log(words)

}

function wordsWithQ(words) {
    return words.filter(word => word.includes('q'))
}

function findWordsWithLetter(words) {
    return words.filter(word => word.includes(process.argv[2]))
}



module.exports = {
    allWords,
    firstTenWords,
    nextTenWords,
    firstXWords,
    subsetOfWords,
    sortWords,
    wordsWithQ,
    findWordsWithLetter,
};


