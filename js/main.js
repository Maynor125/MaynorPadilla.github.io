/*=============== cambiar el color del header ===============*/
function scrollHeader() {
    const header=document.getElementById('header');
    if(this.scrollY >=50)
    {
        header.classList.add("scroll-header");
    }
    else
    {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener('scroll',scrollHeader)

 document.addEventListener("DOMContentLoaded", function(){
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
      nombre: "Conecta Emprende",
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

 const swiperWrapper = document.querySelector(".swiper-wrapper");
 const buttons = document.querySelectorAll(".option button");
 
 // Add active class to the web button initially
 buttons[0].classList.add('option-activate');
 function generateSlides(category) {
  const filteredProyectos = proyectos.filter((project) => project.categoria === category);
  const slidesHTML = filteredProyectos.map((project) => {
    return `
      <div class="swiper-slide">
        <div class="newCard">
          <div class="containerImgNewCard">
            <img class="imgNewCard" src="${project.imagen}" alt="${project.nombre}">
          </div>
          <div class="tecnologiesUsed">
            ${project.tecnologias.map((tecnologia) => `<div class="bage"><p>${tecnologia}</p></div>`).join("")}
          </div>
          <div class="textosNewCard">
            <h2>${project.nombre}</h2>
            <p>${project.descripcion}</p>
          </div>
          <a target="_blank" href="${project.repositorio}" class="boton">
            ${project.categoria === "Diseños"? "Ir a figma" : "Repositorio"}
          </a>
        </div>
      </div>
    `;
  }).join("");
  swiperWrapper.innerHTML = slidesHTML;
}

// Initialize with all projects
generateSlides("Webs");
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

    // Add event listeners to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id;
      generateSlides(category);
      swiper.update(); // Update Swiper instance

      // Remove active class from all buttons
    buttons.forEach((button) => {
      button.classList.remove('option-activate');
    });

    // Add active class to the clicked button
    button.classList.add('option-activate');
    });
  });

  
  });


/*=============== Menu desplegable ===============*/
const Menu=document.querySelector(".menu")
const nav=document.querySelector(".nav-menu")

Menu.addEventListener('click',()=>
{
    nav.classList.toggle("nav-menu-activate")
    Menu.classList.toggle("menu-activado")
})

/*=============== Activar enlaces ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
            
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive) 


document.addEventListener("DOMContentLoaded", function() {
   const r = ScrollReveal({
       origin: 'top',
       distance: '60px',
       duration: 2500,
       delay: 400,
   });
   
   r.reveal('.articulo-2', {opacity: 0, duration: 2, delay: 0.5, y: 60});
});

ScrollReveal().reveal('.articulo-3',{ delay: 500,opacity:0});
ScrollReveal().reveal('.articulo-1',{ delay: 500,opacity:0 });
ScrollReveal().reveal('.about-column-1',{ delay: 400,opacity:0 });
ScrollReveal().reveal('.experience-container',{ delay: 400,opacity:0 });
ScrollReveal().reveal('.about-column-2',{ delay: 700,opacity:0 });
ScrollReveal().reveal('.portafolio-container',{ delay: 400,opacity:0 });
ScrollReveal().reveal('.tecnologies-container',{ delay: 400,opacity:0 });
ScrollReveal().reveal('.contact-container',{ delay: 400,opacity:0 });




// Animación con GSAP
document.addEventListener("DOMContentLoaded", function() {
   gsap.from("#imgH", {opacity: 0, duration: 1.5, y: 70, ease: "power2.out"});
});

