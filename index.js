function Rock(){
  return "Rock"
}
function Paper(){
  return "Paper"
}
function Scissor(){
  return "Scissor"
}
function ComputerChoice(){
  var randomNumber = Math.floor(Math.random() * 3)+1;
  if(randomNumber === 1) console.log ("Rock");
  else if(randomNumber === 2) console.log("Paper");
  else console.log("Scissor")

}
ComputerChoice();