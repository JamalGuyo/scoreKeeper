//
let gameOver = false;
let playerOneValue = 0;
let playerTwoValue = 0;
let maxPlay = 10;
//
let p1Display = document.querySelector("#one");
let p2Display = document.querySelector("#two");
let maxPlayDisplay = document.querySelector("#fromInput");
//
let inputForm = document.querySelector("#inputForm");
let submitBtn = document.querySelector("#submitBtn");
//
let player1 = document.querySelector("#playerOne");
let player2 = document.querySelector("#playerTwo");
let reset = document.querySelector("#reset");
//
submitBtn.addEventListener("click", () => {
  maxPlay = inputForm.value;
  maxPlayDisplay.textContent = maxPlay;
});
player1.addEventListener("click", () => {
  playerOneValue++;
  p1Display.textContent = playerOneValue;
});
player2.addEventListener("click", () => {
  playerTwoValue++;
  p2Display.textContent = playerTwoValue;
});
reset.addEventListener("click", () => {
  playerOneValue = 0;
  playerTwoValue = 0;
  maxPlay = 0;
  p1Display.textContent = playerOneValue;
  p2Display.textContent = playerTwoValue;
  maxPlayDisplay.textContent = maxPlay;
  inputForm.value = 0;
});
