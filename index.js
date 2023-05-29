const message = require("words.json")

//logs all the words.
function allWords(words){
    console.log(words)
}
allWords(message);
//logs the first ten words.
function firstTenWords(words){
    for (let index = 0; index < 10; index++){
        console.log(words[index])
    }
}
firstTenWords(message)
//logs the next 10 words.
function nextTenWords(words){
    for (let index = 10; index < 20; index++){
        console.log(words[index])
    }
}
nextTenWords(message)

//logs from 0 to x words.
function firstXWords(words,moreWords){
    for (let index = 0; index < moreWords; index++){
        console.log(words[index])
    }
}
firstXWords(message,10)

//logs from x to y words.
function subsetOfWords(words,start,end){
    for (let index = start; index < end; index++){
        console.log(words[index])
    }
} 
subsetOfWords(message,1,10)
//logs all the words, sorted alphabetically. 
function sortWords(words){
    console.log(words.sort())
} 
sortWords(message)