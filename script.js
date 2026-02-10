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

// Add interactive hover effect to GIF images
const gifImages = document.querySelectorAll('.gif');
gifImages.forEach(gif => {
  gif.addEventListener('mouseenter', () => {
    gif.style.transform = 'scale(1.1) rotate(3deg)';
  });
  
  gif.addEventListener('mouseleave', () => {
    gif.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Add particle burst effect on button click
document.querySelectorAll('.btn a').forEach(button => {
  button.addEventListener('click', (e) => {
    // Create burst effect
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
      createParticle(x, y);
    }
  });
});

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.width = '10px';
  particle.style.height = '10px';
  particle.style.borderRadius = '50%';
  particle.style.background = '#ff6b6b';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '9999';
  particle.innerHTML = '❤️';
  particle.style.fontSize = '12px';
  
  document.body.appendChild(particle);
  
  const angle = Math.random() * Math.PI * 2;
  const velocity = 2 + Math.random() * 4;
  const vx = Math.cos(angle) * velocity;
  const vy = Math.sin(angle) * velocity;
  
  let opacity = 1;
  let currentX = x;
  let currentY = y;
  
  const animate = () => {
    currentX += vx;
    currentY += vy;
    opacity -= 0.02;
    
    particle.style.left = currentX + 'px';
    particle.style.top = currentY + 'px';
    particle.style.opacity = opacity;
    
    if (opacity > 0) {
      requestAnimationFrame(animate);
    } else {
      particle.remove();
    }
  };
  
  animate();
}

// Add smooth entrance animation
window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      container.style.transition = 'all 0.6s ease-out';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 100);
  }
});


