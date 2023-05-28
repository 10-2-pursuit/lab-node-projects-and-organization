const words = require("./words.json");
console.log(words);

/* in this function you need to log all word */

function allWords() {
  console.log(words);
}

/* in this function you need logs the first ten words */

function firstTenWords() {
  console.log(words.slice(0, 10));
}

/* next function you need to logs the next 10 words */

function nextTenWords() {
  console.log(words.slice(10, 20));
}

/* next function logs from 0 to x words
param [x] */

function firstXWords(x) {
  console.log(words.slice(0, x));
}

/* next function you need to logs from x to y words
param [x]
param [y] */

function subsetOfWords(x, y) {
  console.log(words.slice(x, y));
}

/* in this function logs all the words, sorted alphabetically */

function sortWords() {
  console.log(words.sort());
}

/* - `wordsWithQ` returns all the words that contain the letter 'q'
*/

function wordsWithQ() {
  const qWords = words.filter((word) => word.includes("q"));
  return qWords; 
}


/* `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter */

function findWordsWithLetter(letter) {
  const matchingWords = words.filter((word) => word.includes(letter));
 return matchingWords;
}
  


/* call the functions */
allWords();
firstTenWords();
nextTenWords();
firstXWords(20);
subsetOfWords(10, 30);
sortWords();
wordsWithQ();
findWordsWithLetter('p');