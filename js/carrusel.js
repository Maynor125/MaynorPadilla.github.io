document.addEventListener("DOMContentLoaded", function () {
    
  /*=============== Swiper Proyectos ===============*/
  var swiperPopular = new Swiper(".swiper-container", {
    // Opciones del Swiper
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    pagination: { 
      el: ".swiper-pagination", // Elemento donde se mostrarán los puntos de navegación
      clickable: true, // Permitir la navegación haciendo clic en los puntos
    },
    navigation: {
      nextEl: ".swiper-button-next", // Botón de avance
      prevEl: ".swiper-button-prev", // Botón de retroceso
    },
  });

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
      repositorio: "https://www.figma.com/file/oS5bXlAZa4Eh5dJHIMzink/Untitled?t=vFoov1cGfjYzrgUx-1",
    },
    {
      nombre: "Portafolio",
      imagen: "./img/project/proyecto2.png",
      categoria: "Diseños",
      tecnologias: ["Figma"],
      descripcion: "Prototipo de portafolio para programador con un buen diseño.",
      repositorio: "https://www.figma.com/file/D7QwHgzEu1bURGiks6LBi6/Untitled?node-id=0%3A1&t=vFoov1cGfjYzrgUx-1",
    },
    {
      nombre: "Sistema SGFS",
      imagen: "./img/project/proyecto3.png",
      categoria: "Apps",
      tecnologias: ["C#","MySQL","Bonify"],
      descripcion: " Sistema para la gestion de articulos ferreteros.",
      repositorio: "https://github.com/proyecto3.git",
    },
    {
      nombre: "Calculadora subneting",
      imagen: "./img/project/proyecto3.png",
      categoria: "Apps",
      tecnologias: ["C#","Bonify"],
      descripcion: "Calculadora para subnetear redes de las 2 formas mas utilizadas.",
      repositorio: "https://github.com/proyecto3.git",
    },
    {
      nombre: "Venta de cocinas",
      imagen: "./img/project/proyecto3.png",
      categoria: "Apps",
      tecnologias: ["C#","SQL","Bonify"],
      descripcion: "sistema de control para cadena de tiendas de cocinas.",
      repositorio: "https://github.com/proyecto3.git",
    },
  ];

  // Función para filtrar y agregar proyectos al carrusel
  function populateCarousel(categoria) {
    const proyectosFiltrados = proyectos.filter(project => project.categoria === categoria);

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = ""; // Clear the current projects

    proyectosFiltrados.forEach(project => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      slide.innerHTML = `
        <div class="newCard">
          <div class="containerImgNewCard">
            <img class="imgNewCard" src="${project.imagen}" alt="${project.nombre}">
          </div>
          <div class="tecnologiesUsed">
            ${project.tecnologias.map(tecnologia => `<div class="bage"><p>${tecnologia}</p></div>`).join("")}
          </div>
          <div class="textosNewCard">
            <h2>${project.nombre}</h2>
            <p>${project.descripcion}</p>
          </div>
          <a target="_blank" href="${project.repositorio}" class="boton">
            ${project.categoria === "Diseños"? "Ir a figma" : "Repositorio"}
          </a>
        </div>
      `;

      swiperPopular.slide.append(slide);
    });

    swiper.update(); // Update the Swiper
  }

  const buttons = swiper.el.querySelectorAll(".option button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const categoria = button.id;
      if (categoria) {
        populateCarousel(categoria);
      } else {
        console.error(`Invalid categoria: ${categoria}`);
      }
    });
  });

  // Show the "Webs" category by default
  populateCarousel("Webs");
});

  
