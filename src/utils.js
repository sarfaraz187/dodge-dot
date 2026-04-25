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

  // console.log("Shape Element:", htmlElement);
  document.getElementById("shapesContainer").appendChild(htmlElement);
}
