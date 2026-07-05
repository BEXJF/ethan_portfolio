const navbar     = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu    = document.getElementById("navMenu");
const backToTop  = document.getElementById("backToTop");
const revealEls  = document.querySelectorAll(".reveal");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const anonymousNoteBtn = document.getElementById("anonymousNoteBtn");
const anonymousNoteModal = document.getElementById("anonymousNoteModal");
const anonymousNoteForm = document.getElementById("anonymousNoteForm");
const anonymousNoteStatus = document.getElementById("anonymousNoteStatus");
const anonymousMessage = document.getElementById("anonymousMessage");
const anonymousNoteSubmit = document.getElementById("anonymousNoteSubmit");

// ── Light / dark mode ────────────────────────────────────────
function setTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);

  if (themeToggle) {
    const isDark = nextTheme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
  }
}

setTheme(document.documentElement.dataset.theme || "light");

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Language toggle
const translations = {
  en: {
    title: "Ethan Fan - Software & AI Engineer",
    searchPlaceholder: "Search...",
    searchLabel: "Search site",
    languageButton: "中文",
    languageLabel: "Switch to Chinese",
    nav: ["About", "Experience", "Projects", "Courses", "Contact"],
    text: {
      ".badge": "Open to co-op opportunities",
      ".hero-title": "Hi, I'm<br><span class=\"accent-text\">Ethan Fan.</span>",
      ".hero-role": "Agentic AI · Deep Learning · Software Engineering",
      ".hero-desc": "Master of Engineering in ECE at the University of Ottawa. I build agentic AI systems, machine learning pipelines, and software tools that are reliable, well-tested, and production-ready.",
      ".hero-btns .btn-primary": "View Projects",
      ".hero-btns a.btn-outline": "Get in Touch",
      "#anonymousNoteBtn": "Leave an Anonymous Note",
      ".hero-meta .meta-item:nth-child(1) .meta-label": "Degree",
      ".hero-meta .meta-item:nth-child(1) .meta-value": "M.Eng ECE · uOttawa",
      ".hero-meta .meta-item:nth-child(2) .meta-label": "Focus",
      ".hero-meta .meta-item:nth-child(2) .meta-value": "Agentic AI · Deep Learning · RL",
      ".hero-meta .meta-item:nth-child(3) .meta-label": "Status",
      ".hero-meta .meta-item:nth-child(3) .meta-value": "● Open to opportunities",
      ".scroll-label": "Scroll down",
      "#about .section-tag": "About",
      "#about .section-title": "Building AI that works.",
      ".about-bio p:nth-child(1)": "CS grad turned ML engineer. I'm pursuing an M.Eng in ECE at uOttawa, building agentic AI systems, ML pipelines, and production software - anything that turns research into real outcomes.",
      ".about-bio p:nth-child(2)": "I thrive at the intersection of systems thinking and deep learning: from low-level QNX RTOS to multi-tenant AI governance platforms.",
      ".about-right .card:nth-child(1) h3": "Education",
      ".about-right .card:nth-child(2) h3": "Skills",
      ".skill-group:nth-child(1) .skill-cat": "Languages",
      ".skill-group:nth-child(2) .skill-cat": "AI / ML",
      ".skill-group:nth-child(3) .skill-cat": "Tools",
      "#experience .section-tag": "Experience",
      "#experience .section-title": "Work & teaching.",
      ".exp-card:nth-child(1) .tag": "Industry",
      ".exp-card:nth-child(1) .exp-period": "Jun - Sept 2024",
      ".exp-card:nth-child(1) h3": "Test Engineer",
      ".exp-card:nth-child(1) .exp-company": "Neusoft (Amazon Vendor) · Dalian, China",
      ".exp-card:nth-child(1) p": "OTA and system-level testing (FSST, MSQ) for Amazon Fire OS TV. Built Python automation pipelines in Linux; used JIRA, TestRail, AWS KATS, and DOTS to manage test cycles and identify bottlenecks. Performed low-level Android testing including bootloader modification. Presented findings to Amazon developers and QA.",
      ".exp-card:nth-child(2) .tag": "Teaching",
      ".exp-card:nth-child(2) .exp-period": "Jan 2026 - Present",
      ".exp-card:nth-child(2) h3": "Teaching Assistant - Real-Time Operating Systems (CEG4166)",
      ".exp-card:nth-child(2) p": "Labs, grading, and feedback covering concurrency, scheduling, synchronization, and fault-tolerant design on QNX.",
      ".exp-card:nth-child(3) .tag": "Teaching",
      ".exp-card:nth-child(3) .exp-period": "Sept - Dec 2025",
      ".exp-card:nth-child(3) h3": "Teaching Assistant - Intro to Software Engineering (SEG2105)",
      ".exp-card:nth-child(3) p": "Java, OOP, UML, Android, SQLite, and software testing. Weekly office hours, grading, and coordinating with the instructor and fellow TAs.",
      ".exp-card:nth-child(4) .tag": "Teaching",
      ".exp-card:nth-child(4) .exp-period": "2021 · 2023",
      ".exp-card:nth-child(4) h3": "Teaching Assistant - Discrete Structures I (COMP1805)",
      ".exp-card:nth-child(4) p": "Logic, set theory, algorithm complexity, proof, and graph theory. Graded 600+ assignments and exams; weekly office hours.",
      "#projects .section-tag": "Projects",
      "#projects .section-title": "Selected work.",
      "#projects .section-desc": "Technical projects in ML, systems, and software engineering.",
      ".proj-card:nth-child(1) .tag": "Agentic AI · Sponsored by Kinaxis",
      ".proj-card:nth-child(1) h3": "Enterprise Agentic AI Governance Platform",
      ".proj-card:nth-child(1) p": "Multi-tenant AI agent platform with policy enforcement, model routing, tenant isolation, and audit logging - built for enterprise-scale governance.",
      ".proj-card:nth-child(2) .tag": "ML Systems",
      ".proj-card:nth-child(2) h3": "Neural Network Analysis - JAX vs PyTorch",
      ".proj-card:nth-child(2) p": "Built and benchmarked JAX (grad, jit) and PyTorch networks on MNIST. Analyzed scalability, calibration, and model robustness across execution paradigms.",
      ".proj-card:nth-child(3) .tag": "Reinforcement Learning",
      ".proj-card:nth-child(3) h3": "Stock Trading RL Agent",
      ".proj-card:nth-child(3) p": "Trading agent using A2C, A3C, DQN, and PPO in AnyTrading; DQN identified as best performer. Co-authored a 9-page NeurIPS-style research paper.",
      ".proj-card:nth-child(4) .tag": "C++ / Systems",
      ".proj-card:nth-child(4) h3": "Simulated AED Software",
      ".proj-card:nth-child(4) p": "AED simulation in C++ (Qt/Linux) - self-test, rhythm analysis, shock delivery, and post-shock monitoring. Full SDLC with UML artifacts and layered testing.",
      ".proj-card:nth-child(5) .tag": "Security",
      ".proj-card:nth-child(5) h3": "Computer & Internet Security Study",
      ".proj-card:nth-child(5) p": "Survey of cryptography (RSA, TLS, Diffie-Hellman), software vulnerabilities, real-world attacks, and privacy technologies including Tor, VPNs, and GDPR.",
      "#courses .section-tag": "Courses",
      "#courses .section-title": "Coursework & certificates.",
      "#courses .section-desc": "Graduate coursework, applied AI projects, and continuing-learning certificates. Repos and certificates are linked as they are completed.",
      ".course-card:nth-child(1) .course-term": "Completed Jun 30, 2026",
      ".course-card:nth-child(1) h3": "Neural Networks and Deep Learning",
      ".course-card:nth-child(1) p": "Completed an online course authorized by DeepLearning.AI and offered through Coursera, covering neural network foundations and deep learning concepts.",
      ".course-card:nth-child(1) .course-link": "Verify credential ->",
      ".course-card:nth-child(2) .course-term": "Summer 2026",
      ".course-card:nth-child(2) h3": "Industry Project - Kinaxis",
      ".course-card:nth-child(2) p": "Designed and prototyped a multi-tenant AI governance platform with secure tenant isolation, policy-based authorization, governed model routing, and role-aware cascading.",
      ".course-card:nth-child(3) .course-term": "Winter 2026",
      ".course-card:nth-child(3) h3": "Deep Learning & Reinforcement Learning",
      ".course-card:nth-child(3) p": "Neural architectures, backpropagation, CNNs, RNNs, policy gradients, Q-learning, and actor-critic methods.",
      ".course-card:nth-child(4) .course-term": "Winter 2026",
      ".course-card:nth-child(4) h3": "Uncertainty Evaluation in ML (Dropped)",
      ".course-card:nth-child(4) p": "Probabilistic models, Bayesian methods, calibration, conformal prediction, and uncertainty quantification for ML systems.",
      ".course-card:nth-child(5) .course-term": "Winter 2026",
      ".course-card:nth-child(5) h3": "Professional Skills and Responsibility",
      ".course-card:nth-child(5) p": "Professional responsibilities, ethical frameworks in technology, case studies in AI governance, and engineering decision-making.",
      "#contact .section-tag": "Contact",
      "#contact .section-title": "Let's work together.",
      ".contact-desc": "Looking for software engineering and AI co-op opportunities. Reach out by email or connect below.",
      ".contact-btns .btn-primary": "Email Me",
      ".footer-inner span:last-child": "Built from scratch.",
      ".note-dialog .section-tag": "Message",
      "#anonymousNoteTitle": "Leave an anonymous note.",
      ".note-copy": "Your name and email are not requested. This form will include transparent technical details such as time, page, browser, language, timezone, screen size, and IP if available.",
      ".note-label": "Message",
      "#anonymousNoteSubmit": "Send Note",
      ".note-actions .btn-outline": "Cancel",
    },
    placeholders: { "#anonymousMessage": "Write your message..." },
    search: {
      base: [
        { title: "About", sub: "Bio, Education, Skills", href: "#about" },
        { title: "Experience", sub: "Work & Teaching history", href: "#experience" },
        { title: "Projects", sub: "ML, systems, software projects", href: "#projects" },
        { title: "Courses", sub: "Graduate coursework and certificates", href: "#courses" },
        { title: "Contact", sub: "Email, LinkedIn, GitHub", href: "#contact" },
      ],
      empty: query => `No results for "${query}"`,
      project: "Project",
      experience: "Experience",
      course: "Course / Certificate",
    },
    sending: "Preparing metadata and sending...",
    sent: "Sent. If this is the first submission, check your inbox to activate FormSubmit.",
  },
  zh: {
    title: "Ethan Fan - 软件与 AI 工程师",
    searchPlaceholder: "搜索...",
    searchLabel: "站内搜索",
    languageButton: "EN",
    languageLabel: "Switch to English",
    nav: ["关于", "经历", "项目", "课程", "联系"],
    text: {
      ".badge": "正在寻找 Co-op 机会",
      ".hero-title": "你好，我是<br><span class=\"accent-text\">Ethan Fan.</span>",
      ".hero-role": "Agentic AI · 深度学习 · 软件工程",
      ".hero-desc": "我正在渥太华大学攻读电子与计算机工程硕士。我专注于构建 agentic AI 系统、机器学习管线，以及可靠、经过测试、可投入生产的软件工具。",
      ".hero-btns .btn-primary": "查看项目",
      ".hero-btns a.btn-outline": "联系我",
      "#anonymousNoteBtn": "留下匿名留言",
      ".hero-meta .meta-item:nth-child(1) .meta-label": "学位",
      ".hero-meta .meta-item:nth-child(1) .meta-value": "电子与计算机工程硕士 · 渥太华大学",
      ".hero-meta .meta-item:nth-child(2) .meta-label": "方向",
      ".hero-meta .meta-item:nth-child(2) .meta-value": "Agentic AI · 深度学习 · 强化学习",
      ".hero-meta .meta-item:nth-child(3) .meta-label": "状态",
      ".hero-meta .meta-item:nth-child(3) .meta-value": "● 开放求职机会",
      ".scroll-label": "向下滚动",
      "#about .section-tag": "关于",
      "#about .section-title": "构建真正可用的 AI。",
      ".about-bio p:nth-child(1)": "我本科毕业于计算机科学，现在专注机器学习工程。目前在渥太华大学攻读 ECE 工程硕士，构建 agentic AI 系统、机器学习管线和生产级软件，把研究想法变成真实可用的成果。",
      ".about-bio p:nth-child(2)": "我擅长在系统思维与深度学习的交叉处工作：从底层 QNX RTOS，到多租户 AI 治理平台。",
      ".about-right .card:nth-child(1) h3": "教育经历",
      ".about-right .card:nth-child(2) h3": "技能",
      ".skill-group:nth-child(1) .skill-cat": "编程语言",
      ".skill-group:nth-child(2) .skill-cat": "AI / 机器学习",
      ".skill-group:nth-child(3) .skill-cat": "工具",
      "#experience .section-tag": "经历",
      "#experience .section-title": "工作与助教经历。",
      ".exp-card:nth-child(1) .tag": "企业实习",
      ".exp-card:nth-child(1) .exp-period": "2024 年 6 月 - 9 月",
      ".exp-card:nth-child(1) h3": "测试工程师",
      ".exp-card:nth-child(1) .exp-company": "东软（Amazon Vendor）· 中国大连",
      ".exp-card:nth-child(1) p": "负责 Amazon Fire OS TV 的 OTA 与系统级测试（FSST、MSQ）。在 Linux 环境构建 Python 自动化流程；使用 JIRA、TestRail、AWS KATS 和 DOTS 管理测试周期并定位瓶颈。执行底层 Android 测试，包括 bootloader 修改，并向 Amazon 开发和 QA 团队汇报结果。",
      ".exp-card:nth-child(2) .tag": "助教",
      ".exp-card:nth-child(2) .exp-period": "2026 年 1 月 - 至今",
      ".exp-card:nth-child(2) h3": "助教 - 实时操作系统（CEG4166）",
      ".exp-card:nth-child(2) p": "负责实验课、批改与反馈，内容涵盖 QNX 上的并发、调度、同步以及容错设计。",
      ".exp-card:nth-child(3) .tag": "助教",
      ".exp-card:nth-child(3) .exp-period": "2025 年 9 月 - 12 月",
      ".exp-card:nth-child(3) h3": "助教 - 软件工程导论（SEG2105）",
      ".exp-card:nth-child(3) p": "课程内容包括 Java、面向对象编程、UML、Android、SQLite 和软件测试。负责每周 office hour、批改，并与授课老师和其他助教协作。",
      ".exp-card:nth-child(4) .tag": "助教",
      ".exp-card:nth-child(4) .exp-period": "2021 · 2023",
      ".exp-card:nth-child(4) h3": "助教 - 离散结构 I（COMP1805）",
      ".exp-card:nth-child(4) p": "课程内容包括逻辑、集合论、算法复杂度、证明和图论。批改 600+ 份作业与考试，并负责每周 office hour。",
      "#projects .section-tag": "项目",
      "#projects .section-title": "精选项目。",
      "#projects .section-desc": "机器学习、系统和软件工程方向的技术项目。",
      ".proj-card:nth-child(1) .tag": "Agentic AI · Kinaxis 赞助",
      ".proj-card:nth-child(1) h3": "企业级 Agentic AI 治理平台",
      ".proj-card:nth-child(1) p": "面向企业规模治理的多租户 AI agent 平台，支持策略执行、模型路由、租户隔离和审计日志。",
      ".proj-card:nth-child(2) .tag": "机器学习系统",
      ".proj-card:nth-child(2) h3": "神经网络分析 - JAX vs PyTorch",
      ".proj-card:nth-child(2) p": "在 MNIST 上构建并 benchmark JAX（grad、jit）和 PyTorch 网络，分析不同执行范式下的扩展性、校准表现与模型鲁棒性。",
      ".proj-card:nth-child(3) .tag": "强化学习",
      ".proj-card:nth-child(3) h3": "股票交易强化学习 Agent",
      ".proj-card:nth-child(3) p": "基于 AnyTrading 使用 A2C、A3C、DQN 和 PPO 构建交易 agent；实验中 DQN 表现最佳。共同撰写 9 页 NeurIPS 风格研究论文。",
      ".proj-card:nth-child(4) .tag": "C++ / 系统",
      ".proj-card:nth-child(4) h3": "模拟 AED 软件",
      ".proj-card:nth-child(4) p": "使用 C++（Qt/Linux）开发 AED 模拟系统，包含自检、心律分析、电击释放和电击后监测。覆盖完整 SDLC、UML 文档和分层测试。",
      ".proj-card:nth-child(5) .tag": "安全",
      ".proj-card:nth-child(5) h3": "计算机与互联网安全研究",
      ".proj-card:nth-child(5) p": "调研密码学（RSA、TLS、Diffie-Hellman）、软件漏洞、真实攻击案例，以及 Tor、VPN、GDPR 等隐私技术。",
      "#courses .section-tag": "课程",
      "#courses .section-title": "课程与证书。",
      "#courses .section-desc": "研究生课程、应用 AI 项目和持续学习证书。项目仓库和证书会在完成后陆续链接。",
      ".course-card:nth-child(1) .course-term": "完成于 2026 年 6 月 30 日",
      ".course-card:nth-child(1) h3": "神经网络与深度学习",
      ".course-card:nth-child(1) p": "完成由 DeepLearning.AI 授权并通过 Coursera 提供的在线课程，内容涵盖神经网络基础与深度学习概念。",
      ".course-card:nth-child(1) .course-link": "验证证书 ->",
      ".course-card:nth-child(2) .course-term": "2026 夏季",
      ".course-card:nth-child(2) h3": "行业项目 - Kinaxis",
      ".course-card:nth-child(2) p": "设计并原型实现一个多租户 AI 治理平台，支持安全租户隔离、基于策略的授权、受治理的模型路由和角色感知级联。",
      ".course-card:nth-child(3) .course-term": "2026 冬季",
      ".course-card:nth-child(3) h3": "深度学习与强化学习",
      ".course-card:nth-child(3) p": "学习神经网络架构、反向传播、CNN、RNN、策略梯度、Q-learning 和 actor-critic 方法。",
      ".course-card:nth-child(4) .course-term": "2026 冬季",
      ".course-card:nth-child(4) h3": "机器学习不确定性评估（已退课）",
      ".course-card:nth-child(4) p": "概率模型、贝叶斯方法、校准、保形预测，以及机器学习系统中的不确定性量化。",
      ".course-card:nth-child(5) .course-term": "2026 冬季",
      ".course-card:nth-child(5) h3": "职业技能与责任",
      ".course-card:nth-child(5) p": "职业责任、技术伦理框架、AI 治理案例研究，以及工程决策。",
      "#contact .section-tag": "联系",
      "#contact .section-title": "期待一起合作。",
      ".contact-desc": "正在寻找软件工程与 AI 方向的 Co-op 机会。欢迎通过邮件或下面的链接联系我。",
      ".contact-btns .btn-primary": "发邮件给我",
      ".footer-inner span:last-child": "从零构建。",
      ".note-dialog .section-tag": "留言",
      "#anonymousNoteTitle": "留下匿名留言。",
      ".note-copy": "表单不会要求填写姓名或邮箱。提交时会透明附带一些技术信息，例如时间、页面、浏览器、语言、时区、屏幕尺寸，以及可用时的 IP。",
      ".note-label": "留言",
      "#anonymousNoteSubmit": "发送留言",
      ".note-actions .btn-outline": "取消",
    },
    placeholders: { "#anonymousMessage": "写下你的留言..." },
    search: {
      base: [
        { title: "关于", sub: "简介、教育、技能", href: "#about" },
        { title: "经历", sub: "工作与助教经历", href: "#experience" },
        { title: "项目", sub: "机器学习、系统、软件工程项目", href: "#projects" },
        { title: "课程", sub: "研究生课程与证书", href: "#courses" },
        { title: "联系", sub: "邮箱、LinkedIn、GitHub", href: "#contact" },
      ],
      empty: query => `没有找到“${query}”`,
      project: "项目",
      experience: "经历",
      course: "课程 / 证书",
    },
    sending: "正在整理元数据并发送...",
    sent: "已发送。如果这是第一次提交，请检查邮箱并激活 FormSubmit。",
  },
};

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

let currentLanguage = localStorage.getItem("language") === "zh" ? "zh" : "en";
let searchIndex = [];

function getLanguagePack() {
  return translations[currentLanguage];
}

function setContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function buildSearchIndex() {
  const pack = getLanguagePack();
  return [
    ...pack.search.base,
    ...Array.from(document.querySelectorAll(".proj-card h3")).map(el => ({
      title: el.textContent.trim(), sub: pack.search.project, href: "#projects"
    })),
    ...Array.from(document.querySelectorAll(".exp-card h3")).map(el => ({
      title: el.textContent.trim(), sub: pack.search.experience, href: "#experience"
    })),
    ...Array.from(document.querySelectorAll(".course-card h3")).map(el => ({
      title: el.textContent.trim(), sub: pack.search.course, href: "#courses"
    })),
  ];
}

function setLanguage(language) {
  currentLanguage = language === "zh" ? "zh" : "en";
  localStorage.setItem("language", currentLanguage);

  const pack = getLanguagePack();
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = pack.title;

  navLinks.forEach((link, index) => {
    if (pack.nav[index]) link.textContent = pack.nav[index];
  });

  Object.entries(pack.text).forEach(([selector, value]) => setContent(selector, value));
  const githubText = currentLanguage === "zh" ? "查看 GitHub ->" : "View on GitHub ->";
  document.querySelectorAll(".proj-card .card-link, .course-card:nth-child(n+2) .course-link")
    .forEach(link => { link.textContent = githubText; });

  Object.entries(pack.placeholders).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("placeholder", value);
  });

  if (searchInput) {
    searchInput.setAttribute("placeholder", pack.searchPlaceholder);
    searchInput.setAttribute("aria-label", pack.searchLabel);
  }

  if (languageToggle) {
    languageToggle.textContent = pack.languageButton;
    languageToggle.setAttribute("aria-label", pack.languageLabel);
  }

  searchIndex = buildSearchIndex();
}

function renderResults(query) {
  const q = query.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (!q) { searchResults.classList.remove("visible"); return; }

  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q)
  ).slice(0, 6);

  if (!matches.length) {
    searchResults.innerHTML = `<li class="search-empty">${getLanguagePack().search.empty(query)}</li>`;
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

setLanguage(currentLanguage);

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "zh" ? "en" : "zh");
  if (searchInput?.value) renderResults(searchInput.value);
});

searchInput.addEventListener("input", e => renderResults(e.target.value));
searchInput.addEventListener("focus",  e => renderResults(e.target.value));

document.addEventListener("click", e => {
  if (!e.target.closest("#navSearch")) searchResults.classList.remove("visible");
});

// ── Scroll hint click ─────────────────────────────────────────
document.querySelector(".scroll-hint")?.addEventListener("click", () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
});

// Anonymous note modal
function openAnonymousNote() {
  if (!anonymousNoteModal) return;
  anonymousNoteModal.classList.add("open");
  anonymousNoteModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  anonymousNoteStatus.textContent = "";
  setTimeout(() => anonymousMessage?.focus(), 80);
}

function closeAnonymousNote() {
  if (!anonymousNoteModal) return;
  anonymousNoteModal.classList.remove("open");
  anonymousNoteModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function collectBrowserMetadata() {
  const nav = window.navigator;
  const screenData = window.screen;
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  const metadata = {
    userAgent: nav.userAgent,
    platform: nav.platform,
    language: nav.language,
    languages: Array.from(nav.languages || []).join(", "),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffsetMinutes: new Date().getTimezoneOffset(),
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    screen: `${screenData.width}x${screenData.height}`,
    colorDepth: screenData.colorDepth,
    devicePixelRatio: window.devicePixelRatio,
    touchPoints: nav.maxTouchPoints || 0,
    cookiesEnabled: nav.cookieEnabled,
    online: nav.onLine,
    hardwareConcurrency: nav.hardwareConcurrency || "unknown",
    deviceMemory: nav.deviceMemory || "unknown",
    connection: connection ? `${connection.effectiveType || "unknown"}, ${connection.downlink || "unknown"} Mbps` : "unknown",
  };

  return Object.entries(metadata)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

async function getPublicIp() {
  try {
    const response = await fetch("https://api.ipify.org?format=json", {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("IP lookup failed");
    const data = await response.json();
    return data.ip || "Unavailable";
  } catch {
    return "Unavailable";
  }
}

anonymousNoteBtn?.addEventListener("click", openAnonymousNote);

document.querySelectorAll("[data-note-close]").forEach(button => {
  button.addEventListener("click", closeAnonymousNote);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && anonymousNoteModal?.classList.contains("open")) {
    closeAnonymousNote();
  }
});

anonymousNoteForm?.addEventListener("submit", async event => {
  event.preventDefault();

  anonymousNoteSubmit.disabled = true;
  anonymousNoteStatus.textContent = getLanguagePack().sending;

  document.getElementById("noteSubmittedAt").value = new Date().toISOString();
  document.getElementById("notePageUrl").value = window.location.href;
  document.getElementById("noteReferrer").value = document.referrer || "Direct / unavailable";
  document.getElementById("noteBrowserMeta").value = collectBrowserMetadata();
  document.getElementById("noteNetworkIp").value = await getPublicIp();

  anonymousNoteForm.submit();
  anonymousNoteStatus.textContent = getLanguagePack().sent;
  anonymousNoteForm.reset();

  setTimeout(() => {
    anonymousNoteSubmit.disabled = false;
    closeAnonymousNote();
  }, 1800);
});
