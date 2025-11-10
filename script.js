// === Chart.js setup ===
document.addEventListener("DOMContentLoaded", function() {
  const usCtx = document.getElementById("usChart");
  const coCtx = document.getElementById("coChart");


  // U.S. total homelessness (HUD 2024 data approximation)
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


  // Colorado specific
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

