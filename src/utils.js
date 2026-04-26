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

function drawLine(axisHistory, maxValue, color) {
  const myCanvas = document.getElementById("myCanvas");
  const ctx = myCanvas.getContext("2d");

  ctx.beginPath();

  ctx.moveTo(0, (axisHistory[0] / maxValue) * myCanvas.height);
  for (let i = 0; i < axisHistory.length - 1; i++) {
    const canvasX = (i / axisHistory.length) * myCanvas.width;
    const canvasY = (axisHistory[i] / maxValue) * myCanvas.height;
    ctx.lineTo(canvasX, canvasY);
  }
  ctx.strokeStyle = color;
  ctx.stroke();
}
