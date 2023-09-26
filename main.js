"use strict"
    document.querySelector('.message').textContent = "Enter the Message 🙄";   

    document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('input').value);
    if(guess>secretNum){
        document.querySelector('.message').textContent = "The number is greater than the Secret Number";
        score = highscore-1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
    }
    else if(guess<secretNum){
        document.querySelector('.message').textContent = "The number is lesser than the Secret Number";
        score = highscore-1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
    }
    else if(guess === secretNum){
        document.querySelector('.message').textContent = "The Number is correct🎉🎊🎊🔥🔥";
        (highscore<score)?highscore = score:highscore;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = "No Number 🛑";
        score = highscore-1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
    }
});

