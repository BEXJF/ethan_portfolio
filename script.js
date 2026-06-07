const navbar     = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu    = document.getElementById("navMenu");
const backToTop  = document.getElementById("backToTop");
const revealEls  = document.querySelectorAll(".reveal");

// ── Navbar + back-to-top on scroll ──────────────────────────
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  backToTop.classList.toggle("show", window.scrollY > 500);
});

// ── Mobile menu ──────────────────────────────────────────────
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("active"), i * 60);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => revealObserver.observe(el));

// ── Back to top ──────────────────────────────────────────────
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach(s => sectionObserver.observe(s));

// ── Footer year ───────────────────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Site search ───────────────────────────────────────────────
const searchInput   = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const searchIndex = [
  { title: "About",      sub: "Bio, Education, Skills",          href: "#about"      },
  { title: "Experience", sub: "Work & Teaching history",         href: "#experience" },
  { title: "Projects",   sub: "ML, systems, software projects",  href: "#projects"   },
  { title: "Courses",    sub: "Graduate coursework at uOttawa",  href: "#courses"    },
  { title: "Contact",    sub: "Email, LinkedIn, GitHub",         href: "#contact"    },
  ...Array.from(document.querySelectorAll(".proj-card h3")).map(el => ({
    title: el.textContent.trim(), sub: "Project", href: "#projects"
  })),
  ...Array.from(document.querySelectorAll(".exp-card h3")).map(el => ({
    title: el.textContent.trim(), sub: "Experience", href: "#experience"
  })),
  ...Array.from(document.querySelectorAll(".course-card h3")).map(el => ({
    title: el.textContent.trim(), sub: "Course", href: "#courses"
  })),
];

function renderResults(query) {
  const q = query.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (!q) { searchResults.classList.remove("visible"); return; }

  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q)
  ).slice(0, 6);

  if (!matches.length) {
    searchResults.innerHTML = `<li class="search-empty">No results for "${query}"</li>`;
  } else {
    matches.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${item.href}"><strong>${item.title}</strong><small>${item.sub}</small></a>`;
      li.querySelector("a").addEventListener("click", () => {
        searchResults.classList.remove("visible");
        searchInput.value = "";
      });
      searchResults.appendChild(li);
    });
  }
  searchResults.classList.add("visible");
}

searchInput.addEventListener("input", e => renderResults(e.target.value));
searchInput.addEventListener("focus",  e => renderResults(e.target.value));

document.addEventListener("click", e => {
  if (!e.target.closest("#navSearch")) searchResults.classList.remove("visible");
});

// ── Scroll hint click ─────────────────────────────────────────
document.querySelector(".scroll-hint")?.addEventListener("click", () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
});
