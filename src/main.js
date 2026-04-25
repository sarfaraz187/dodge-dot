const SPEED_INTERVAL = 7; // seconds

function trackMouseMovement() {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById("XCoordinateVal").textContent = x;
    document.getElementById("YCoordinateVal").textContent = y;

    // Positioning the dot at the center of the mouse cursor.
    document.getElementById("dot").style.left = `${x - 25}px`;
    document.getElementById("dot").style.top = `${y - 25}px`;
  });
}

function createObjects() {
  shapes.forEach((shape) => {
    // Movement coordinates
    let dx = Math.random();
    let dy = Math.random();

    // Current Coordinates
    let xPos = shape.coordinates.x + dx;
    let yPos = shape.coordinates.y + dy;

    const shapeElement = document.createElement("div");
    shapeElement.style.position = "absolute";
    shapeElement.style.width = `${shape.sizes.width}px`;
    shapeElement.style.height = `${shape.sizes.height}px`;
    shapeElement.style.backgroundColor = shape.color;
    shapeElement.style.left = `${shape.coordinates.x}px`;
    shapeElement.style.top = `${shape.coordinates.y}px`;

    if (shape.borderRadius) {
      shapeElement.style.borderRadius = shape.borderRadius;
    }

    console.log("Shape Element:", shapeElement);
    document.getElementById("shapesContainer").appendChild(shapeElement);
    requestAnimationFrame(move);

    // Move objects
    function move() {
      if (xPos < 0 || xPos > window.innerWidth - shape.sizes.width) {
        dx = dx * -1;
      }

      if (yPos < 0 || yPos > window.innerHeight - shape.sizes.height) {
        dy = dy * -1;
      }

      shapeElement.style.left = xPos + "px";
      shapeElement.style.top = yPos + "px";
      console.log(`Shape: ${shape.name}, X: ${xPos}, Y: ${yPos}`);

      xPos = xPos + dx;
      yPos = yPos + dy;
      requestAnimationFrame(move);
    }
  });
}

trackMouseMovement();
// createObjects();
