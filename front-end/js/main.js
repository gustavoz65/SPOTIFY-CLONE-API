// main.js

// Exemplo de URL da sua API
const API_BASE = "http://localhost:3000/api";

// Exemplo de função que busca lista de músicas (você pode integrar com seu layout)
async function fetchMusics() {
  try {
    const response = await fetch(`${API_BASE}/musics`);
    const data = await response.json();
    console.log("Músicas:", data);
    // Você pode manipular o DOM para exibir essas músicas
  } catch (err) {
    console.error("Erro ao buscar músicas:", err);
  }
}

// Exemplo: ao carregar a página, busca músicas
window.addEventListener("DOMContentLoaded", () => {
  fetchMusics();
});

// Exemplo de manipulação do usuário (poderia vir do localStorage)
const userNameSpan = document.getElementById("userName");
if (userNameSpan) {
  // Ajuste para exibir o nome do usuário real
  userNameSpan.textContent = "Angel";
}
