//
let gameOver = false;
let playerOneValue = 0;
let playerTwoValue = 0;
var maxPlay = 0;
//
let p1Display = document.querySelector("#one");
let p2Display = document.querySelector("#two");
let maxPlayDisplay = document.querySelector("#fromInput");
//
let inputForm = document.querySelector("#inputForm");
//
let player1 = document.querySelector("#playerOne");
let player2 = document.querySelector("#playerTwo");
let reset = document.querySelector("#reset");
//
player1.addEventListener("click", () => {
  if (!gameOver) {
    playerOneValue++;
    if (playerOneValue === maxPlay) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = playerOneValue;
  }
});
player2.addEventListener("click", () => {
  if (!gameOver) {
    playerTwoValue++;
    if (playerTwoValue === maxPlay) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = playerTwoValue;
  }
});
reset.addEventListener("click", () => {
  playerOneValue = 0;
  playerTwoValue = 0;
  maxPlay = 0;
  gameOver = false;
  p1Display.textContent = playerOneValue;
  p2Display.textContent = playerTwoValue;
  maxPlayDisplay.textContent = maxPlay;
  inputForm.value = null;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
});

inputForm.addEventListener("change", () => {
  maxPlayDisplay.textContent = inputForm.value;
  maxPlay = parseInt(inputForm.value);
});
