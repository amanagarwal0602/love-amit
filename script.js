const btn = document.getElementById("move-random");

if (btn) {
  btn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    btn.style.position = "absolute";
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
}
