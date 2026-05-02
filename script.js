function getComputerChoice(){
  let num = Math.floor(Math.random()*3);
  if(num===0){
    return "rock";
  }else if(num===1){
    return "paper";
  }else{
    return "scissors"
  }
}
// console.log("Computer : " +getComputerChoice());
// -----------------
function getHumanChoice(){
    let input = prompt("Enter your value: ").toLowerCase().trim();
    
    if(input === "rock" || input === "paper"||input === "scissors"){
        return input;
    }else{
        return "rock"
    }
    
}
// console.log("Human : " + getHumanChoice());
// -------------------

function playRound(human,computer){
    if(human===computer){
        return "Draw"
    }else if(human==="rock" && computer === "scissors" || 
        human === "paper" && computer === "rock" ||
        human === "scissors" && computer === "paper"
    ){
        return "Player win"
    }else{
        return "Computer win"
    }
}
// console.log(playRound(getHumanChoice(),getComputerChoice()));

function playGame(){
    let humanscore = 0, computerscore = 0,draw = 0, result;
    for(let i = 1; i<=5; i++){
       result = playRound(getHumanChoice(), getComputerChoice());
   
    if(result === "Player win"){
        humanscore++;
    }else if(result === "Computer win"){
        computerscore++;
    }else{
        draw++;
    } }
    if(humanscore>computerscore){
        return "Player win";
    }else if(humanscore<computerscore){
        return "Computer win"
    }else{
        return "Draw"
    }
}
console.log(playGame());
