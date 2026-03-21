const projects = [
  {
    title: "Machine Learning Projects",
    description: "Projects in machine learning, reinforcement learning, and applied AI.",
  },
  {
    title: "Software Engineering",
    description: "Software, testing, and automation work from coursework and personal projects.",
  },
  {
    title: "Leadership & Activities",
    description: "Teaching assistant work, student leadership, and event organization.",
  },
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectList.appendChild(card);
});