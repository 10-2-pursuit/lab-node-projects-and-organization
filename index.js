const words = require("./words.json");
//console.log(words);

function allWords() {
    for (const word of words) {
        console.log(word);
    }
};
allWords();

function firstTenWords(words) { 
    for (let i = 0; i < 10; i++) {
        console.log(words[i]);
    }
};
firstTenWords(words);

function nextTenWords(words) { 
    for (let i = 10; i < 20; i++) {
        console.log(words[i]);
    }
};
nextTenWords(words);

function firstXWords(words, X) {
  for (let i = 0; i < X; i++) {
    console.log(words[i]);
  }
}
//firstXWords(words, process.argv[2]);

function subsetOfWords(words, xSubSet, ySubSet) {
  for (xSubSet; xSubSet < ySubSet; xSubSet++) {
    console.log(words[xSubSet]);
  }
}
subsetOfWords(words, Number(process.argv[2]), Number(process.argv[3]));
console.log(process.argv);

function sortWords(words) {
    const wordsSorted = words.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    console.log(wordsSorted);
}


function wordsWithQ(words) {
    const qWords = words.filter((word) => word.includes('q'));
    return qWords;
}


function findWordsWithLetter(words, letter, position) {
    const letterWords = words.filter((word) => {
        if (position && word[position] === letter.toLowerCase()) {
            return word;
        }
        if (!position && word.includes(letter.toLowerCase())) {
            return word;
        }
    });
    return letterWords;
}
 
console.log(findWordsWithLetter(words, process.argv[2], process.argv[3]));