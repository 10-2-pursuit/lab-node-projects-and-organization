const words = require("./words.json");

function allWords(words) {
  return console.log(words);
}

function firstTenWords(words) {
  return console.log(words.slice(0, 10));
}

function nextTenWords(words) {
  return console.log(words.slice(11, 21));
}

function firstXWords(words, number) {
  return words.filter((word, index) => index < number);
}

function subsetOfWords(words, startNum, endNum) {
  return console.log(words.slice(startNum, endNum));
}

function sortWords(words) {
  return words.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function wordsWithQ(words) {
  return words.filter((word) => word.charAt(0) === "q");
}
let letter = process.argv[2];

function findWordsWithLetter(words, letter) {
  return console.log(words.filter((word) => word.charAt(0) === letter));
}
