const words = require("./words.json")
console.log(words[10])

const allWords = function allWords(words) {
    return words
}
console.log(allWords(words))


function firstTenWords(words) {
    return words.slice(0,10)
}
console.log(firstTenWords(words))


function firstOfXWords(words,x) {
    return words.slice(0,x+1)
}


function subsetOfWords(words,x,y) {
    return words.slice(x,y+1)
}


function sortWords(words) {
    return words.sort();
}
console.log(sortWords(words))



function wordsWithQ(words) {
    return words.filter(word => word.includes('q'));
  }
 console.log(wordsWithQ(words)) 


 function findWordsWithLetter(words,Letter) {
    return words.find(word=>words.includes(Letter))
 }
console.log(findWordsWithLetter(words, "p"));


/** lettersMatch without taking duplicates into consideration
 function lettersMatch(letters) {
  const result = words.filter(word => {
    for (let i = 0; i < letters.length; i++) {
      if (!word.includes(letters[i])) {
        return false;
      }
    }
    return true;
  });

  return result;
}

const letters = process.argv[2];
console.log(lettersMatch(letters));
 */


function lettersExactMatch(pattern) {
  const patternArr = pattern.toLowerCase().split("");
  const matchingWords = words.filter(word => {
    const wordArr = word.toLowerCase().split("");
    
    if (patternArr.length !== wordArr.length) {
      return false;
    }
    for (let i = 0; i < patternArr.length; i++) {
      if (patternArr[i] !== "_" && patternArr[i] !== wordArr[i]) {
        return false;
      }
    }
    return true;
  });

  return matchingWords;
}

// Example
const input = process.argv.slice(2).join("");
const matchingWords = lettersExactMatch(input);
console.log(matchingWords);


function lettersMatch(letters) {
  const letterCounts = {};
  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];
    if (letterCounts[char]) {
      letterCounts[char]++;
    } else {
      letterCounts[char] = 1;
    }
  }

  const result = words.filter(word => {
    const wordCounts = {};
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (wordCounts[char]) {
        wordCounts[char]++;
      } else {
        wordCounts[char] = 1;
      }
    }

    for (const key in letterCounts) {
      if (!wordCounts[key] || wordCounts[key] < letterCounts[key]) {
        return false;
      }
    }
    return true;
  });

  return result;
}

// Example
const letters = process.argv[2];
console.log(lettersMatch(letters));
console.log(lettersMatch("p"));



function matchPattern(wrongPositionLetters, correctPositionLetters) {

  const wrongPositionArr = wrongPositionLetters.toLowerCase().split("");
  const correctPositionArr = correctPositionLetters.toLowerCase().split("")
  const matchingPatternWords = words.filter(word => {
    const wordArr = word.toLowerCase().split("");

    for (let i = 0; i < wordArr.length; i++) {
      if (i < correctPositionArr.length && wordArr[i] !== correctPositionArr[i]) {
        return false;
      }
      if (i >= correctPositionArr.length && wrongPositionArr.includes(wordArr[i])) {
        return false;
      }
    }
    return true;
  });

  return matchingPatternWords;
}

// Example 
const wrongPositionInput = process.argv[2];
const correctPositionInput = process.argv[3];
const matchingPatternWords = matchPattern(wrongPositionInput, correctPositionInput);
console.log(matchingPatternWords);
