const SPEED_INTERVAL = 7; // seconds
const NUMBER_OF_SHAPES = 25;
let isKeyPressed = false;
let score = 0;
let isGameOver = false;

let timerInterval = setInterval(() => {
  if (isKeyPressed) {
    score += 1;
    document.getElementById("timerVal").textContent = score;
  }
}, 1000);

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (!isKeyPressed) {
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
  for (let i = 0; i < NUMBER_OF_SHAPES; i++) {
    const htmlElement = document.createElement("div");
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

    // console.log(width, height);
    applyStyles(htmlElement, shape, width, height, xPos, yPos);
    requestAnimationFrame(move);

    // Move objects
    function move() {
      // Check if the game is over or not
      if (isGameOver) return;

      // move shape to its new position
      if (xPos < 0 || xPos > window.innerWidth - width) dx = dx * -1;
      if (yPos < 0 || yPos > window.innerHeight - height) dy = dy * -1;

      htmlElement.style.left = xPos + "px";
      htmlElement.style.top = yPos + "px";
      // console.log(`Shape: ${shape.name}, X: ${xPos}, Y: ${yPos}`);

      xPos = xPos + dx;
      yPos = yPos + dy;

      checkCollision(htmlElement);
      requestAnimationFrame(move);
    }
  }
}

function checkCollision(htmlElement) {
  const hasCollision = isCollide(document.getElementById("dot").getBoundingClientRect(), htmlElement.getBoundingClientRect());

  if (hasCollision) {
    isGameOver = true;
    clearInterval(timerInterval);
  }
}
