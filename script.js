// 1) Navbar ganha fundo ao rolar a página
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 2) Fecha o menu do celular ao clicar em um link
const links = document.querySelectorAll(".nav-link");
const menu = document.getElementById("menu");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

// 3) Animação: elementos aparecem suavemente ao rolar
const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(function (itens) {
  itens.forEach(function (item) {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

elementos.forEach(function (el) {
  observador.observe(el);
});

// 4) Formulário de contato (apenas simulação, não envia de verdade)
const formulario = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar

  const nome = document.getElementById("nome").value;
  resposta.textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";
  resposta.classList.remove("d-none");

  formulario.reset();
});