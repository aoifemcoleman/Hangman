# Hangman
![Screenshot of website responsivity, taken from https://ui.dev/amiresponsive](assets/images/responsivity.webp)
## Purpose
The purpose of this website is to provide an easy-to-use digital version of the traditional game of Hangman, available on-the-go and requiring no further players or materials.
### User Stories
As a player, I want to:
- [perform some task] so that I can [achieve some goal]".

[View the live deployed website here](https://aoifemcoleman.github.io/Hangman/)
## Features
### Existing Features

- __Favicon__

![Screenshot of favicon](assets/images/favicon.webp)

- __Header__

- _Desktop view_

![Screenshot of header in desktop view](assets/images/header-desktop.webp)

- _Mobile view_

![Screenshot of header in mobile view](assets/images/header-mobile.webp)

- __Game Area__

- _Desktop view_

![Screenshot of game area in desktop view](assets/images/game-area-desktop.webp)

- _Mobile view_

![Screenshot of first section of game area in mobile view](assets/images/game-area1-mobile.webp)

![Screenshot of second section of game area in mobile view](assets/images/game-area2-mobile.webp)

- __Updating gallows image__

![Screenshot of updating gallows](assets/images/updating-gallows.webp)

- __Incorrect Guesses tally__



- __Blank letter spaces__

![Screenshot of blank letter spaces](assets/images/letter-spaces.webp)

- __Virtual keyboard__

![Screenshot of virtual keyboard, with greyed out used letters](assets/images/vritual-keyboard.webp)

- __Hint feature__

![Screenshot of hint button and example of hint.](assets/images/hint-button.webp)

- __Win and lose alerts__

![Screenshot of winner desktop alert with "Woohoo! You got it right!" text.](assets/images/winner-alert.webp)

![Screenshot of loser desktop alert with "You lost :( The correct word was x" text.)](assets/images/loser-alert.webp)

- __Reset button__

![Screenshot of reset button with "Play Again!" text](assets/images/reset-button.webp)


### Features left to implement
## Testing
### Accessibility
![Lighthouse accessibility score](assets/images/accessibility-score.webp)
### Validator testing
#### HTML:
One issue was identified when passed through the official [W3C validator](https://validator.w3.org/).

The index.html had an empty heading which flagged a warning message. Although this was due to the text content being created dynamically by javascript, a placeholder was entered into the heading and when passed through the validator again, it returned no issues.

#### CSS: 

The style.css file was passed through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator) and returned no issues.

#### JS:

##### script.js:

Several issues were initially identified when the script.js file was passed through the official [Jshint validator](https://jshint.com/), which were due to it not being declared that the js file was operating with ES6. A comment was added to the js file to advise that esversion 6 is being used, which removed the majority of issues.

##### word-list.js:

The same issue relating to esversion 6 appeared when the word-list.js file was passed through the validator. As with the script.js file, a comment was added which resolved this issue. 

An issue also appeared showing wordList as being an unused variable. However, as this is due to the validator not having access to the related script.js file in unison, where this variable is used, no action was taken.

### Unfixed bugs
## Deployment
The site was deployed to GitHub using the following steps:

1. From the repository page, click on `Settings` in the navbar.
2. On the left side of the page, in the `Code and Automation` section, select `Pages`.
3. Under `Build and development`, the source should be set to `Deploy from a branch`.
4. Under `Branch` select `Main`, then `/root` and press `Save`.
5. Navigate back to the `<>Code` page in the navbar.
6. On the right side of the page, under `Deployments` you will see a link to `github-pages`, within which you can click on the expand icon to view the deployed website.

## Running the project locally

### How to clone the project

The site can be cloned from Github using the following steps:
1. Within the `hangman` respository on Github, click on the 'Code' dropdown menu.
2. From 'Local', in the HTTPS section, copy the respository link.
3. Open IDE of choice.
4. Create a new terminal in your chosen directory, and enter 'git clone' followed by the copied respository link.
5. A clone of the respository will now be created within your directory.

## Credits

https://favicon.io/favicon-generator/ for Favicon
Microsoft Paint for Hangman drawings
Google fonts
https://members.optusnet.com.au/~charles57/Creative/Techniques/random_words.htm random word list