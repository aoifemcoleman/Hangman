/**
 * Generating random word from word-list.js using wordList as parameter.
 */
function chooseWord(wordList) {
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
}
let currentWord = chooseWord(wordList);
console.log(currentWord);