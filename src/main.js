// Game configuration constants
const NUMBER_OF_SHAPES = 15;
const DIFFICULTY_INTERVAL = 7000; // milliseconds

// Event and game tracking variables
let isSpaceBarPressed = false;
let score = 0;
let isGameOver = false;
let difficultyLevel = 1;

let xHistory = [];
let yHistory = [];

// Interval with increasing difficulty level
const levelInterval = setInterval(() => {
  if (isSpaceBarPressed && !isGameOver) {
    difficultyLevel += 1;
  }
}, DIFFICULTY_INTERVAL);

// Timer interval to track score based on time survived
let timerInterval = setInterval(() => {
  if (isSpaceBarPressed) {
    score += 1;
    document.getElementById("scoreVal").textContent = score;
  }
}, 1000);

// Event listener for space bar to start the game
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (!isSpaceBarPressed) {
      isSpaceBarPressed = true;
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

    xHistory.push(x);
    yHistory.push(y);

    if (xHistory.length > 100) xHistory.shift();
    if (yHistory.length > 100) yHistory.shift();

    // Positioning the dot at the center of the mouse cursor.
    document.getElementById("dot").style.left = `${x - 25}px`;
    document.getElementById("dot").style.top = `${y - 25}px`;

    if (!isGameOver) mouseTracker();
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

    applyStyles(htmlElement, shape, width, height, xPos, yPos);
    requestAnimationFrame(move);

    // Move objects
    function move() {
      // Check if the game is over or not
      if (isGameOver) return;

      // Reverse direction if the shape hits the window boundaries
      if (xPos < 0 || xPos > window.innerWidth - width) {
        dx = dx * -1;
      }

      if (yPos < 0 || yPos > window.innerHeight - height) {
        dy = dy * -1;
      }

      htmlElement.style.left = xPos + "px";
      htmlElement.style.top = yPos + "px";

      xPos = xPos + dx * difficultyLevel;
      yPos = yPos + dy * difficultyLevel;

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
    clearInterval(levelInterval);
  }
}

function mouseTracker() {
  const myCanvas = document.getElementById("myCanvas");
  const ctx = myCanvas.getContext("2d");

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  drawLine(xHistory, window.innerWidth, "red");
  drawLine(yHistory, window.innerHeight, "blue");
}
