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
const introTerminal = document.getElementById("introTerminal")
const targetCursor = document.getElementById("targetCursor")
const homeReload = document.getElementById("homeReload")
const topLinks = document.querySelectorAll(".top-link")

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
  playBootSound()
  runBootSequence(() => {
    intro.classList.add("hidden")
    document.body.classList.add("site-ready")
  })
  document.body.classList.add("glitch-pulse")
  setTimeout(() => document.body.classList.remove("glitch-pulse"), 420)
})

setInterval(() => {
  document.body.classList.add("glitch-pulse")
  setTimeout(() => document.body.classList.remove("glitch-pulse"), 140)
}, 3400)

window.addEventListener("mousemove", (event) => {
  if (!targetCursor) return
  targetCursor.style.left = `${event.clientX}px`
  targetCursor.style.top = `${event.clientY}px`
})

window.addEventListener("mouseover", (event) => {
  if (!targetCursor) return
  const hoverable = event.target.closest("a, button, .card")
  targetCursor.style.transform = hoverable
    ? "translate(-50%, -50%) scale(1.35)"
    : "translate(-50%, -50%) scale(1)"
})

function runBootSequence(onDone) {
  const lines = [
    "> loading opium shell...",
    "> decrypting archive channels...",
    "> enabling visual glitch engine...",
    "> access granted.",
  ]

  let index = 0
  const lineEl = introTerminal.querySelector("p")
  lineEl.textContent = lines[0]

  const timer = setInterval(() => {
    index += 1
    if (index >= lines.length) {
      clearInterval(timer)
      setTimeout(onDone, 260)
      return
    }
    lineEl.textContent = lines[index]
  }, 230)
}

homeReload.addEventListener("click", (event) => {
  event.preventDefault()
  window.location.reload()
})

const sectionMap = ["bio", "projects", "contacts"]
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 140
  let active = ""
  for (const id of sectionMap) {
    const section = document.getElementById(id)
    if (!section) continue
    if (scrollY >= section.offsetTop) active = id
  }

  topLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === "#") {
      link.classList.toggle("active", active === "")
      return
    }
    link.classList.toggle("active", href === `#${active}`)
  })
})

function playBootSound() {
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = "sawtooth"
    oscillator.frequency.setValueAtTime(110, context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(46, context.currentTime + 0.32)
    gain.gain.setValueAtTime(0.0001, context.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.36)
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    oscillator.stop(context.currentTime + 0.37)
  } catch (error) {
    console.log("Boot sound unavailable", error)
  }
}
