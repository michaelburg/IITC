firstDraw = NaN;
secondDraw = NaN;
let size = 16;
hight = parseInt(size ** (1 / 2));
width = parseInt(size / hight);
count = 0;
imageFace = [];
const imageBack = "img/back card.jpg";
shuffle(imageFace);
createGrid();
createBackGrid();
function createBackGrid() {
  imageFace = [];
  for (let i = 0; i < size / 2; i++) {
    imageFace.push("img/img" + (i + 1) + ".png");
    imageFace.push("img/img" + (i + 1) + ".png");
  }
  shuffle(imageFace);
}
function createGrid() {
  gridContainer = document.getElementById("grid-container");
  gridContainer.style.setProperty("--grid-cols", width);
  for (let i = 0; i < size; i++) {
    const image = document.createElement("img");
    image.src = imageBack;
    image.style.width = "205px"; // Set the width to 50% of its original size
    image.style.height = "317px";
    image.id = i;
    image.alt = "Image";
    image.classList.add("grid-image");
    image.onclick = revelImg;
    gridContainer.appendChild(image);
  }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
function revelImg() {
  if (isNaN(firstDraw)) {
    image = document.getElementById(this.id);
    image.src = imageFace[this.id];
    firstDraw = this.id;
  } else if (isNaN(secondDraw)) {
    if (firstDraw == this.id) return;
    image = document.getElementById(this.id);
    image.src = imageFace[this.id];
    secondDraw = this.id;
    if (imageFace[firstDraw] == imageFace[secondDraw]) {
      document.getElementById(firstDraw).classList.add("disabled-image");
      document.getElementById(secondDraw).classList.add("disabled-image");
      firstDraw = NaN;
      secondDraw = NaN;
      count += 2;
    }
  } else {
    image = document.getElementById(firstDraw);
    image.src = imageBack;
    firstDraw = NaN;
    image = document.getElementById(secondDraw);
    image.src = imageBack;
    secondDraw = NaN;
    image = document.getElementById(this.id);
    image.src = imageFace[this.id];
    firstDraw = this.id;
  }
  if (count == size) alert("yay");
}
function reset() {
  firstDraw = NaN;
  secondDraw = NaN;
  count = 0;
  let parent = document.getElementById("grid-container");
  while (parent.firstChild) parent.removeChild(parent.firstChild);
  shuffle(imageFace);
  createGrid();
  createBackGrid();
}
function submit() {
  size = parseInt(document.getElementById("userSize").valueAsNumber);
  if (size % 2 != 0) {
    size--;
  }
  if (size < 2 || size > 108) return;

  hight = parseInt(size ** (1 / 2));
  width = parseInt(size / hight);
  reset();
}
