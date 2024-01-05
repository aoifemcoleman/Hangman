// Creating global variable to store clicked keyboard buttons
let usedLetters = [];
let correctLetters = [];
let maxGuesses = 6;
let incorrectLetters = [];

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
        if (!letterFound) {
            incorrectLetters.push(letter);
    }
    return letterFound;
 }

function letterClick(button, clickedLetter) {
    console.log(`Clicked letter: ${clickedLetter}`)
    //Call checkWord function with clicked letter
    let letterFound = checkWord(clickedLetter);

    if (letterFound) {
       button.style.backgroundColor = '#6D6D6D';
       console.log('Letter found in the word.');
       // Adding classList so further actions can be taken with clicked buttons later
       button.classList.add('clicked');
       // Pushing used letters to global variable array
       usedLetters.push(clickedLetter)
       // Running winner function
       winner();
    } else {
        button.style.backgroundColor = '#6D6D6D';
        console.log('Letter not found in the word.');
        updateImage();
        updateGuessbox();
        loser();
    } 
}

function winner() {
    let correctLetters = currentWord.toLowerCase().split('');
    // learned about every() method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    let allCorrect = correctLetters.every(letter => usedLetters.includes(letter)) 
    if (allCorrect) {
        alert("Woohoo! You got it right!");
        resetGame();
    }
}

function loser() {
    // idea for code modified from here: https://www.codingnepalweb.com/build-hangman-game-html-javascript/
    if (incorrectLetters.length >= maxGuesses) {
        alert(`You lost! :( The correct word was ${currentWord}.`);
        resetGame();
    }
}

/**
 * empty global variable arrays, generate new random word, wordlength and 
 * create relevant amount of letter spaces.
 * Return keyboard buttons to original colour
 */
function resetGame() {
    usedLetters = [];
    incorrectLetters = [];
    currentWord = chooseWord(wordList);
    currentWordLength = wordLength(currentWord);
    createLetterSpaces(currentWordLength);

    let keyboardButtons = document.getElementsByClassName('btn');
    for (i=0; i < keyboardButtons.length; i++) {
        keyboardButtons[i].style.backgroundColor = '#ddd';
    }
 }

 function updateGuessbox() {
    let score = document.getElementById('incorrect-count');
    score.textContent = incorrectLetters.length;
   //if (!letterFound) {
        
  //  }
 }

 function updateImage() {
    console.log("Updating image...")
    let hangmanImage = document.getElementById('hangman-image');
    let incorrectGuesses = incorrectLetters.length;
    let imagePath = `../assets/images/Hangman${incorrectGuesses}.webp`;
    hangmanImage.src = imagePath;
 }