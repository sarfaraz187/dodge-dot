function timeTracker() {
  let timerInterval = setInterval(() => {
    score += 1;
    document.getElementById("timerVal").textContent = score;
  }, 1000);
}

function applyStyles(shapeElement, shape, width, height) {
  shapeElement.style.position = "absolute";
  shapeElement.style.width = `${width}px`;
  shapeElement.style.height = `${height}px`;
  shapeElement.style.backgroundColor = shape.color;
  shapeElement.style.top = `${Math.random() * window.innerHeight}px`;
  shapeElement.style.left = `${Math.random() * window.innerWidth}px`;

  if (shape.borderRadius) {
    shapeElement.style.borderRadius = shape.borderRadius;
  }

  // console.log("Shape Element:", shapeElement);
  document.getElementById("shapesContainer").appendChild(shapeElement);
}
