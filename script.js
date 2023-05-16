let color = "black";
let click = false;

const colorSquare = function () {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
};

const changeColor = function (choice) {
  color = choice;
};

const populateCanvas = function (size) {
  let canvas = document.getElementById("drawing__canvas");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((square) => square.remove());

  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    canvas.insertAdjacentElement("beforeend", square);
  }
};

populateCanvas(16);

const changeSize = function (input) {
  if (input >= 8 && input <= 64) {
    populateCanvas(input);
  } else {
    console.log("invalid input");
  }
};

const resetCanvas = function () {
  let canvas = document.getElementById("drawing__canvas");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
};

document.querySelector("#drawing__canvas").addEventListener("click", () => {
  click = !click;
});
