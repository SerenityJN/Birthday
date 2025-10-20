const btn = document.getElementById("btn");
const cake = document.getElementById("cake");
const letter = document.getElementById("letter");
const envelope = document.querySelector(".envelope");
const bg = document.getElementById("background");

// 🎂 Cake → Letter animation
btn.addEventListener("click", () => {
  confettiRain();
   if (letter.classList.contains("hidden")) {
    cake.classList.add("hidden");
    letter.classList.remove("hidden");

    // Add top margin when letter appears
    letter.style.marginTop = "40px";

    // Animate the envelope opening
    setTimeout(() => envelope.classList.add("open"), 200);

    // Change button text
    btn.textContent = "Click for Confetti 🎉";
  } 
  // If letter already visible → trigger confetti
  else {
    confettiRain();
  }
});


// 🎉 Confetti animation when letter opens
function confettiRain() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#ba68c8", "#e1bee7", "#f3e5f5"]
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#ba68c8", "#e1bee7", "#f3e5f5"]
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// 💜 Floating hearts + tulips + confetti background
function createFallingItem() {
  const item = document.createElement("div");
  const type = Math.floor(Math.random() * 3);

  if (type === 0) {
    item.classList.add("heart");
    item.innerHTML = "💜";
  } else if (type === 1) {
    item.classList.add("tulip");
    item.innerHTML = "🌷";
  } else {
    item.classList.add("confetti");
  }

  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = Math.random() * 4 + 5 + "s";
  bg.appendChild(item);

  setTimeout(() => item.remove(), 9000);
}

setInterval(createFallingItem, 400);
