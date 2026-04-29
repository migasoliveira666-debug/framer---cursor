const projects = [
  { title: "3: Denial", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/3-denial.png" },
  { title: "3: Anger", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/3-anger.png" },
  { title: "3: Bargaining", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/3-bargaining.png" },
  { title: "3: Depression", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/3-depression.png" },
  { title: "3: Acceptance", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/3-acceptance.png" },
  { title: "Sean Scully", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/sean-scully.png" },
  { title: "Negociacao", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/negociacao.png" },
  { title: "Depressao", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/depressao.png" },
  { title: "Aceitacao", year: "2025", category: "Pintura", medium: "Tecnica mista", image: "./assets/aceitacao.png" },
  { title: "Cubo (Carvao)", year: "2025", category: "Escultura", medium: "Escultura", image: "./assets/cubo-carvao.png" },
  { title: "Cubo", year: "2025", category: "Escultura", medium: "Escultura", image: "./assets/cubo.png" },
  { title: "SSX", year: "2025", category: "Video", medium: "Video", video: "./assets/ssx.mp4" },
  { title: "NSX", year: "2025", category: "Video", medium: "Video", video: "./assets/nsx.mp4" },
  { title: "Emotional Degradation", year: "2025", category: "Video", medium: "Video", video: "./assets/emotional-degradation.mp4" },
]

const paintGrid = document.getElementById("paintGrid")
const sculptureGrid = document.getElementById("sculptureGrid")
const videoGrid = document.getElementById("videoGrid")
const intro = document.getElementById("intro")
const enterSite = document.getElementById("enterSite")

function renderCard(project, targetGrid) {
  const media = project.video
    ? `<video src="${project.video}" controls preload="metadata"></video>`
    : `<img src="${project.image}" alt="${project.title}" loading="lazy" />`

  const card = document.createElement("article")
  card.className = "card"
  card.innerHTML = `
    <div class="media">${media}</div>
    <div class="meta">
      <div class="top">
        <h3>${project.title}</h3>
        <span>${project.year}</span>
      </div>
      <p>${project.medium}</p>
    </div>
  `
  targetGrid.appendChild(card)
}

for (const project of projects) {
  if (project.category === "Pintura") renderCard(project, paintGrid)
  if (project.category === "Escultura") renderCard(project, sculptureGrid)
  if (project.category === "Video") renderCard(project, videoGrid)
}

enterSite.addEventListener("click", () => {
  intro.classList.add("hidden")
  document.body.classList.add("site-ready")
})
