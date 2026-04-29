const projects = [
  { title: "3: Denial", year: "2025", medium: "Tecnica mista", image: "./assets/3-denial.png" },
  { title: "3: Anger", year: "2025", medium: "Tecnica mista", image: "./assets/3-anger.png" },
  { title: "3: Bargaining", year: "2025", medium: "Tecnica mista", image: "./assets/3-bargaining.png" },
  { title: "3: Depression", year: "2025", medium: "Tecnica mista", image: "./assets/3-depression.png" },
  { title: "3: Acceptance", year: "2025", medium: "Tecnica mista", image: "./assets/3-acceptance.png" },
  { title: "Cubo (Carvao)", year: "2025", medium: "Escultura", image: "./assets/cubo-carvao.png" },
  { title: "Cubo", year: "2025", medium: "Escultura", image: "./assets/cubo.png" },
  { title: "Sean Scully", year: "2025", medium: "Tecnica mista", image: "./assets/sean-scully.png" },
  { title: "Negociacao", year: "2025", medium: "Tecnica mista", image: "./assets/negociacao.png" },
  { title: "Depressao", year: "2025", medium: "Tecnica mista", image: "./assets/depressao.png" },
  { title: "Aceitacao", year: "2025", medium: "Tecnica mista", image: "./assets/aceitacao.png" },
  { title: "SSX", year: "2025", medium: "Video", video: "./assets/ssx.mp4" },
  { title: "NSX", year: "2025", medium: "Video", video: "./assets/nsx.mp4" },
  { title: "Emotional Degradation", year: "2025", medium: "Video", video: "./assets/emotional-degradation.mp4" },
]

const grid = document.getElementById("projectsGrid")

for (const p of projects) {
  const media = p.video
    ? `<video src="${p.video}" controls preload="metadata"></video>`
    : `<img src="${p.image}" alt="${p.title}" loading="lazy" />`

  const card = document.createElement("article")
  card.className = "card"
  card.innerHTML = `
    <div class="media">${media}</div>
    <div class="meta">
      <div class="top">
        <h3>${p.title}</h3>
        <span>${p.year}</span>
      </div>
      <p>${p.medium}</p>
    </div>
  `
  grid.appendChild(card)
}
