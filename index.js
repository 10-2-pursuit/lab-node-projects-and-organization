const words = require("./words.json");
//console.log(words);

/*function allWords() {
    for (const word of words) {
        console.log(word);
    }
};
allWords();*/

/*function firstTenWords(words) { 
    for (let i = 0; i < 10; i++) {
        console.log(words[i]);
    }
};
firstTenWords(words);*/

/*function nextTenWords(words) { 
    for (let i = 10; i < 20; i++) {
        console.log(words[i]);
    }
};
nextTenWords(words);*/

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

function sortWords(params) {}
