
let Player_points=0;
let Computer_points=0;
function PlayerMove(value){
  let ComputerMoveValue;
  let GameResult=document.getElementById('game-result');
  let ComputerScore=document.getElementById('computer-score');
  let PlayerScore=document.getElementById('player-score');
  let Computer_Move=document.getElementById('computer-move');
  let Player_Move=document.getElementById('player-move');

if (value ==='Rock'){
  ComputerMoveValue=ComputerMove();
  if(value === 'Rock'){
    if(ComputerMoveValue==='Rock'){
      GameResult.textContent="It's a tie"
      Player_points+=1;
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent="Rock"
      Player_Move.textContent="Rock"
    }
    else if(ComputerMoveValue === 'Paper'){
      GameResult.textContent="You lose"
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      Computer_Move.textContent+="Paper"
      Player_Move.textContent+="Rock"
    }
    else{
      GameResult.textContent="You win";
      Player_points+=1;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent+="Scissor"
      Player_Move.textContent+="Rock"
    }
  }
}
else if (value==='Paper'){
  ComputerMoveValue=ComputerMove();
  if(value === 'Paper'){
    if(ComputerMoveValue==='Rock'){
      GameResult.textContent="You win"
      Player_points+=1;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent="Rock"
      Player_Move.textContent="Paper"
    }
    else if(ComputerMoveValue === 'Paper'){
      GameResult.textContent="It's a Tie"
      Player_points+=1;
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent="Paper"
      Player_Move.textContent="Paper"
    }
    else{
      GameResult.textContent="You lose"
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      Computer_Move.textContent="Scissor"
      Player_Move.textContent="Paper"
    }
  }
}
else if(value==="Scissor"){
  ComputerMoveValue=ComputerMove();
  if(value === 'Scissor'){
    if(ComputerMoveValue==='Rock'){
      GameResult.textContent="You lose"
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      Computer_Move.textContent="Rock"
      Player_Move.textContent="Scissor"
    }
    else if(ComputerMoveValue === 'Paper'){
      GameResult.textContent="You win";
      Player_points+=1;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent="Paper"
      Player_Move.textContent="Scissor"
    }
    else{
      GameResult.textContent="It's a Tie"
      Player_points+=1;
      Computer_points+=1;
      ComputerScore.textContent=Computer_points;
      PlayerScore.textContent=Player_points;
      Computer_Move.textContent="Scissor"
      Player_Move.textContent="Scissor"
    }
  }
}
if(Player_points == 10 ){
  playerWins();

  PlayerScore=0;
  ComputerScore=0;
}
if(Computer_points == 10){
 computerWins();
 PlayerScore=0;
 ComputerScore=0;
}
}
function ComputerMove(){
  let randomNumber=Math.floor(Math.random() *3)+1;
  if(randomNumber == 1) return ("Rock");
  else if(randomNumber == 2) return ("Paper");
  else return ("Scissor")
};