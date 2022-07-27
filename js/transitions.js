let botonAparecerCarrito = document.querySelector('#ver--carrito')
let divCarritoAparecer = document.querySelector('#div--carrito')
botonAparecerCarrito.addEventListener('click', function(){
    divCarritoAparecer.style.animation = 'aparecer--div--carrito 250ms ease-in'
})

