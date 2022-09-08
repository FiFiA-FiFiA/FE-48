const cells = document.querySelectorAll("[cell]");
const inner__text__wrapper = document.querySelector("[inner__text__wrapper]");
const inner__start__text = document.querySelector("[inner__start__text]");
const inner__text = document.querySelector("[inner__text]");
const btn__restart = document.querySelector("[btn__restart]");

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let draw = "draw 🤝";

const Winning__combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

inner__start__text.innerText = `Start with: ${player}`;

function wining(index) {
  Winning__combination.forEach(combination => {
    let check__won = combination.every(i => cells[i].innerText == player);
    board[index] = player;
    if (check__won) {
      masseges(combination);
    }
  });
}

function masseges(combination) {
  combination.forEach(index => {
    cells[index].classList.add('win');
    inner__text__wrapper.classList.add('active');
    inner__text.innerText = `won player: ${player}`;
  })
}

function restart__game() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.classList.remove('win', 'clicked');
    cell.innerText = "";
  })
  inner__start__text.innerText = `Start with: ${player}`;
  inner__text__wrapper.classList.remove('active');
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (cell.textContent.trim() != "") return
    cell.classList.add('clicked');
    cell.innerText = player;

    wining(index);

    if (player == "X") {
      player = "O";
      inner__start__text.innerText = `Now: ${player}`;
    } else {
      player = "X";
      inner__start__text.innerText = `Now: ${player}`;
    }

    if (!board.includes("") && !cell.classList.contains("win")) {
      inner__text__wrapper.classList.add('active');
      inner__text.innerText = draw;
    }
  });
});

btn__restart.addEventListener('click', restart__game);