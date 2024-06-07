console.log("Welcome to TIC TAC TOE");
let playerOne = prompt("Enter the first player name: ");
let playerTwo = prompt("Enter the second player name: ");
let player;
let music = new Audio("Assets/music.mp3");
let audioTurn = new Audio("Assets/ting.mp3");
let audioOff = new Audio("Assets/ting-.mp3");
let gameOver = new Audio("Assets/gameover.mp3");
let turn = "X";
let image = document.querySelector("img");
let boxes = document.getElementsByClassName("box");

document.getElementsByClassName("info")[0].innerText = "Turn for " + playerOne;
// -------------------------------Function to change the turn---------------------------------
const changeTurn = () => {
  if (turn === "O") {
    player = playerOne;
  } else {
    player = playerTwo;
  }
  return turn === "X" ? "O" : "X";
};

// -------------------------------Function to check a winner------------------------------------
const checkWin = () => {
  let boxText = document.getElementsByClassName("box-text");
  const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  win.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      if (boxText[e[0]].innerText === "X") {
        player = playerOne;
      } else {
        player = playerTwo;
      }
      document.querySelector("h2").innerText = player + " win !!";
      image.style.width = "15vw";

      document.querySelector(".over-text").innerText =
        "Game Over !! Restart to play again..";
      gameOver.play();
      turn = "";
    }
  });
};

// ----------------------------------------------------Game Logic---------------------------------
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    document.getElementsByClassName("info")[0].innerText =
      "Turn for " + playerOne;
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      document.getElementsByClassName("info")[0].innerText =
        "Turn for " + player;
    }
  });
});

// -----------------------------------------Reset Function----------------------------------------
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".box-text");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
    image.style.width = "0";
    document.querySelector("h2").innerText = "";
    turn = "X";
    player = playerOne;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
  });
});
