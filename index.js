const words = require("./words.json");

/** Logs all the words */
function allWords(words){}
return words;
/** Logs the first ten words */
function firstTenWords(words){}

/** Logs next 10 words */
function nextTenWords(words){}


/** Logs 0 to x words */
function firstXWords(words){}



/** Logs from x to y words */
function subsetOfWords(words){}


/** Logs all the words sorted Alphbetically */
function sortWords(words){
    return words.sort();
}


module.exports = {
    allWords, 
    firstTenWords, 
    nextTenWords,
    firstXWords, 
    subsetOfWords,
    softWords
}


