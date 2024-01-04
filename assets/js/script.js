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

// Check if key pressed is a letter within currentWord
function checkWord(letter) {
    /**
     * Convert currentWord to an array of letters
     * Make case insensitive so lowercase keyboard letters 
     * will be accepted against uppercase first letters in word list
     * (https://www.w3schools.com/jsref/jsref_tolowercase.asp)
     */
    let currentWordArray = currentWord.toLowerCase().split('');
    // Check if the guessed letter is in the word, assuming letter is not in word first
    let letterFound = false;
    for (let i = 0; i < currentWordArray.length; i++) {
        if (currentWordArray[i] === letter) {
            let letterSpaces = document.getElementById('letter-spaces');
            let blankSpaces = letterSpaces.getElementsByClassName('letter');
            // replace blank space with entered letter
            blankSpaces[i].textContent = letter;
            letterFound = true;
        }
    }
    return letterFound;
 }

function letterClick(clickedLetter) {
    console.log(`Clicked letter: ${clickedLetter}`)
    // Call checkWord function with clicked letter
    let letterFound = checkWord(clickedLetter);

    if (letterFound) {
        console.log('Letter found in the word.');
    } else {
        console.log('Letter not found in the word.');
    }
}