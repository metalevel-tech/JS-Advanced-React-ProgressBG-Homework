# Guess the number game | MDN JavaScript Guide

* End result [Live preview](https://metalevel-tech.github.io/js_homework/MDN.Exercises/guess_the_number_game/number-guessing-game-start.html)

Source and references:

* [MDN: A first splash into JavaScript: Example — Guess the number game](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#example_%E2%80%94_guess_the_number_game)

* [MDN: JavaScript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

* [MDN: JavaScript IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

## Condition of the task

Let's imagine your boss has given you the following brief for creating this game:

> I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.

2. Record the turn number the player is on. Start it on 1.

3. Provide the player with a way to guess what the number is.

4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.

5. Next, check whether it is the correct number.

6. If it is correct:

    1. Display congratulations message.

    2. Stop the player from being able to enter more guesses (this would mess the game up).

    3. Display control allowing the player to restart the game.

7. If it is wrong and the player has turns left:

    1. Tell the player they are wrong and whether their guess was too high or too low.

    2. Allow them to enter another guess.

    3. Increment the turn number by 1.

8. If it is wrong and the player has no turns left:

    1. Tell the player it is game over.

    2. Stop the player from being able to enter more guesses (this would mess the game up).

    3. Display control allowing the player to restart the game.

9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

## Solutions of the problem

**0.** The file [number-guessing-game-start.v0.init.js](number-guessing-game-start.v0.init.js) contains almost the same script as those provided within the MDN's lesson.

The main difference is the code added at the beginning of the function `checkGuess()` in order to increase the stability of the game is added an additional condition as follow.
```js
function checkGuess() {
    const userGuess = Number(guessField.value);

    // if (! userGuess) return;
    if (userGuess < 1 || userGuess > 100) {
        alert(`Enter numbers between 1 and 100!`);
        return;
    }
    // ...
}
``` 

**1.** The file [number-guessing-game-start.v1.init.js](number-guessing-game-start.v1.init.js) uses `document.addEventListener('keypress', callback)` and `document.removeEventListener('keypress', callback)` in order to bind the Enter key to the buttons. For this purpose the *callback* functions must be named. 

```js
const bindEnterToCheckGuess = (event) => {if (event.key === 'Enter') checkGuess();}
const bindEnterToResetGame = (event) => {if (event.key === 'Enter') resetGame();}

document.addEventListener('keypress', bindEnterToCheckGuess);
document.removeEventListener('keypress', bindEnterToCheckGuess);

document.addEventListener('keypress', bindEnterToResetGame);
document.removeEventListener('keypress', bindEnterToResetGame);
```

* Note `event.keyCode === 13` is deprecated so we must use `event.key === 'Enter'` instead. 
