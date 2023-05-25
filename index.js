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
/**
 * Logs from the first word to a specified index in the given array.
 * @param {Array} list - An array of all the words
 * @param {Number} end - The console will log up to this index.
 */
function firstXWords(list, end){
    for (let i = 0; i <= end; i++) {
        console.log(list[i])
    }
}

/**
 * Logs a set of words from start to finish
 * @param {Array} list - Array of all words
 * @param {Number} start - Index to start from
 * @param {Number} finish - Index to end at.
 */
function subsetOfWords(list, start, finish){
    for(let i = start; i < finish; i++){
        console.log(list[i])
    }
}
/**
 * Logs all the words, sorted alphabetically.
 * @param {Array} list - Array of all input words
 */
function sortWords(list){
    sortedList = list.sort()
    allWords(sortedList)
}
function wordsWithQ(list){}
function findWordsWithLetter(list, letter){}

// allWords(words) 
// firstTenWords(words)
// nextTenWords(words)
// firstXWords(words, 1)
// subsetOfWords(words, 12, 14)
sortWords(words)




