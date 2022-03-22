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