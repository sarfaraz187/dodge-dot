function trackMouseMovement() {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById("XCoordinateVal").textContent = x;
    document.getElementById("YCoordinateVal").textContent = y;

    document.getElementById("dot").style.left = `${x}px`;
    document.getElementById("dot").style.top = `${y}px`;
  });
}

trackMouseMovement();
