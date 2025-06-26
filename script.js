// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 12;

let score = 20;
let secretnumber = Math.trunc(Math.random() * 10) +1;
let highscore = 0;
function start_again(){
    score = 20;
    secretnumber = Math.trunc(Math.random() * 10) +1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent= "?";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    console.log(secretnumber);
    return score,secretnumber;
}
console.log(secretnumber);


document.querySelector('.between').textContent = 'Between 1 and 10';
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

const check_score = function(){
    if (score == 0){
        displayMessage("Game Over! You lost the game.");
        document.querySelector('.score').textContent = 0;
        document.querySelector("body").style.backgroundColor = "rgb(192, 57, 43)"
    }
    else if(score == -1){
        start_again();
    }
}
const update_score = function(score){
    document.querySelector(".score").textContent = score;
}

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    if (guess){
        console.log(guess);
        if (guess== secretnumber) {
            displayMessage("🎉 Correct Number");
            document.querySelector("body").style.backgroundColor = "rgb(46, 204, 113)";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector('.number').textContent = `${secretnumber}`; 
            if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        }
        else if (guess > secretnumber) {
            displayMessage("📈 Too high, guess lower");
            score --;
            update_score(score);
            check_score()
        }
        else if(guess < secretnumber){
            displayMessage("📉 Too low, guess higher");
            score --;
            update_score(score);
            check_score()
        }
        
    }
    else{
        displayMessage('Please enter a valid number');
        }

    }
);  
document.querySelector('.guess').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

document.querySelector('.again').addEventListener('click',function(){
    start_again();
})
