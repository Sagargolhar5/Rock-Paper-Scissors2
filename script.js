let choice = document.querySelector(".choices")
let msg =document.getElementById("msg")
let compScore = document.getElementById("comp-score")
let userSco = document.getElementById("user-score")

let choices = ["rock", "paper", "scissors"]

let userChoice = ""
let ComputerChoice = ""

let userScore = 0
let computerScore = 0

function getCompChoice(){
  let compSelect = Math.floor(Math.random() * 3)
  let compChoice = choices[compSelect]
  return compChoice
}

function result(userValue){
  console.log(userValue);
  if(userValue){
    msg.innerText = `You Win!. You Select ${userChoice} Computer Select ${ComputerChoice}`
    msg.style.backgroundColor = "green"
    msg.style.color = "#fff"
    userScore += 1
    userSco.innerText = userScore
  }
  else
  {
    msg.innerText = `You Loose!. You Select ${userChoice} Computer Select ${ComputerChoice}`
    msg.style.backgroundColor = "red"
    msg.style.color = "#fff"
    computerScore +=1
    compScore.innerText = computerScore
  }
}

function playGame(userChoice){

ComputerChoice = getCompChoice()

if(userChoice=== ComputerChoice){
    msg.innerText = `Match Tie!. You Select ${userChoice} Computer Select ${ComputerChoice}`
    msg.style.backgroundColor = "Green"
    msg.style.color = "#fff"
}else{
    let userValue = true
    if(userChoice === "rock"){
      userValue = ComputerChoice ==="paper" ? false : true
    }
    else if(userChoice = "paper"){
      userValue = ComputerChoice === "scissors" ? false:true;
    }
    else if(userChoice ==="scissors"){
      userValue  = ComputerChoice = "rock" ? false : true
    }

    result(userValue)

  }

}


choice.addEventListener("click", (e) =>{
  
  userChoice = e.target.parentNode.id
  playGame(userChoice)
})
