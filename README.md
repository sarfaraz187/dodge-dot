# Dodge Dot

Dodge dot is a simple game developed using plain JavaScript. Your goal is to dodge the shapes that are moving randomly around the screen. Every second you avoid the obstacles your score goes up. Give it a try :)

### Instructions to run project

- In a new terminal run `git clone https://github.com/sarfaraz187/dodge-dot.git`
- Open the project directory and open index.html in the browser.
- Press space bar to start the game.

### Code Structure

- **index.html** - Responsible for all the elements that have been created
- **style.css** - A minimalistic styling for the pages and shapes
- **src/main.js** — Game loop using requestAnimationFrame, mouse input handling, collision detection, and difficulty scaling via setInterval
- **src/utils.js** — Reusable helpers: applyStyles for DOM shape creation, isCollide for collision detection, createMouseTracker for the live canvas graph.
- **src/shapes.js** - JS file that holds a set of 3 predefined shapes and colors.

### Future Improvements

- **Game over screen** — show final score and a restart button instead of just freezing
- **Difficulty indicator** — show the current level on screen so the player knows how hard it's getting.
- **High score** — store the best score in localStorage and display it.

### Challenges addressed

- Keeping all shapes within the window.
- Creating multiple shapes to start and move at different speed and directions.
- Keeping all shape movement loops in sync using a shared isGameOver flag.
- Ensuring xPos/yPos stayed consistent between creation and the animation loop.
