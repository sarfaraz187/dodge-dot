const SPEED_INTERVAL = 7; // seconds
const NUMBER_OF_SHAPES = 20;
let isKeyPressed = false;
let score = 0;

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (!isKeyPressed) {
      timeTracker();
      isKeyPressed = true;

      createObjects();
    }
  }
};

trackMouseMovement();

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
  for (let i = 0; i < shapes.length + NUMBER_OF_SHAPES; i++) {
    const shapeElement = document.createElement("div");
    let index = Math.floor(Math.random() * shapes.length); // Random shape index

    // Current shape object
    let shape = shapes[index];

    // Movement coordinates
    let dx = Math.random();
    let dy = Math.random();

    // Current Coordinates
    let xPos = Math.random() * window.innerWidth;
    let yPos = Math.random() * window.innerHeight;

    const width = Math.floor(Math.random() * 70) + 10;
    const height = Math.floor(Math.random() * 150) + 10;

    console.log(width, height);
    applyStyles(shapeElement, shape, width, height);
    requestAnimationFrame(move);

    // Move objects
    function move() {
      if (xPos < 0 || xPos > window.innerWidth - width) {
        dx = dx * -1;
      }

      if (yPos < 0 || yPos > window.innerHeight - height) {
        dy = dy * -1;
      }

      shapeElement.style.left = xPos + "px";
      shapeElement.style.top = yPos + "px";
      // console.log(`Shape: ${shape.name}, X: ${xPos}, Y: ${yPos}`);

      xPos = xPos + dx;
      yPos = yPos + dy;
      requestAnimationFrame(move);
    }
  }
}
