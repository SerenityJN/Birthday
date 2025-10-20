const btn = document.getElementById("btn");
const cake = document.getElementById("cake");
const letter = document.getElementById("letter");
const envelope = document.querySelector(".envelope");
const bg = document.getElementById("background");
const music = document.getElementById("bg-music"); 

let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().then(() => {
      console.log("Music started");
    }).catch(err => {
      console.log("Music blocked until user interaction:", err);
    });
    musicStarted = true;
  }
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

btn.addEventListener("click", () => {


  confettiRain();

  if (letter.classList.contains("hidden")) {
    cake.classList.add("hidden");
    letter.classList.remove("hidden");

    letter.style.marginTop = "40px";

    setTimeout(() => envelope.classList.add("open"), 200);

    btn.textContent = "Click for Confetti 🎉";
  } else {
    confettiRain();
  }
});

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


