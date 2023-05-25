const words = require("./words.json")

/** 
 * Logs all of the words in the given array
 * @param {Array} list - An array of all the words
 * @returns {null}
*/
function allWords (list) {
    for (word of list){
        console.log(word)
    }
}
/**
 * Logs the first ten words in the given array
 * @param {Array} list - An array of all the words
 * @returns {null}
 */
function firstTenWords (list) {
    for (let i = 0; i < 10; i++) {
        console.log(list[i])
    }
}

/**
 * Logs the next ten words in the given array
 * @param {Array} list - An array of all the words
 */
function nextTenWords(list) {
    for (let i = 10; i < 20; i++) {
        console.log(list[i])
    }
}

function firstXWords(list){}
function subsetOfWords(list){}
function sortWords(list){}
function wordsWithQ(list){}
function findWordsWithLetter(list, letter){}

// allWords(words) 
// firstTenWords(words)
// nextTenWords(words)




