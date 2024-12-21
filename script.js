'use strict';
/*
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // null
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let score = 20;
let secretnumber = Math.trunc(Math.random() * 10) + 1;
// console.log(secretnumber);
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    let highscore = document.querySelector('.highscore').textContent;
    if (!guess || typeof guess != 'number'){     
        displayMessage("🚫 No number provided");
    }
    else if (guess === secretnumber){
        displayMessage("🔥 Correct Number");
        document.querySelector("body").style.backgroundColor = "rgb(46, 204, 113)";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector('.number').textContent = secretnumber; 
        if (score > highscore){
        document.querySelector('.highscore').textContent = score;
        }
    }  
    else if (guess != secretnumber){
        if (score > 0){
            displayMessage(guess < secretnumber ? "📉 Too low, guess higher" : '📈 Too high, guess lower');
            score --;
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("Game Over! You lost the game.");
            document.querySelector('.score').textContent = 0;
            document.querySelector("body").style.backgroundColor = "rgb(192, 57, 43)"
        }
    }
   
})
document.querySelector('.btn.again').addEventListener('click',function(){
    score = 20;
    secretnumber = Math.trunc(Math.random() * 10) + 1;

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent= "?";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
})

document.querySelector('.reload').addEventListener('click',function(){
    location.reload();
})








