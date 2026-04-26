function isCollide(a, b) {
  return !(a.y + a.height < b.y || a.y > b.y + b.height || a.x + a.width < b.x || a.x > b.x + b.width);
}

function applyStyles(htmlElement, shape, width, height, xPos, yPos) {
  htmlElement.style.position = "absolute";
  htmlElement.style.width = `${width}px`;
  htmlElement.style.height = `${height}px`;
  htmlElement.style.backgroundColor = shape.color;
  htmlElement.style.left = `${xPos}px`;
  htmlElement.style.top = `${yPos}px`;

  if (shape.borderRadius) {
    htmlElement.style.borderRadius = shape.borderRadius;
  }

  document.getElementById("shapesContainer").appendChild(htmlElement);
}

function mouseTracker() {
  const myCanvas = document.getElementById("myCanvas");
  const ctx = myCanvas.getContext("2d");

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();

  ctx.moveTo(0, (xHistory[0] / window.innerWidth) * myCanvas.height);
  for (let i = 0; i < xHistory.length - 1; i++) {
    const canvasX = (i / xHistory.length) * myCanvas.width;
    const canvasY = (xHistory[i] / window.innerWidth) * myCanvas.height;
    ctx.lineTo(canvasX, canvasY);
  }
  ctx.strokeStyle = "red";
  ctx.stroke();
}
