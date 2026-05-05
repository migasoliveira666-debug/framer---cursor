const targetCursor = document.getElementById("targetCursor");

// Efeito de Rasto (Trail)
window.addEventListener("mousemove", (e) => {
  targetCursor.style.left = `${e.clientX}px`;
  targetCursor.style.top = `${e.clientY}px`;
  
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);
  
  // Remove o rasto após a animação
  setTimeout(() => trail.remove(), 600);
});

// Intro
document.getElementById("enterSite").addEventListener("click", () => {
  document.getElementById("intro").style.opacity = "0";
  setTimeout(() => document.getElementById("intro").style.display = "none", 800);
});

// Reload
document.getElementById("homeReload").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});