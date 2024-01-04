// Generating random word from word-list.js using wordList as parameter.
function chooseWord(wordList) {
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
}
// Print currentWord to console
let currentWord = chooseWord(wordList);
console.log(currentWord);

// Check length of currentWord
function wordLength(word) {
    return word.length;
}
// Print length of currentWord to console
let currentWordLength = wordLength(currentWord);
console.log(`${currentWordLength}`);

// Create list of blank spaces using returned word length
function createLetterSpaces(length) {
    let letterSpaces = document.getElementById('letter-spaces');
    // Clear content from within list
    letterSpaces.innerHTML = '';
    // Create loop to append list items to the ul with 'letter-spaces'
    for (let i = 0; i < length; i++) {
        let blankSpace = document.createElement('li');
        blankSpace.textContent = '_';
        blankSpace.className = 'letter';
        letterSpaces.appendChild(blankSpace);
    }
}
createLetterSpaces(currentWordLength);

function letterClick(clickedLetter) {
    console.log(`Clicked letter: ${clickedLetter}`)
}