const projects = [
  {
    icon: "🧠",
    title: "Neural Network Implementation & Performance Analysis",
    description:
      "Built a feedforward neural network in pure JAX using grad and jit, trained it on MNIST with remote HPC, and compared performance against an equivalent PyTorch implementation.",
    tech: ["JAX", "PyTorch", "MNIST", "HPC"],
    github: "https://github.com/yourusername/project1",
    demo: "#"
  },
  {
    icon: "📈",
    title: "Reinforcement Learning Stock Trading Agent",
    description:
      "Developed a buy/sell/hold trading agent using A2C, A3C, DQN, and PPO in the AnyTrading environment, and explored exploration strategies including epsilon-greedy and Boltzmann methods.",
    tech: ["Python", "RL", "DQN", "PPO", "AnyTrading"],
    github: "https://github.com/yourusername/project2",
    demo: "#"
  },
  {
    icon: "⚡",
    title: "Simulated Automated External Defibrillator in C++",
    description:
      "Designed and implemented an AED software simulation in C++ and Qt on Linux, covering self-test, rhythm analysis, shock delivery, monitoring, traceability, and multi-level testing.",
    tech: ["C++", "Qt", "Linux", "SDLC", "Testing"],
    github: "https://github.com/yourusername/project3",
    demo: "#"
  },
  {
    icon: "📱",
    title: "Fire OS Testing and Automation Work",
    description:
      "Contributed to OTA, FSST, and MSQ testing, Android system validation, automation workflows, and debugging for unreleased Fire OS features during industry testing work.",
    tech: ["Python", "Linux", "JIRA", "TestRail", "AWS"],
    github: "https://github.com/yourusername/project4",
    demo: "#"
  },
  {
    icon: "🧪",
    title: "Software Testing & Systems Validation",
    description:
      "Worked on system-level testing, low-level debugging, test case development, and technical reporting for reliable software delivery in practical engineering settings.",
    tech: ["System Testing", "Automation", "Debugging", "QA"],
    github: "https://github.com/yourusername/project5",
    demo: "#"
  },
  {
    icon: "💻",
    title: "Personal Portfolio Website",
    description:
      "Designed and deployed a modern personal portfolio site with GitHub Pages to showcase projects, technical background, and software engineering interests.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/yourusername/ethan_portfolio",
    demo: "#home"
  }
];

const projectList = document.getElementById("project-list");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

function renderProjects() {
  if (!projectList) return;

  projectList.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";

    card.innerHTML = `
      <div class="project-top">
        <div class="project-icon">${project.icon}</div>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="tech-list">
        ${project.tech.map((item) => `<span class="tech-badge">${item}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank">GitHub ↗</a>
        <a href="${project.demo}" target="_blank">More ↗</a>
      </div>
    `;

    projectList.appendChild(card);
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
}

function setupMobileMenu() {
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

renderProjects();
revealOnScroll();
setupMobileMenu();
updateActiveNav();

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);