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

const activityCards = document.querySelectorAll(".activity-card");

if (activityCards.length > 0 && "IntersectionObserver" in window) {
  const revealCards = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  activityCards.forEach((card) => revealCards.observe(card));
} else {
  activityCards.forEach((card) => card.classList.add("is-visible"));
}

const bubbleCursor = document.getElementById("bubble");

if (bubbleCursor) {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    bubbleCursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });
}
