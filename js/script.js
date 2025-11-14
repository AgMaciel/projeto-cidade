// ===============================
// JS personalizado do Projeto
// Cidade Estrutural
// ===============================

// Smooth Scroll para links do menu

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Exemplo de função opcional (pode ser removida)
console.log("Script carregado — Projeto Cidade Estrutural");
