const p1Button = document.getElementById('p1+1');
const p2Button = document.getElementById('p2+1');
const resetButton = document.getElementById('resetgame');

const p1ScoreDisplay = document.getElementById('p1scoredisplay');
const p2ScoreDisplay = document.getElementById('p2scoredisplay');

const p1TotalDisplay = document.getElementsByClassName('score1')
const p2TotalDisplay = document.getElementsByClassName('score2')

const chooseGame = document.getElementById('choosegame');

let p1Total = 0;
let p2Total = 0;


let winningScore = 0;
let gameOver = false;

let totalScoreP1 = 0;
let totalScoreP2 = 0;



// Player One button - increase score, and also stop when winning score is reached (game over)

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
})

// Player Two button - increase score, and also stop when winning score is reached (game over)

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
})

// Reset button, to reset scores and update score display to 0 

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

// Alert to tell you to select game after clicking on either Player One or Player Two buttons 

p1Button.addEventListener('click', function () {
    if (winningScore === 0) {
        alert("Please select your game!");
        p1Total = 0;
        p1ScoreDisplay.innerHTML = 0;
    }
})

p2Button.addEventListener('click', function () {
    if (winningScore === 0) {
        alert("Please select your game!");
        p2Total = 0;
        p2ScoreDisplay.innerHTML = 0;
    }
})

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
})

function incrementScoreP1() {
    document.getElementById("scorep1").innerText = totalScoreP1 += 1;
    if (totalScoreP1 === 3) {
        totalScoreP1 = 0;
        totalScoreP2 = 0;
        document.getElementById("scorep1").innerText = 0;
        document.getElementById("scorep2").innerText = 0;
        alert("Player One Wins");

    }
}

function incrementScoreP2() {
    document.getElementById("scorep2").innerText = totalScoreP2 += 1;
    if (totalScoreP2 === 3) {
        totalScoreP1 = 0;
        totalScoreP2 = 0;
        document.getElementById("scorep1").innerText = 0;
        document.getElementById("scorep2").innerText = 0;
        alert("Player Two Wins");

    }
}