let size = 8;
hight = parseInt(size ** (1 / 2));
width = parseInt(size / hight);
count = 0;
imageFace = [];
const imageBack = "img/back card.jpg";
for (let i = 0; i < size / 2; i++) {
  imageFace.push("img/img" + (i + 1) + ".jpg");
  imageFace.push("img/img" + (i + 1) + ".jpg");
}
shuffle(imageFace);
gridContainer = document.getElementById("grid-container");
gridContainer.style.setProperty("--grid-cols", width);
gridContainer = document.querySelector(".grid");
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
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
// document.addEventListener("DOMContentLoaded", function () {
//   const gridContainer = document.getElementById("grid-container");
//   gridContainer.style.setProperty("--grid-cols", width);

//   // Duplicate image sources to have each image appear twice
//   const duplicatedImageSources = imageSources.concat(imageSources);

//   // Shuffle the image sources array
//   duplicatedImageSources.sort(() => Math.random() - 0.5);

//   // Create grid items and append images to them
//   duplicatedImageSources.forEach((imageSource) => {
//     const gridItem = document.createElement("div");
//     gridItem.classList.add("grid-item");

//     const image = document.createElement("img");
//     image.style.width = "205px"; // Set the width to 50% of its original size
//     image.style.height = "317px";
//     image.id = count;
//     image.src = "img/" + imageSource;
//     image.alt = "Image";
//     image.classList.add("grid-image");
//     image.onclick = revelImg;

//     gridItem.appendChild(image);
//     gridContainer.appendChild(gridItem);
//     count++;
//   });
// });
firstDraw = NaN;
secondDraw = NaN;
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
      document.getElementById(firstDraw).classList.add("unclickable");
      document.getElementById(secondDraw).classList.add("unclickable");
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
