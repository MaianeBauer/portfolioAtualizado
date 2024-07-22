let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let heigth = sec.offsetHeight;
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
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

particlesJS.load("particles-container", "particlesjs-config.json");

window.revelar = ScrollReveal({ reset: true });
//topo

revelar.reveal(".efeito-img-topo", {
  duration: 2000,
  distance: "90px",
  delay: 50,
});
// Titulo de education

revelar.reveal(".efeito-education", {
  duration: 2000,
  distance: "90px",
});

//Titulo serviços
revelar.reveal(".efeito-services", {
  duration: 2000,
  distance: "90px",
});
//Titulo projetos
revelar.reveal(".efeito-project", {
  duration: 2000,
  distance: "90px",
});

// projetos
revelar.reveal(".efeitoprojeto1", {
  duration: 1000,
  distance: "900px",
  delay: 500,
  scale: 1,
  origin: "left",
});
revelar.reveal(".efeitoprojeto2", {
  duration: 1000,
  distance: "900px",
  delay: 500,
  scale: 3,
  origin: "left",
});
revelar.reveal(".efeitoprojeto3", {
  duration: 1000,
  distance: "900px",
  delay: 500,
  scale: 1,
  origin: "left",
});
// education arvore efeito-arvore
revelar.reveal(".efeito-arvore1", {
  duration: 1000,
  distance: "900px",
  delay: 500,
  origin: "left",
});
revelar.reveal(".efeito-arvore2", {
  duration: 1000,
  distance: "900px",
  delay: 800,
  origin: "right",
});
revelar.reveal(".efeito-arvore3", {
  duration: 1000,
  distance: "900px",
  delay: 1000,
  origin: "left",
});
revelar.reveal(".efeito-arvore4", {
  duration: 1000,
  distance: "900px",
  delay: 1000,
  origin: "right",
});
revelar.reveal(".efeito-arvore5", {
  duration: 1000,
  distance: "900px",
  delay: 1000,
  origin: "left",
});
revelar.reveal(".efeito-arvore6", {
  duration: 1000,
  distance: "900px",
  delay: 1000,
  origin: "right",
});
revelar.reveal(".efeito-arvore7", {
  duration: 2000,
  distance: "900px",
  delay: 1500,
  origin: "left",
});
// serviços efeito efeito-serv

revelar.reveal(".efeito-serv1", {
  duration: 2000,
  distance: "90px",
  delay: 500,
  origin: "top",
  rotate: {
    x: 50,
    z: 20,
  },
});
revelar.reveal(".efeito-serv2", {
  duration: 2000,
  distance: "90px",
  delay: 500,
  origin: "bottom",
  rotate: {
    x: 30,
    z: 20,
  },
});
revelar.reveal(".efeito-serv3", {
  duration: 2000,
  distance: "90px",
  delay: 500,
  origin: "bottom",

  rotate: {
    x: 25,
    z: 35,
  },
});
revelar.reveal(".efeito-serv4", {
  duration: 2000,
  distance: "90px",
  delay: 500,
  origin: "top",
  rotate: {
    x: 20,
    z: 30,
  },
});
// contato
ScrollReveal().reveal(".efeitocontato", {
  distance: "1000px",
  opacity: 15.8,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
