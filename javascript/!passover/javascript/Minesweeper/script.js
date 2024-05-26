let backGrid = [];
let hight = 9;
let width = 9;
let mines = 10;

function setSize(newWidth, newHight, newMines) {
  width = newWidth;
  hight = newHight;
  mines = newMines;
  resetGrid();
  generateGrid();
}

function customSize() {
  setSize(
    document.getElementById("customWidth").valueAsNumber,
    document.getElementById("customHight").valueAsNumber,
    document.getElementById("customMines").valueAsNumber
  );
}

function resetGrid() {
  backGrid = [];
  let parent = document.getElementById("board");
  while (parent.firstChild) parent.removeChild(parent.firstChild);
}

function reset() {
  resetGrid();
  generateGrid();
}

function generateGrid() {
  const parent = document.getElementById("board");
  parent.style.display = "grid";
  parent.style.gridTemplateRows = `repeat(${hight}, 24px)`;
  parent.style.gridTemplateColumns = `repeat(${width}, 24px)`;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < hight; j++) {
      const button = document.createElement("button");
      button.id = i + "_" + j;
      button.className = "cell";
      button.oncontextmenu = flag;
      button.onclick = revelCell;
      parent.appendChild(button);
    }
  }
  createBackGrid();
}

function createBackGrid() {
  for (let i = 0; i < width; i++) {
    backGrid.push([]);
    for (let j = 0; j < hight; j++) {
      backGrid[i].push(0);
    }
  }
  for (let i = 0; i < mines; i++) {
    let randomNumberX, randomNumberY;
    do {
      randomNumberX = Math.floor(Math.random() * width);
      randomNumberY = Math.floor(Math.random() * hight);
    } while (backGrid[randomNumberX][randomNumberY] == "M");
    backGrid[randomNumberX][randomNumberY] = "M";
  }
}

function showMines() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < hight; j++) {
      if (backGrid[i][j] == "M") {
        document.getElementById(i + "_" + j).innerText = "M";
        document.getElementById(i + "_" + j).disabled = true;
      }
    }
  }
}

function gameLost() {
  showMines();
  alert("You lost! Better luck next time.");
}

function gameWon() {
  showMines();
  alert("Congratulations! You won!");
}

function didWin() {
  let count = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < hight; j++) {
      if (!document.getElementById(i + "_" + j).disabled) count++;
    }
  }
  return count == mines;
}

function isBomb(Xindex, Yindex) {
  try {
    return backGrid[Xindex][Yindex] == "M";
  } catch {
    return false;
  }
}

function bombCount(Xindex, Yindex) {
  let count = 0;
  if (isBomb(Xindex + 1, Yindex)) count++;
  if (isBomb(Xindex - 1, Yindex)) count++;
  if (isBomb(Xindex, Yindex + 1)) count++;
  if (isBomb(Xindex, Yindex - 1)) count++;
  if (isBomb(Xindex + 1, Yindex + 1)) count++;
  if (isBomb(Xindex - 1, Yindex - 1)) count++;
  if (isBomb(Xindex + 1, Yindex - 1)) count++;
  if (isBomb(Xindex - 1, Yindex + 1)) count++;
  return count;
}

function revelCellRequrs(Xindex, Yindex) {
  const button = document.getElementById(Xindex + "_" + Yindex);
  if (button.innerText == "F" || button.disabled) return;

  if (backGrid[Xindex][Yindex] == "M") {
    gameLost();
    return;
  }

  const bombs = bombCount(Xindex, Yindex);
  backGrid[Xindex][Yindex] = bombs;

  if (bombs != 0) {
    button.innerText = bombs;
    if (bombs == 1) button.style.color = "blue";
    if (bombs == 2) button.style.color = "green";
    if (bombs == 3) button.style.color = "red";
  }

  button.disabled = true;
  button.style.backgroundColor = "#a9a9a9";

  if (bombs == 0) {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ];
    directions.forEach(([dx, dy]) => {
      const newX = Xindex + dx,
        newY = Yindex + dy;
      if (newX >= 0 && newX < width && newY >= 0 && newY < hight) {
        revelCellRequrs(newX, newY);
      }
    });
  }
}

function revelCell() {
  const newId = this.id.split("_");
  const Xindex = parseInt(newId[0]);
  const Yindex = parseInt(newId[1]);
  revelCellRequrs(Xindex, Yindex);
  if (didWin()) gameWon();
}

function flag() {
  const button = document.getElementById(this.id);
  if (button.innerText == "") button.innerText = "F";
  else if (!button.disabled) button.innerText = "";
}

generateGrid();
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
