const game=JSON.parse(localStorage.getItem('game')) ||
{
    Wins:0,Losses:0,Ties:0
}

// if(game===null){
//     score={
//         Wins:0,Losses:0,Ties:0
//     }
// }
function playerGame(playerMove){
    
    let result='';
    const computerMove=ComputerGame();
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result='Game Tie!';
        }else if(computerMove === 'Paper'){
            result='You lose!';
        }else{
            result='You won!';
        }
    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result='You won!';
        }else if(computerMove === 'Paper'){
            result='Game Tie!';
        }else{
            result='You lose!';
        }
    }else{
        if(computerMove === 'Rock'){
            result='You lose!';
        }else if(computerMove === 'Paper'){
            result='You won!';
        }else{
            result='Game Tie!';
        }
    }

    if(result==='You won!'){
        game.Wins++;
    }else if(result==='You lose!'){
        game.Losses++;
    }else{
        game.Ties++;
    }

    const local=localStorage.setItem('game',JSON.stringify(game));

    const res=document.querySelector('.js-result');
    res.innerHTML=result;
    const compMove=document.querySelector('.js-moves');
    compMove.innerHTML=`You've picked <img src="./images/${playerMove}-emoji.png" height="100px" title="${playerMove}"> - but, computer have picked <img src="./images/${computerMove}-emoji.png" height="100px" title="${computerMove}">`;
    updateScore();
    
    
}
function ComputerGame(){

    const randomNumber=Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber < 1/3){
        computerMove='Rock';
    }else if(randomNumber>=1/3 && randomNumber < 2/3){
        computerMove='Paper';
    }else{
        computerMove='Scissors';
    }
    return computerMove;
}
function updateScore(){
        const score=document.querySelector('.js-score');
        score.innerHTML=`Wins: ${game.Wins} Losses: ${game.Losses} Ties: ${game.Ties}`; 
    }