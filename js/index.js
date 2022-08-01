const btnIngresarSitio = document.querySelector('#btn--welcome')
//
const btnShowMenu = document.querySelector('.menu--show')
const btnShowMain = document.querySelector('#main--show')
const btnShowFooter = document.querySelector('.footer--show')
//
const sectionWelcome = document.querySelector('#section--welcome')


btnIngresarSitio.addEventListener('click', function(){
    sectionWelcome.style.display = 'none'
    btnShowMenu.style.display = 'block'
    btnShowMenu.style.animation = 'aparecer--index--container  450ms ease-in';
    btnShowMain.style.display = 'block'
    btnShowMain.style.animation = 'aparecer--index--container  450ms ease-in';
    btnShowFooter.style.display = 'flex'
    btnShowFooter.style.animation = 'aparecer--index--container  450ms ease-in';

})