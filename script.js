console.log("Largura da tela: ", window.innerWidth);
console.log("É móvel? ", isMobile());

// Função para verificar se o dispositivo é móvel
function isMobile() {
  return window.innerWidth < 768; // Ajuste do tamanho da tela
}

// Inicialize o menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Função de scroll
function handleScroll() {
  if (!isMobile()) {
      sections.forEach((sec) => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute("id");

          if (top >= offset && top < offset + height) {
              navLinks.forEach((links) => {
                  links.classList.remove("active");
                  document
                      .querySelector("header nav a[href*=" + id + " ]")
                      .classList.add("active");
              });
          }
      });
  }
}

// Adiciona o evento de scroll
window.onscroll = handleScroll;

// Inicialize o menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Inicialize o ParticlesJS se não for um dispositivo móvel
if (!isMobile()) {
  particlesJS.load("particles-container", "particlesjs-config.json");
}

// Inicialize o ScrollReveal se não for um dispositivo móvel
if (!isMobile()) {
  window.revelar = ScrollReveal({ reset: true });
  
  // Revela os elementos com ScrollReveal
  const elementos = [
    ".efeito-img-topo", ".efeito-education", ".efeito-services", ".efeito-project",
    ".efeitoprojeto1", ".efeitoprojeto2", ".efeitoprojeto3",
    ".efeito-arvore1", ".efeito-arvore2", ".efeito-arvore3",
    ".efeito-arvore4", ".efeito-arvore5", ".efeito-arvore6", ".efeito-arvore7",
    ".efeito-serv1", ".efeito-serv2", ".efeito-serv3", ".efeito-serv4",
    ".efeitocontato"
  ];

  elementos.forEach(selector => {
    window.revelar.reveal(selector, {
      duration: 2000,
      distance: "90px",
      delay: 50,
     
    });
  });
}

// Adiciona um ouvinte de evento para o redimensionamento da janela
window.addEventListener('resize', () => {
  if (isMobile()) {
      // Reinitialize or adjust animations for mobile if needed
      particlesJS("particles-container", {});
      ScrollReveal().destroy(); // Destruir instâncias existentes se necessário

      // Ajuste da visibilidade dos elementos para mobile
      document.querySelectorAll('.efeito-img-topo, .efeito-education, .efeito-services, .efeito-project, .efeitoprojeto1, .efeitoprojeto2, .efeitoprojeto3, .efeito-arvore1, .efeito-arvore2, .efeito-arvore3, .efeito-arvore4, .efeito-arvore5, .efeito-arvore6, .efeito-arvore7, .efeito-serv1, .efeito-serv2, .efeito-serv3, .efeito-serv4, .efeitocontato').forEach(el => {
          el.style.visibility = 'visible'; // Garante que os elementos sejam visíveis
      });
  } else {
      // Caso contrário, aplique a visibilidade oculta
      document.querySelectorAll('.efeito-img-topo, .efeito-education, .efeito-services, .efeito-project, .efeitoprojeto1, .efeitoprojeto2, .efeitoprojeto3, .efeito-arvore1, .efeito-arvore2, .efeito-arvore3, .efeito-arvore4, .efeito-arvore5, .efeito-arvore6, .efeito-arvore7, .efeito-serv1, .efeito-serv2, .efeito-serv3, .efeito-serv4, .efeitocontato').forEach(el => {
          el.style.visibility = 'hidden'; // Esconde os elementos para animações
      });
  }
});
