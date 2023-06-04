const words = require("./words.json")


// var args = process.argv;
// console.log("Total number of arguments are: "+args.length);
// args.forEach((val, index) => {
// console.log(`${index}: ${val}`);
// });

// - `allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

//console.log(words) // functioning ✅

//first function
function allWords(words){
   return words;
}

//second function
function firstTenWords(words) {
   const firstTen= [];
   for (let i = 0; i < 10; i++) {
      const element = words[i];
      firstTen.push(element);
   }
   return firstTen;
}

//third function
function nextTenWords(words) {
   let nextTen = [];
   for (let n = 10; n < 20; n++) {
      const element = words[n];
      nextTen.push(element);
   }
   return nextTen;
}

//fourth function
function firstXWords(words, x) {
   let firstX = [];
   for (let d = 0; d < x; d++) {
      const element = words[d];
      firstX.push(element);
   }
   return firstX;
}

//fifth function
function subsetOfWords(words, x, y) {
   let subset = [];
   for (let e = x; e < y; e++) {
      const element = words[e];
      subset.push(element);
   }
   return subset;
}

//six and final function
function sortWords(words) {
  words.sort();
  return words; 
}

//----------------------------
console.log(allWords(words));
console.log('\n')
console.log(firstTenWords(words));
console.log('\n')
console.log(nextTenWords(words));
console.log('\n')
console.log(firstXWords(words, 25));
console.log('\n')
console.log(subsetOfWords(words, 15, 23));
console.log('\n')
console.log(sortWords(words));