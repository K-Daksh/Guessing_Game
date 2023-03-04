'use strict';
const RandomNumber_Generator = () =>{
    ran_no=(Math.trunc(Math.random()*20+1));
    console.log(ran_no);
}
let ran_no;
let HighestScore=0;
let CurrentScore=20;
RandomNumber_Generator();
const check_loose = function(CurrentScore){
    if(CurrentScore<=0){
        return false;
    }else{
        return true;
    }
}
const Art_Reset = function(){
    RandomNumber_Generator();
    CurrentScore=20;
    document.querySelector('.score').textContent=`${CurrentScore}`;
    document.querySelector('body').style.backgroundColor='rgba(0, 0, 0, 0.513';
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='Start guessing..';
}
document.querySelector('.again').addEventListener('click',function(){
    RandomNumber_Generator();
    CurrentScore=20;
    document.querySelector('.score').textContent=`${CurrentScore}`;
    document.querySelector('body').style.backgroundColor='rgba(0, 0, 0, 0.513';
    document.querySelector('.nm').textContent='?';
    document.querySelector('.message').textContent='Start guessing..';
});
const Guess_Number = () => {
    return Number(document.querySelector('.guess').value);
}
let guess=Guess_Number();
document.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        guess=Guess_Number();
        if(!guess && CurrentScore>0){
            document.querySelector('.message').textContent='Enter a valid number';
            document.querySelector('.message').style.color='red';
            CurrentScore--;
            document.querySelector('.score').textContent=`${CurrentScore}`;
            if(check_loose(CurrentScore)){
                CurrentScore=CurrentScore;
            }else{
                document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
                document.querySelector('.message').textContent='You Lost!';
                document.querySelector('.nm').textContent='?';
            }
            
        }else if(guess>ran_no && CurrentScore>0){
            document.querySelector('.message').textContent='Too high!';
            CurrentScore--;
            document.querySelector('.score').textContent=`${CurrentScore}`;
            if(check_loose(CurrentScore)){
                CurrentScore=CurrentScore;
            }else{
                document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
                document.querySelector('.message').textContent='You Lost!';
                document.querySelector('.nm').textContent='?';
            }
            
        }else if(guess<ran_no && CurrentScore>0){
            document.querySelector('.message').textContent='Too low!';
            CurrentScore--;
            document.querySelector('.score').textContent=`${CurrentScore}`;
            if(check_loose(CurrentScore)){
                CurrentScore=CurrentScore;
            }else{
                document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
                document.querySelector('.message').textContent='You Lost!';
                document.querySelector('.nm').textContent='?';
            }
        }else if(guess===ran_no && CurrentScore>0){
            document.querySelector('.message').textContent='Correct Guess!(Reset)';
            document.querySelector('body').style.backgroundColor='rgba(13, 255, 0, 0.550)';
            if(CurrentScore>HighestScore){HighestScore=CurrentScore};
            document.querySelector('.highscore').textContent=`${HighestScore}`;
            document.querySelector('.nm').textContent=`${guess}`;
        }
    }else if(e.key==='Delete'){
        RandomNumber_Generator();
        CurrentScore=20;
        document.querySelector('.score').textContent=`${CurrentScore}`;
        document.querySelector('body').style.backgroundColor='rgba(0, 0, 0, 0.513';
        document.querySelector('.nm').textContent='?';
        document.querySelector('.message').textContent='Start guessing..';
    }
});
document.querySelector('.check').addEventListener('click', function (){
    guess=Guess_Number();
    if(!guess && CurrentScore>0){
        document.querySelector('.message').textContent='Enter a valid number';
        document.querySelector('.message').style.color='red';
        CurrentScore--;
        document.querySelector('.score').textContent=`${CurrentScore}`;
        if(check_loose(CurrentScore)){
            CurrentScore=CurrentScore;
        }else{
            document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
            document.querySelector('.message').textContent='You Lost!';
            document.querySelector('.nm').textContent='?';
        }
    }else if(guess>ran_no && CurrentScore>0){
        document.querySelector('.message').textContent='Too high!';
        CurrentScore--;
        document.querySelector('.score').textContent=`${CurrentScore}`;
        if(check_loose(CurrentScore)){
            CurrentScore=CurrentScore;
        }else{
            document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
            document.querySelector('.message').textContent='You Lost!';
            document.querySelector('.nm').textContent='?';
        }
    }else if(guess<ran_no && CurrentScore>0){
        document.querySelector('.message').textContent='Too low!';
        CurrentScore--;
        document.querySelector('.score').textContent=`${CurrentScore}`;
        if(check_loose(CurrentScore)){
            CurrentScore=CurrentScore;
        }else{
            document.querySelector('body').style.backgroundColor='rgba(255, 25, 0, 0.800)';
            document.querySelector('.message').textContent='You Lost!';
            document.querySelector('.nm').textContent='?';
        }
    }else if(guess===ran_no && CurrentScore>0){
        document.querySelector('.message').textContent='Correct Guess!(Reset)';
        document.querySelector('body').style.backgroundColor='rgba(13, 255, 0, 0.550)';
        if(CurrentScore>HighestScore){HighestScore=CurrentScore};
        document.querySelector('.highscore').textContent=`${HighestScore}`;
        document.querySelector('.nm').textContent=`${guess}`;
    }
});


const btnOpenModal = document.querySelector('.help');
btnOpenModal.addEventListener('click',function(){
    document.querySelector('.message').textContent=''
});
