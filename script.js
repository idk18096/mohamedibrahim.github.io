// Smooth fade-in effect when scrolling
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

// Interactive Homelessness Stats (HUD data)
const ctx = document.getElementById("usChart").getContext("2d");
const coloradoCtx = document.getElementById("coloradoChart").getContext("2d");

// U.S. HUD Data — 2024
const usData = {
  labels: ["Families", "Individuals", "Veterans", "Youth", "Chronic"],
  datasets: [
    {
      label: "People (Thousands)",
      data: [183, 421, 33, 34, 127],
      backgroundColor: [
        "#00b4d8",
        "#0077b6",
        "#48cae4",
        "#90e0ef",
        "#caf0f8",
      ],
      borderWidth: 1,
      borderColor: "#fff",
      hoverOffset: 20,
    },
  ],
};

// Colorado Data — HUD PIT 2024
const coloradoData = {
  labels: ["Families", "Individuals", "Veterans", "Youth", "Chronic"],
  datasets: [
    {
      label: "People (Thousands)",
      data: [4.2, 7.9, 0.7, 1.3, 3.1],
      backgroundColor: [
        "#0077b6",
        "#00b4d8",
        "#90e0ef",
        "#48cae4",
        "#caf0f8",
      ],
      borderWidth: 1,
      borderColor: "#fff",
      hoverOffset: 20,
    },
  ],
};

// Chart Configurations
const commonOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: { color: "#fff" },
    },
    tooltip: {
      backgroundColor: "#1b263b",
      titleColor: "#fff",
      bodyColor: "#e0e1dd",
    },
  },
  animation: {
    duration: 2000,
    easing: "easeInOutCubic",
  },
};

new Chart(ctx, {
  type: "doughnut",
  data: usData,
  options: commonOptions,
});

new Chart(coloradoCtx, {
  type: "bar",
  data: coloradoData,
  options: {
    ...commonOptions,
    scales: {
      x: { ticks: { color: "#e0e1dd" } },
      y: { ticks: { color: "#e0e1dd" } },
    },
  },
});

// 3D Floating Background Animation
const bgCanvas = document.createElement("canvas");
bgCanvas.id = "bgCanvas";
document.body.prepend(bgCanvas);
const c = bgCanvas.getContext("2d");

bgCanvas.width = innerWidth;
bgCanvas.height = innerHeight;

const circles = [];
for (let i = 0; i < 70; i++) {
  circles.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  c.fillStyle = "rgba(0,0,0,0.2)";
  c.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

  circles.forEach((circle) => {
    c.beginPath();
    c.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    c.fillStyle = "#00b4d8";
    c.fill();
    circle.x += circle.dx;
    circle.y += circle.dy;

    if (circle.x < 0 || circle.x > bgCanvas.width) circle.dx *= -1;
    if (circle.y < 0 || circle.y > bgCanvas.height) circle.dy *= -1;
  });
}

animate();

// Resize listener
window.addEventListener("resize", () => {
  bgCanvas.width = innerWidth;
  bgCanvas.height = innerHeight;
});
