// Creating global variable to store clicked keyboard buttons
let usedLetters = [];
let maxGuesses = 6;
let incorrectLetters = [];
// Flag to check whether game is over or not - idea found here: https://stackoverflow.com/questions/33722268/disabling-click-counter-function-after-timer-runs-down-to-zero-and-alerts-game
let gameOver = false;

 // Setting all buttons to enabled, and then disabling once used. Technique learned from here: https://www.codingnepalweb.com/build-hangman-game-html-javascript/
 document.querySelectorAll('.btn').forEach(button => {
    button.disabled = false;
});

// Generating random word from word-list.js using wordList as parameter.
function chooseWord(wordList) {
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
}
let currentWordObject = chooseWord(wordList);
let currentWord = currentWordObject.word;
let currentHint = currentWordObject.hint;
document.querySelector('#hint').textContent = `Hint: ${currentHint}`;
console.log(currentWord);
console.log(currentWordObject);
// displayHint();

// Check length of currentWord
function wordLength(word) {
    return word.length;
}
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
    console.log(`Clicked letter: ${clickedLetter}`);
    if (!gameOver) {
    //Call checkWord function with clicked letter
    let letterFound = checkWord(clickedLetter);

    if (letterFound) {
       button.style.backgroundColor = '#6D6D6D';
       button.disabled = true;
       console.log('Letter found in the word.');
       // Pushing used letters to global variable array
       usedLetters.push(clickedLetter);
       // Calling winner function
       winner();
    } else {
        button.style.backgroundColor = '#6D6D6D';
        button.disabled = true;
        console.log('Letter not found in the word.');
        updateImage();
        updateGuessbox();
        loser();
    } 
}
}

function winner() {
    let correctLetters = currentWord.toLowerCase().split('');
    // learned about every() method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    let allCorrect = correctLetters.every(letter => usedLetters.includes(letter)); 
    if (allCorrect) {
        alert("Woohoo! You got it right!");
        gameOver = true;
    }
}

function loser() {
    // idea for code modified from here: https://www.codingnepalweb.com/build-hangman-game-html-javascript/
    if (incorrectLetters.length >= maxGuesses) {
        updateImage();
        //learned about method here, to allow image time to update: https://forum.freecodecamp.org/t/how-to-make-js-wait-until-dom-is-updated/122067
        setTimeout(function() {
            alert(`You lost! :( The correct word was ${currentWord}.`);
        }, 1000);
        gameOver = true;
    }
    }

/**
 * empty global variable arrays, generate new random word, wordlength and 
 * create relevant amount of letter spaces.
 * Return keyboard buttons to original colour
 */

// Event listener for reset
let resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', function() {
    resetGame();
});

function resetGame() {
    gameOver = false;
    usedLetters = [];
    incorrectLetters = [];
    currentWordObject = chooseWord(wordList);
    currentWord = currentWordObject.word;
    currentHint = currentWordObject.hint;
    currentWordLength = wordLength(currentWord);
    createLetterSpaces(currentWordLength);
    document.getElementById('hint').textContent = '';
    document.querySelectorAll('.btn').forEach(button => {
        button.disabled = false;
    });

    let keyboardButtons = document.getElementsByClassName('btn');
    for (let i=0; i < keyboardButtons.length; i++) {
        keyboardButtons[i].style.backgroundColor = '#ddd';
    }
    let hangmanImage = document.getElementById('hangman-image');
    let imagePath = `assets/images/Hangman0.webp`;
    hangmanImage.src = imagePath;
    updateGuessbox();
 }

 function updateGuessbox() {
    let score = document.getElementById('incorrect-count');
    score.textContent = incorrectLetters.length;
 }

 function updateImage() {
    console.log("Updating image...");
    let hangmanImage = document.getElementById('hangman-image');
    let incorrectGuesses = incorrectLetters.length;
    let imagePath = `assets/images/Hangman${incorrectGuesses}.webp`;
    hangmanImage.src = imagePath;
 }

function displayHint() {
        let hintElement = document.getElementById('hint');
        hintElement.style.display = 'block';
        hintElement.textContent = `Hint: ${currentHint}`;
}
    document.getElementById('showHintButton').addEventListener('click', displayHint);