// Global variables for buttons and select area in scoreboard

// Buttons
const p1Button = document.getElementById('p1+1');
const p2Button = document.getElementById('p2+1');
const resetButton = document.getElementById('resetgame');

// Score Display
const p1ScoreDisplay = document.getElementById('p1scoredisplay');
const p2ScoreDisplay = document.getElementById('p2scoredisplay');

// Game chooser
const chooseGame = document.getElementById('choosegame');

// Variables for player totals
let p1Total = 0;
let p2Total = 0;

// Variables for logical operation of winning totals
let winningScore = 0;
let gameOver = false;

// Variables for overall game score leaderboard at bottom, games play to 3

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
            incrementScoreP1();
            // oldScore +=1;
        }
        p1ScoreDisplay.innerHTML = p1Total;
    }
});

/* Player Two button - increase score, and then stop when chosen game
is over. Also adding green/red border for winning/losing player */

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Total += 1;
        if (p2Total === winningScore) {
            gameOver = true;
            p1ScoreDisplay.style.border = "5px solid red";
            p2ScoreDisplay.style.border = "5px solid green";
            incrementScoreP2();
        }
        p2ScoreDisplay.innerHTML = p2Total;
    }
});

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
});


// Code for different winning scores based on game selected 

chooseGame.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    p1Total = 0;
    p2Total = 0;
    totalScoreP1 = 0;
    totalScoreP2 = 0;
    p1ScoreDisplay.innerHTML = 0;
    p2ScoreDisplay.innerHTML = 0;
    document.getElementById("scorep1").innerText = 0;
    document.getElementById("scorep2").innerText = 0;
    // set gameOver variable back to false, to begin game again 
    gameOver = false;
    p1ScoreDisplay.style.border = 'initial';
    p2ScoreDisplay.style.border = 'initial';
});

/* Alert to tell you to select a game, if you haven't done so 
before clicking on P1 or P2 button */

p1Button.addEventListener('click', function () {
    if (winningScore === 0) {
        alert("Please select your game!");
        p1Total = 0;
        p1ScoreDisplay.innerHTML = 0;
    }
});

p2Button.addEventListener('click', function () {
    if (winningScore === 0) {
        alert("Please select your game!");
        p2Total = 0;
        p2ScoreDisplay.innerHTML = 0;
    }
});

// Function to increase P1 game total score, and to stop once 3 is reached with an alert.

function incrementScoreP1() {
    document.getElementById('scorep1').innerText = totalScoreP1 += 1;
    if (totalScoreP1 === 3) {
        totalScoreP1 = 0;
        totalScoreP2 = 0;
        document.getElementById('scorep1').innerText = 0;
        document.getElementById('scorep2').innerText = 0;
        alert('Player One Wins!');
    }
}

// Function to increase P1 game total score, and to stop once 3 is reached with an alert.

function incrementScoreP2() {
    document.getElementById('scorep2').innerText = totalScoreP2 += 1;
    if (totalScoreP2 === 3) {
        totalScoreP1 = 0;
        totalScoreP2 = 0;
        document.getElementById('scorep1').innerText = 0;
        document.getElementById('scorep2').innerText = 0;
        alert('Player Two Wins!');
    }
}