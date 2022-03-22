// Global variables for buttons and select area in scoreboard

// Buttons
const p1Button = document.getElementById('p1+1');
const p2Button = document.getElementById('p1+2');
const resetButton = document.getElementById('resetgame');

// Score Display
const p1ScoreDisplay = document.getElementById('p1scoredisplay');
const p2ScoreDisplay = document.getElementById('p2scoredisplay');

// Game selection
const chooseGame = document.getElementById('choosegame');

// Variables for player totals
let p1Total = 0;
let p2Total = 0;

// Variables for logical operation of game totals
let winningScore = 0;
let gameOver = false;

// Variables for overall game score, games play to 3
let totalScoreP1 = 0;
let totalScoreP2 = 0;

/* Player One button - increase score, and then stop when chosen game
is over. Also adding green/red border for winning/losing player */

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Total += 1;
        if (p1Total === winningScore) {
            gameOver = true;
            p1ScoreDisplay.style.border = "5px solid green";
            p2ScoreDisplay.style.border = "5px solid red";
        }
        p1ScoreDisplay.innerHTML = p1Total;
    }
})

/* Player Two button - increase score, and then stop when chosen game
is over. Also adding green/red border for winning/losing player */

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Total += 1;
        if (p2Total === winningScore) {
            gameOver = true;
            p1ScoreDisplay.style.border = "5px solid red";
            p2ScoreDisplay.style.border = "5px solid green";
        }
        p1ScoreDisplay.innerHTML = p1Total;
    }
})

/* Reset button resets both scores and updates displayed scores 
to zero for both players */

resetButton.addEventListener('click', function () {
    p1Total = 0;
    p2Total = 0;
    p1ScoreDisplay.innerHTML = 0;
    p2ScoreDisplay.innerHTML = 0;
    // set gameOver variable back to false, to begin game again 
    gameOver = false;
    p1ScoreDisplay.style.border = 'initial';
    p2ScoreDisplay.style.border = 'initial';
})