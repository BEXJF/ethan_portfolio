const projects = [
  {
    title: "Stock Trading RL Bot",
    description:
      "A reinforcement learning trading system using DQN, PPO, and A2C to model sequential decision-making in financial environments.",
    tech: ["Python", "Reinforcement Learning", "Stable-Baselines3"],
    github: "https://github.com/YOUR_USERNAME/trading-bot",
    live: "#"
  },
  {
    title: "University Decision Support System",
    description:
      "An interpretable machine learning system for matching students to universities based on cost, location, preferences, and value alignment.",
    tech: ["Python", "Scikit-learn", "Decision Trees"],
    github: "https://github.com/YOUR_USERNAME/university-ml",
    live: "#"
  },
  {
    title: "ESP32 Power-Safe OTA Update",
    description:
      "A real-time systems project implementing secure over-the-air updates with rollback support and failure handling on embedded hardware.",
    tech: ["C", "ESP32", "RTOS"],
    github: "https://github.com/YOUR_USERNAME/esp32-ota",
    live: "#"
  }
];

const projectContainer = document.getElementById("projects-container");

if (projectContainer) {
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project-card glass-card reveal delay-${index % 3}`;

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
  const triggerPoint = window.innerHeight - 90;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < triggerPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const dockLinks = document.querySelectorAll(".dock-link");

function updateActiveLinks() {
  let currentId = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });

  dockLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

window.addEventListener("scroll", updateActiveLinks);
window.addEventListener("load", updateActiveLinks);

const menuBtn = document.getElementById("menuBtn");
const topNav = document.getElementById("topNav");

if (menuBtn && topNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = topNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  topNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      topNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-shell");
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 18px 40px rgba(15, 23, 42, 0.12)";
  } else {
    header.style.boxShadow = "0 20px 60px rgba(15, 23, 42, 0.08)";
  }
});

console.log("Premium portfolio loaded.");