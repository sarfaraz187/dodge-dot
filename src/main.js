function trackMouseMovement() {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById("XCoordinateVal").textContent = x;
    document.getElementById("YCoordinateVal").textContent = y;
  });
}

trackMouseMovement();
