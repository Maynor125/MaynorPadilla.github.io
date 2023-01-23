/*=============== EXPERIENCIA DETALLES ===============*/
const vistaExperiencia=document.querySelectorAll('.experiencia-detalle'),
      experiencia_btn=document.querySelectorAll('.btn-saber-mas'),
      experiecia_cerrar=document.querySelectorAll('.cerrar')

let modal=function(click)
{
   vistaExperiencia[click].classList.add('active-modal')
}
experiencia_btn.forEach((mb,i)=>
{
   mb.addEventListener('click',()=>
   {
      modal(i)
   })
})
experiecia_cerrar.forEach((mc)=>
{
   mc.addEventListener('click',()=>
   {
      vistaExperiencia.forEach((mv)=>
      {
         mv.classList.remove('active-modal')
      })
   })
})