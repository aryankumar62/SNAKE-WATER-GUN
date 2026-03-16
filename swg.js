let userScore = 0;
let compScore = 0;
let userScoreaPara = document.querySelector("#user-score");
let compScoreaPara = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const drawGame = () => {
  msg.innerHTML = "Game draw,play again."
}

const showWinner = (userWin,userChoice,compchoice) =>{
  if (userWin) {
    userScore++;
    userScoreaPara.innerHTML = userScore;
    msg.innerHTML = `you win! your ${userChoice} beats ${compchoice}`
  } else {
    compScore++;
    compScoreaPara.innerHTML = compScore;
    msg.innerHTML = `you loose,${compchoice} beats your ${userChoice}`
  }
}

let genCompChoice = () => {
  let options = ["snake", "water", "gun"];
  let randIdx = Math.floor(Math.random() * 3)
  return options[randIdx];
}

let playGame = (userChoice) => {
  let compchoice = genCompChoice();

  if (userChoice === compchoice) {
    drawGame();
  }else{
    let userWin = true;

    if (userChoice === "snake") {
      userWin = compchoice === "water" ? true : false;
    }
    if (userChoice === "water") {
      userWin = compchoice === "gun" ? true : false;
    }
    if (userChoice === "gun") {
      userWin = compchoice === "snake" ? true : false;
    }
    showWinner(userWin,userChoice,compchoice)
  }
}


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    //console.log(userChoice)
    playGame(userChoice)
  })
})