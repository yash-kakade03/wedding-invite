document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const bg = document.querySelector(".bg-image");
  const panels = document.querySelectorAll(".panel");
const isMobile = window.innerWidth <= 768;
const particleContainer = document.querySelector(".particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // random position
  particle.style.left = Math.random() * 100 + "vw";

  // random size
  let size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  // random duration
  let duration = Math.random() * 5 + 5;
  particle.style.animationDuration = duration + "s";

  particleContainer.appendChild(particle);

  // remove after animation
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

// generate particles continuously
setInterval(createParticle, 500);
  // 🔒 LOCK SCROLL INITIALLY
  document.body.style.overflow = "hidden";

  // 🔥 OPEN INTRO
  function openInvite() {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      document.body.style.overflow = "auto";
    }, 800);
  }

  if (intro) {
    intro.addEventListener("click", openInvite);
    intro.addEventListener("touchstart", openInvite);
  }

  // 🔥 PARALLAX + ANIMATION ENGINE
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // ✅ NORMALIZED PARALLAX (FIXED VERSION)
    let progress = scrollY / maxScroll;
    let maxMove = 450;
    let move = progress * maxMove;
let scale = isMobile ? 0.9 : 1;  // 👈 zoom OUT on mobile

    if (bg) {
      bg.style.transform = `translateY(-${move}px)`;
    }

    // ✅ PANEL ANIMATION
    panels.forEach(panel => {
      let rect = panel.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.6) {
        panel.classList.add("show");
      }
    });
  });
});