const words = require("./words.json")


function exactLetters(list, letter){
    let filteredList = list
    .filter(word => word.slice(0,letter.length) == letter)
    if(filteredList.length != 0){
        return filteredList
    } else {
        console.log(`No words matching ${letter}`)
    } 
}



/** 
 * Logs all of the words in the given array
 * @param {Array} list - An array of all the words
 * @returns {null}
*/
function allWords (list) {
    for (word of list){
        console.log(word);
    }
}
/**
 * Logs the first ten words in the given array
 * @param {Array} list - An array of all the words
 * @returns {null}
 */
function firstTenWords (list) {
    for (let i = 0; i < 10; i++) {
        console.log(list[i]);
    }
}

/**
 * Logs the next ten words in the given array
 * @param {Array} list - An array of all the words
 */
function nextTenWords(list) {
    for (let i = 10; i < 20; i++) {
        console.log(list[i]);
    }
}

/**
 * Logs from the first word to a specified index in the given array.
 * @param {Array} list - An array of all the words
 * @param {Number} end - The console will log up to this index.
 */
function firstXWords(list, end){
    for (let i = 0; i <= end; i++) {
        console.log(list[i]);
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
        console.log(list[i]);
    }
}

/**
 * Logs all the words, sorted alphabetically.
 * @param {Array} list - Array of all input words
 */
function sortWords(list){
    let sortedList = list.sort();
    allWords(sortedList);
}

/**
 * Logs all words including the letter "q" in the given array
 * @param {Array} list - Array of all input words
 */
function wordsWithQ(list){
    return findWordsWithLetter(list, "q");
}

/** 
 * Logs all words including the given letter
 * @param {Array} list - List of input words
 * @param {String} letter - letter to check for
 */
function findWordsWithLetter(list, letter){
    let filteredList = list
    .filter(word => word.includes(letter))
    if(filteredList.length != 0){
        return filteredList
    } else {
        return `No words matching ${letter}`
    } 
    
}



function lettersMatch(list, input){
    let usedletters = []
    let foundWords = []
    if(input.length > 5){
        return "Input length exceeded"
    }
    for(i = 0; i < input.length; i++){
        if(foundWords.length == 0){
            foundWords = findWordsWithLetter(list, input[i])
            usedletters.push(input[i])
        } else if(!usedletters.includes(input[i])){
            foundWords = findWordsWithLetter(foundWords, input[i])
            usedletters.push(input[i])
        } else {
            for (let j = 0; j < foundWords.length ; j++){
                let wordSplit = foundWords[j].split('')
                if (wordSplit.indexOf(input[i]) == wordSplit.lastIndexOf(input[i])) {     
                    foundWords.splice(j,1);
                    j--
                }
            }
        }
        
    }
    console.log(usedletters)
    return foundWords
}

/**
 * Logs all letters that match the input exactly
 * @param {Array} list - Array of input words
 * @param {String} input - String of characters to match
 */
function lettersExactMatch(list,input){
    if(input.length > 5){
       return "Input length exceeded";
    } 
    let filteredList = list;
    for(let i = 0; i < input.length; i++){
        if (input[i] == "." || input[i] == "_"){
            continue;
        }
        filteredList = filteredList.filter(word => word[i] == input[i]);
    }
    if(filteredList.length != 0){
        return  allWords(filteredList)
    } else {
        return `No words matching ${input}`
    } 
    
}

// console.log(findWordsWithLetter(words, 'q'))
// console.log(exactLetters(words, process.argv[2]))
console.log(lettersMatch(words, process.argv[2]));






