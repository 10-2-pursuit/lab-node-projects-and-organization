const words=require("./words.json");
 console.log(words)


function allWords (words){
   return (words)
}

function firstTenWords (words) {
    for (i=0; i<10; i++) {
    console.log(words[i])
}
}

function nextTenwords (words){
    for(i=10; i<=10; i++){
        console.log(words[i])
    }   
}
 
function firstXWords(words, x){        
    for (i=0; i<x; i++){
        console.log(words(i))
    }
}

function subsetOfWords (words, a, b){
    for(i=a; i<b; i++){
        console.log(words[i])
    }
}

function sortWords (words){
    return words.sort()
}

function wordsWithQ (words){
    return words.filter(word => word.includes("q"))
}
    console.log(wordsWithQ)

function wordsWithLetter(words){
    return words.filter(word => word.includes(process.argv[2]) )
}
console.log (wordsWithLetter(process.argv[2]))


function findWordsWithLetter(words) {
  return words.filter(word => word.includes(process.argv[2]))
}
console.log(findWordsWithLetter(words, process.argv[2]))


function lettersMatch ()
function bash
grep curl -s ... | grep -v [dukfiht] | grep .r... | grep n | grep -v ...n. | grep g | grep -v ..g..