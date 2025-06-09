let bat = document.querySelector("#bat");
let ball = document.querySelector("#ball");
let stump = document.querySelector("#stump");

let scoreEl = document.getElementById("score");
let comChEl = document.getElementById("comCh");
let yourChEl = document.getElementById("yourCh");
let winEl = document.getElementById("win");

let wins = 0,
  losses = 0,
  ties = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) return "bat";
  else if (randomNum == 1) return "ball";
  else return "stump";
}

function Mychose(userChoice) {
  let comChose = getComputerChoice(); // generate new each time
  let result;

  if (userChoice === comChose) {
    result = "Tie!";
    ties++;
  } else if (
    (userChoice === "bat" && comChose === "ball") ||
    (userChoice === "ball" && comChose === "stump") ||
    (userChoice === "stump" && comChose === "bat")
  ) {
    result = "You Win!";
    wins++;
  } else {
    result = "Computer Wins!";
    losses++;
  }

  comChose = comChose.toUpperCase();
  userChoice = userChoice.toUpperCase();

  // Show the result in UI
  comChEl.textContent = "Computer Choose : " + comChose;
  yourChEl.textContent = "You Choose : " + userChoice;
  winEl.textContent = result;

  scoreEl.textContent = `Your Score : Win-${wins}, Loss-${losses}, Tie-${ties}`;
}

// Add event listeners to buttons
bat.addEventListener("click", () => Mychose("bat"));
ball.addEventListener("click", () => Mychose("ball"));
stump.addEventListener("click", () => Mychose("stump"));
let resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
  wins = losses = ties = 0;
  scoreEl.textContent = "Your Score : Win-0, Loss-0, Tie-0";
  comChEl.textContent = "";
  yourChEl.textContent = "";
  winEl.textContent = "";
});
