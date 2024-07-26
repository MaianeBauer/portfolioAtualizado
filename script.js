console.log("Largura da tela: ", window.innerWidth);
console.log("É móvel? ", isMobile());




// Função para verificar se o dispositivo é móvel
function isMobile() {
  return window.innerWidth < 768; // Ajuste conforme necessário
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
  
  window.revelar.reveal(".efeito-img-topo", {
      duration: 2000,
      distance: "90px",
      delay: 50,
  });
  
  window.revelar.reveal(".efeito-education", {
      duration: 2000,
      distance: "90px",
  });
  
  window.revelar.reveal(".efeito-services", {
      duration: 2000,
      distance: "90px",
  });
  
  window.revelar.reveal(".efeito-project", {
      duration: 2000,
      distance: "90px",
  });

  window.revelar.reveal(".efeitoprojeto1", {
      duration: 1000,
      distance: "900px",
      delay: 500,
      scale: 1,
      origin: "left",
  });

  window.revelar.reveal(".efeitoprojeto2", {
      duration: 1000,
      distance: "900px",
      delay: 500,
      scale: 3,
      origin: "left",
  });

  window.revelar.reveal(".efeitoprojeto3", {
      duration: 1000,
      distance: "900px",
      delay: 500,
      scale: 1,
      origin: "left",
  });

  window.revelar.reveal(".efeito-arvore1", {
      duration: 1000,
      distance: "900px",
      delay: 500,
      origin: "left",
  });

  window.revelar.reveal(".efeito-arvore2", {
      duration: 1000,
      distance: "900px",
      delay: 800,
      origin: "right",
  });

  window.revelar.reveal(".efeito-arvore3", {
      duration: 1000,
      distance: "900px",
      delay: 1000,
      origin: "left",
  });

  window.revelar.reveal(".efeito-arvore4", {
      duration: 1000,
      distance: "900px",
      delay: 1000,
      origin: "right",
  });

  window.revelar.reveal(".efeito-arvore5", {
      duration: 1000,
      distance: "900px",
      delay: 1000,
      origin: "left",
  });

  window.revelar.reveal(".efeito-arvore6", {
      duration: 1000,
      distance: "900px",
      delay: 1000,
      origin: "right",
  });

  window.revelar.reveal(".efeito-arvore7", {
      duration: 2000,
      distance: "900px",
      delay: 1500,
      origin: "left",
  });

  window.revelar.reveal(".efeito-serv1", {
      duration: 2000,
      distance: "90px",
      delay: 500,
      origin: "top",
      rotate: {
          x: 50,
          z: 20,
      },
  });

  window.revelar.reveal(".efeito-serv2", {
      duration: 2000,
      distance: "90px",
      delay: 500,
      origin: "bottom",
      rotate: {
          x: 30,
          z: 20,
      },
  });

  window.revelar.reveal(".efeito-serv3", {
      duration: 2000,
      distance: "90px",
      delay: 500,
      origin: "bottom",
      rotate: {
          x: 25,
          z: 35,
      },
  });

  window.revelar.reveal(".efeito-serv4", {
      duration: 2000,
      distance: "90px",
      delay: 500,
      origin: "top",
      rotate: {
          x: 20,
          z: 30,
      },
  });

  ScrollReveal().reveal(".efeitocontato", {
      distance: "1000px",
      opacity: 15.8,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
}

// Adicionar um ouvinte de evento para o redimensionamento da janela para lidar com mudanças de tamanho
window.addEventListener('resize', () => {
  if (isMobile()) {
      // Reinitialize or adjust animations for mobile if needed
      particlesJS("particles-container", {}); // Se necessário, ajuste a configuração para mobile
      ScrollReveal().destroy(); // Destruir instâncias existentes se necessário
  }
});
