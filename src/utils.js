// function spawnShape() {
//   let index = Math.floor(Math.random() * shapes.length);

//   console.log("Spawning shape:", shapes, index);

//   console.log(Math.random() * window.innerWidth, Math.random() * window.innerHeight);

//   const shapeElement = document.createElement("div");
//   shapeElement.style.position = "absolute";
//   shapeElement.style.width = `${shapes[index].sizes.width}px`;
//   shapeElement.style.height = `${shape[index].sizes.height}px`;
//   shapeElement.style.backgroundColor = shapes[index].color;
//   shapeElement.style.left = `${Math.random() * window.innerWidth}px`;
//   shapeElement.style.top = `${Math.random() * window.innerHeight}px`;

//   document.getElementById("shapesContainer").appendChild(shapeElement);
// }

// spawnShape();

function timeTracker() {
  let score = 0;
  let timerInterval = setInterval(() => {
    score += 1;
    document.getElementById("timerVal").textContent = score;
  }, 1000);
}
