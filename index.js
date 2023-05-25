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
 * 
 * @param {Array} list - list 
 * @param {Number} start - Index to start from
 * @param {Number} finish - Index to end at.
 */
function subsetOfWords(list, start, finish){
    for(let i = start; i < finish; i++){
        console.log(list[i])
    }
}
function sortWords(list){}
function wordsWithQ(list){}
function findWordsWithLetter(list, letter){}

// allWords(words) 
// firstTenWords(words)
// nextTenWords(words)
// firstXWords(words, 1)
// subsetOfWords(words, 12, 14)




