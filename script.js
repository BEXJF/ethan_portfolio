const projects = [
  {
    title: "Stock Trading RL Bot",
    description:
      "A reinforcement learning trading project using algorithms such as DQN, PPO, and A2C for decision-making in market environments.",
    tech: ["Python", "Reinforcement Learning", "Stable-Baselines3"],
    github: "https://github.com/YOUR_USERNAME/trading-bot",
    live: "#"
  },
  {
    title: "University Decision Support System",
    description:
      "An interpretable ML-based recommendation system that helps students choose universities based on cost, location, and preferences.",
    tech: ["Python", "Scikit-learn", "Decision Trees"],
    github: "https://github.com/YOUR_USERNAME/university-ml",
    live: "#"
  },
  {
    title: "ESP32 Power-Safe OTA Update",
    description:
      "A real-time systems project focused on secure over-the-air updates with rollback and failure detection on embedded hardware.",
    tech: ["C", "ESP32", "RTOS"],
    github: "https://github.com/YOUR_USERNAME/esp32-ota",
    live: "#"
  }
];

const projectContainer = document.getElementById("projects-container");

if (projectContainer) {
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project-card reveal delay-${index % 3}`;

    const liveLink =
      project.live && project.live !== "#"
        ? `<a href="${project.live}" target="_blank" rel="noreferrer">Live Demo</a>`
        : "";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.tech.map((item) => `<span>${item}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
        ${liveLink}
      </div>
    `;

    projectContainer.appendChild(card);
  });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight - 80;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < trigger) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const navLinks = document.querySelectorAll(".nav-link");
const bottomLinks = document.querySelectorAll(".bottom-link");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });

  bottomLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

if (menuToggle && topNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  topNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

console.log("Portfolio loaded successfully.");