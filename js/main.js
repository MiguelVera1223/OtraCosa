/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));











  /*selector de portafolio*/

const mixer = mixitup('.portafolio__container', {
  selectors: {
      target: '.portafolio__content'
  },
  animation: {
      duration: 400
  }
});

  /*link active de portafolio*/

  const linkPortafolio = document.querySelectorAll('.portafolio__item')

  function activePortafolio(){
      if(linkPortafolio){
        linkPortafolio.forEach(n => n.classList.remove('active-portafolio'))
        this.classList.add('active-portafolio')
      }
  }
  linkPortafolio.forEach(n => n.addEventListener('click', activePortafolio))





  /* input formulario*/ 

  const $form = document.querySelector('#form')
  const $buttonMailto = document.querySelector('#trucazo')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
    }