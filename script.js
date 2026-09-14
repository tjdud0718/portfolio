const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const dot = document.querySelector(".cursor-dot");
window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.body.style.cursor = "none";
  });
  card.addEventListener("mouseleave", () => {
    document.body.style.cursor = "";
  });
});
