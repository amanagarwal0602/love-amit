const btn = document.getElementById("move-random");

if (btn) {
  // Function to move button randomly
  const moveButton = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const btnRect = btn.getBoundingClientRect();
    
    // Calculate safe movement range based on viewport size
    const maxMoveX = Math.min(viewportWidth * 0.3, 150);
    const maxMoveY = Math.min(viewportHeight * 0.3, 150);
    
    const x = Math.random() * maxMoveX * 2 - maxMoveX;
    const y = Math.random() * maxMoveY * 2 - maxMoveY;

    btn.style.position = "absolute";
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  // Desktop: mouseover event
  btn.addEventListener("mouseover", moveButton);
  
  // Mobile: touchstart event (for touch devices)
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent default touch behavior
    moveButton();
  });
}

