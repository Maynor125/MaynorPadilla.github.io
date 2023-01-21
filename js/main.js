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

/*=============== Swiper Proyectos ===============*/
var swiperPopular = new Swiper(".slider-projectos", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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


//----------Opciones para mostrar los proyectos del portafolio---------------



const btnWebs=document.getElementById("Webs")
const btnDiseno=document.getElementById("Diseños")
const btnApps=document.getElementById("Apps")

btnWebs.addEventListener('click',()=>
{
    btnDiseno.classList.remove("option-activate")
    btnWebs.classList.add("option-activate")
    btnApps.classList.remove("option-activate")

    var x = document.getElementsByClassName('cartas-diseño');

    for (var i = 0; i < x.length; i++) {
       x[i].style.display= "none";
    } 

    var y = document.getElementsByClassName('cartas-web');

  for (var i = 0; i < y.length; i++) {
     y[i].style.display= "block";
  } 
    var z = document.getElementsByClassName('cartas-apps');

  for (var i = 0; i < z.length; i++) {
     z[i].style.display= "none";
  } 
 
})
btnDiseno.addEventListener('click',()=>
{
    btnDiseno.classList.add("option-activate")
    btnWebs.classList.remove("option-activate")
    btnApps.classList.remove("option-activate")

    var x = document.getElementsByClassName('cartas-diseño');

    for (var i = 0; i < x.length; i++) {
       x[i].style.display= "block";
    } 

    var y = document.getElementsByClassName('cartas-web');

  for (var i = 0; i < y.length; i++) {
     y[i].style.display= "none";
  } 
    var z = document.getElementsByClassName('cartas-apps');

  for (var i = 0; i < z.length; i++) {
     z[i].style.display= "none";
  } 
 
})
btnApps.addEventListener('click',()=>
{
    btnDiseno.classList.remove("option-activate")
    btnWebs.classList.remove("option-activate")
    btnApps.classList.add("option-activate")

    var x = document.getElementsByClassName('cartas-diseño');

    for (var i = 0; i < x.length; i++) {
       x[i].style.display= "none";
    } 

    var y = document.getElementsByClassName('cartas-web');

  for (var i = 0; i < y.length; i++) {
     y[i].style.display= "none";
  } 
    var z = document.getElementsByClassName('cartas-apps');

  for (var i = 0; i < z.length; i++) {
     z[i].style.display= "block";
  } 
 
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const r=ScrollReveal({
   origin:'top',
   distance:'60px',
   duration:2500,
   delay:400,
   //reset:true,
})
r.reveal(`H`);
r.reveal(`T`,{delay:500});
r.reveal(`home__search`,{delay:600});