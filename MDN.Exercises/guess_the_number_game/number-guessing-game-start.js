// Use constants to store references to parts of the interface
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

// Use variables to store references to the result(s)
let guessCount = 1;
let resetButton;

guessField.focus();

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function checkGuess() {
    const userGuess = Number(guessField.value);

    // If the game just starts display the label
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';

        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi = '';

        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// Execute the main function checkGuess() when enter is pressed
// (event.keyCode === 13) --== deprecated ==-> "event.key === 'Enter'"
//
// document.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') checkGuess();
// });
//
// Define the callback function outside in order to use removeEventListener

// const checkGuessEnter = (event) => {
//     if (event.key === 'Enter') checkGuess();
// };
// document.addEventListener('keypress', checkGuessEnter);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    
    resetButton.addEventListener('click', resetGame);

    // const resetButtonEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         resetGame();

    //         // Remove the listener once it is executed
    //         document.removeEventListener('keypress', resetButtonEnter);
    //     }
    // };
    // document.addEventListener('keypress', resetButtonEnter);
}

function resetGame() {
    guessCount = 1;

    const resetParagraphs = document.querySelectorAll('.resultParas p');
    for (const resetParagraph of resetParagraphs) {
        resetParagraph.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;

    // document.addEventListener('keypress', checkGuessEnter);
}