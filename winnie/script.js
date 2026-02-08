const bubbleLayer = document.querySelector("#home .bubble-layer");

if (bubbleLayer) {
  const createBubble = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    const size = Math.random() * 40 + 10;
    const duration = Math.random() * 10 + 10;
    const sway = Math.random() * 80 - 40;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.setProperty("--rise", `${duration}s`);
    bubble.style.setProperty("--sway", `${sway}px`);

    bubbleLayer.appendChild(bubble);

    bubble.addEventListener("animationend", () => {
      bubble.remove();
    });
  };

  setInterval(createBubble, 1200);
}
