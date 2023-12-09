let PlayerScore=0;
let ComputerScore=0;
let PlayerMove;
let Player_Score=document.getElementById('player-score');
let Computer_Score=document.getElementById('computer-score');


function PlayerChoice(value){
 
  if(value === 'Rock'){
    PlayerMove='Rock'
    ComputerChoice();
    gamePlay();
  }
  else if(value === 'Paper'){
    PlayerMove='Paper';
    ComputerChoice();
    gamePlay();
  }
  else{
    PlayerMove='Scissor'
    ComputerChoice();
    gamePlay();
  }
 
  return PlayerMove;
}

function ComputerChoice(){
  let ComputerMove=document.getElementById('computer-play');
  console.log(ComputerMove)
  let randomNumber = Math.floor(Math.random() * 3)+1;
  if(randomNumber == 1){
    ComputerMove.textContent="Rock"
  }
    else if(randomNumber == 2){
      ComputerMove.textContent="Paper";
    }
    else{
      ComputerMove.textContent="Scissor";
    }
    return ComputerMove;
}
let PlayerChoiceValue=PlayerChoice();
let ComputerChoiceValue=ComputerChoice();

function gamePlay(PlayerChoiceValue,ComputerChoiceValue){
  var Result=document.getElementById('result')
  if(PlayerChoiceValue === 'Rock'){
    if(ComputerChoiceValue === 'Rock'){
     Result.textContent="It's a tie"
    }
    else if (ComputerChoiceValue === 'Paper'){
      Result.textContent="You lose"
    }
    else{
      Result.textContent="You win"
    }
  }
  else if(PlayerChoiceValue === 'Paper'){
    if(ComputerChoiceValue === 'Paper'){
     Result.textContent="It's a tie"
    }
    else if (ComputerChoiceValue === 'Scissor'){
      Result.textContent="You lose"
    }
    else{
      Result.textContent="You win"
    }
  }

  
  Player_Score.textContent=PlayerScore;
  Computer_Score.textContent=ComputerScore;

}
