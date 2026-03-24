// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===============================
// Reveal on Scroll Animation
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();


// ===============================
// Active Navbar Highlight
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);


// ===============================
// Sticky Header Shadow
// ===============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});


// ===============================
// Dynamic Projects Section
// ===============================
const projects = [
  {
    title: "Stock Trading RL Bot",
    description: "Built a reinforcement learning trading agent using DQN, PPO, and A2C with Stable-Baselines3.",
    tech: ["Python", "RL", "PyTorch"],
    github: "https://github.com/YOUR_USERNAME/trading-bot",
    demo: "#"
  },
  {
    title: "University Decision ML System",
    description: "Decision-support system using Decision Trees and Random Forest for university selection.",
    tech: ["Python", "Scikit-learn", "Data Analysis"],
    github: "https://github.com/YOUR_USERNAME/university-ml",
    demo: "#"
  },
  {
    title: "Real-Time OS Project (ESP32 OTA)",
    description: "Implemented secure OTA update system with rollback and failure detection on ESP32.",
    tech: ["C", "RTOS", "Embedded"],
    github: "https://github.com/YOUR_USERNAME/esp32-ota",
    demo: "#"
  }
];

const projectContainer = document.getElementById("projects-container");

if (projectContainer) {
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = `project-card reveal delay-${index % 3}`;

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="tech-stack">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>

      <div class="project-links">
        <a href="${project.github}" target="_blank">GitHub</a>
        ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank">Live</a>` : ""}
      </div>
    `;

    projectContainer.appendChild(card);
  });
}


// ===============================
// Console Signature (optional cool touch)
// ===============================
console.log("%cWelcome to Ethan's Portfolio 🚀", "color: #38bdf8; font-size: 16px; font-weight: bold;");