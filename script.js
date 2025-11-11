// === Chart.js setup ===
document.addEventListener("DOMContentLoaded", function() {
  const usCtx = document.getElementById("usChart");
  const coCtx = document.getElementById("coChart");

  // --- U.S. total homelessness (HUD 2024 data approximation)
  new Chart(usCtx, {
    type: "bar",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [{
        label: "People Experiencing Homelessness (U.S.)",
        data: [580466, 582462, 594826, 653104, 662104],
        backgroundColor: "#fcb04588",
        borderColor: "#fcb045",
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { color: "#eee" } },
        x: { ticks: { color: "#eee" } }
      },
      plugins: {
        legend: { labels: { color: "#eee" } }
      }
    }
  });

  // --- Colorado specific chart (2024)
  new Chart(coCtx, {
    type: "doughnut",
    data: {
      labels: ["Families", "Individuals", "Veterans", "Youth"],
      datasets: [{
        label: "Colorado Homeless Population (2024)",
        data: [4500, 6100, 900, 750],
        backgroundColor: ["#fcb045aa", "#fd1d1daa", "#833ab4aa", "#29abe2aa"],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: { color: "#eee" }
        }
      }
    }
  });

  // --- NEW: Homelessness Trends (U.S. vs Colorado)
  const ctxT = document.getElementById("trendChart");
  if (ctxT) {
    new Chart(ctxT, {
      type: "line",
      data: {
        labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
        datasets: [
          {
            label: "U.S. Homeless Population",
            data: [578424, 564708, 552830, 580466, 582462, 653104],
            borderColor: "rgba(127,179,213,1)",
            tension: 0.3,
            fill: false
          },
          {
            label: "Colorado Homeless Population",
            data: [16100, 14200, 14400, 16600, 17400, 18715],
            borderColor: "rgba(245,169,127,1)",
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: "#e6eef6" } },
          tooltip: { mode: "index", intersect: false }
        },
        scales: {
          x: { ticks: { color: "#98a0ab" } },
          y: { ticks: { color: "#98a0ab" } }
        }
      }
    });
  }
});


// === Smooth fade-ins on scroll ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach(sec => observer.observe(sec));


// === Scroll Fade-In for Reflection Section ===
document.addEventListener("scroll", () => {
  const fadeElems = document.querySelectorAll(".fade-in, .reflection-img");
  const triggerBottom = window.innerHeight * 0.85;

  fadeElems.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop < triggerBottom) {
      elem.style.opacity = "1";
      elem.style.transform = "translateY(0)";
    }
  });
});


// === 3D Tilt setup for all data cards ===
document.addEventListener("DOMContentLoaded", () => {
  const tiltEls = document.querySelectorAll("[data-tilt]");
  if (window.VanillaTilt) {
    VanillaTilt.init(tiltEls, {
      max: 14,
      speed: 400,
      glare: true,
      "max-glare": 0.12,
      scale: 1.02
    });
  }
});
