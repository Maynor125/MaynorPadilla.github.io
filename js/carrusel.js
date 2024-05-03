document.addEventListener("DOMContentLoaded", function () {
  const emblaNode = document.querySelector(".embla__container");
  const buttons = document.querySelectorAll(".option button");

  let embla = null;

  function populateCarousel(projects) {
    emblaNode.innerHTML = "";

    projects.forEach((project) => {
      const slide = document.createElement("div");
      slide.classList.add("embla__slide");
      slide.dataset.categoria = project.categoria;

      slide.innerHTML = `
          <div class="newCard">
            <div class="containerImgNewCard">
              <img class="imgNewCard" src="${project.imagen}" alt="${
        project.nombre
      }">
            </div>
            <div class="tecnologiesUsed">
              ${project.tecnologias
                .map(
                  (tecnologia) => `<div class="bage"><p>${tecnologia}</p></div>`
                )
                .join("")}
            </div>
            <div class="textosNewCard">
              <h2>${project.nombre}</h2>
              <p>${project.descripcion}</p>
            </div>
            <a target="_blank" href="${project.repositorio}" class="boton">
              Repositorio
            </a>
          </div>
        `;

      emblaNode.appendChild(slide);
    });

    if (embla) {
      embla.reInit();
    } else {
      embla = EmblaCarousel(emblaNode, { loop: true });
    }
  }

  const proyectos = [
    {
      nombre: "Control universidad",
      imagen: "../img/project/calculadora1.png",
      categoria: "Webs",
      tecnologias: ["Django", "Sass", "Potsgre SQL"],
      descripcion: " plataforma para el control de registros de una universidad.",
      repositorio: "https://github.com/Maynor125/Calculadora.git",
    },
    {
      nombre: "Plataforma EAS",
      imagen: "../img/project/eas.png",
      categoria: "Webs",
      tecnologias: ["HTML", "CSS", "JavaScript","Node"],
      descripcion: "plataforma que facilita erramientas de contabilidad y finanzas.",
      repositorio: "https://github.com/Maynor125/Calculadora.git",
    },
    {
      nombre: "Admin links",
      imagen: "../img/project/eas.png",
      categoria: "Webs",
      tecnologias: ["HTML", "CSS","Node","Mongo DB"],
      descripcion: "sitio en el cual podras almacenar tus enlaces de forma segura.",
      repositorio: "https://github.com/Maynor125/Calculadora.git",
    },
    {
      nombre: "SocioPosts",
      imagen: "../img/project/sociopost.png",
      categoria: "Webs",
      tecnologias: ["Next js","Css","Node","MongoDB"],
      descripcion: "Sitio para alogar publicaciones en la cual puedes subir imagenes y mas",
      repositorio: "https://github.com/Maynor125/Calculadora.git",
    },
    {
        nombre: "Calculadora",
        imagen: "../img/project/calculadora1.png",
        categoria: "Webs",
        tecnologias: ["HTML", "CSS", "React"],
        descripcion: "Calculadora iteractiva con las funciones basicas",
        repositorio: "https://github.com/Maynor125/Calculadora.git",
      },    
    {
      nombre: "Tienda astronomia",
      imagen: "./img/project/proyecto2.png",
      categoria: "Diseños",
      tecnologias: ["Figma"],
      descripcion: "Prototipo de tienda online de articulos astronomicos.",
      repositorio: "https://www.figma.com/file/2Zz5rIvOxZ6QvdxVF2PGrN/Untitled?node-id=0%3A1&t=vFoov1cGfjYzrgUx-1",
    },
    {
      nombre: "App Conecta Emprende",
      imagen: "./img/project/proyecto2.png",
      categoria: "Diseños",
      tecnologias: ["Figma"],
      descripcion: "Prototipo de aplicacion movil para la gestion de contenido.",
      repositorio: "https://www.figma.com/file/2Zz5rIvOxZ6QvdxVF2PGrN/Untitled?node-id=0%3A1&t=vFoov1cGfjYzrgUx-1",
    },
    {
      nombre: "Agenda",
      imagen: "./img/project/proyecto2.png",
      categoria: "Diseños",
      tecnologias: ["Figma"],
      descripcion: "Prototipo de agenda digital adaptable a cualquier dispositivo.",
      repositorio: "https://www.figma.com/file/2Zz5rIvOxZ6QvdxVF2PGrN/Untitled?node-id=0%3A1&t=vFoov1cGfjYzrgUx-1",
    },
    {
      nombre: "Proyecto 3",
      imagen: "./img/project/proyecto3.png",
      categoria: "Apps",
      tecnologias: ["React Native", "Firebase"],
      descripcion: "Descripción del proyecto 3",
      repositorio: "https://github.com/proyecto3.git",
    },
    // Agrega más proyectos aquí...
  ];

  // Filtramos los proyectos por defecto
  const proyectosFiltrados = proyectos.filter(
    (project) => project.categoria === "Webs"
  );
  populateCarousel(proyectosFiltrados);

  // Añadimos el evento para los botones de selección
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const categoria = button.id;
      const proyectosFiltrados = proyectos.filter(
        (project) => project.categoria === categoria
      );
      populateCarousel(proyectosFiltrados);
    });
  });
});
