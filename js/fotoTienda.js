// En este script está el código referente a la seccion tienda(mi e-commerce) del sitio.


'use strict'

let fotoProductos = [
    {
        id:"001",
        nombre:'Chinita',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print1.jpg',
        descripcion:'',
    },
    {
        id:"002",
        nombre:'2 Psillobora picta',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print2.jpg',
        descripcion:''
    },
    {
        id:"003",
        nombre:'gorgojo de la rosa',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print3.jpg',
        descripcion:''
    },
    {
        id:"004",
        nombre:'mariposa de la tarde',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print4.jpg',
        descripcion:''
    },
    {
        id:"005",
        nombre:'Chinche',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print5.jpg',
        descripcion:''
    },
    {
        id:"006",
        nombre:'Salticido y mosca',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print6.jpg',
        descripcion:''
    },
    {
        id:"007",
        nombre:'Hormigon dorado alado',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20.000',
        stock:'',
        imagen:'../images/print7.jpg',
        descripcion:''
    },
    {
        id:"008",
        nombre:'Chanchito blanco',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20.000',
        stock:'',
        imagen:'../images/print8.jpg',
        descripcion:''

    },
    {
        id:"009",
        nombre:'Xylocopa Augusti',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print9.jpg',
        descripcion:''
    },
    {
        id:"010",
        nombre:'Ariadna maxima',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/printt10.jpg',
        descripcion:''
    },
    {
        id:"011",
        nombre:'Coniopterígido',
        tamaño:'30x40cm, 40x30cm',
        precio:'20.000',
        stock:'',
        imagen:'../images/print11.jpg',
        descripcion:''
    },
    {
        id:"012",
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20.000',
        stock:'',
        imagen:'../images/print12.jpg',
        descripcion:''
    },

]
/*
let listaProductos = document.querySelector('#cards')

for (let producto of fotoProductos){
    listaProductos.innerHTML += `
        <div class="cards cards--$">
            <div>
                <img src="${producto.imagen}" class="fotos--tienda">
            </div>
            <div>
                <h3>
                ${producto.nombre}
                </h3>
                <p>${producto.tamaño}</p>
            </div>
            <div>
                <p>$${producto.precio}</p>
            </div>
        </div>
    `
}
*/

let carrito
let cardCart
const contador = document.querySelector('#contador--producto')

if(JSON.parse(localStorage.getItem('carrito'))) { // si existe la clave carrito en el storage
    carrito = JSON.parse(localStorage.getItem('carrito')) // asignar dicho valor en la variable carrito
} else { // si no existe
    localStorage.setItem('carrito', JSON.stringify([])) // seteado el local storage
    carrito = JSON.parse(localStorage.getItem('carrito')) // a la variable carrito quiero que sea lo que setié en el localStorage
}
contador.innerHTML = `
    <p>${carrito.length}</p>
    `

function mostrarProductos() {
    for (let i = 0; i < fotoProductos.length; i++) {
        const element = fotoProductos[i]
        const {id, nombre, tamaño, precio, stock, imagen, descripcion} = element
        const card =`
        <div class="card">
            <div>
                <img src="${imagen}" class="fotos--tienda">
            </div>
            <div>
                <h3>
                ${nombre}
                </h3>
            </div>
            
            <div>
                <p>
                ${descripcion}
                </p>
            </div>
            <div>
                <!-- <p> Tamaños: ${tamaño}  </p> -->
                <!-- <p>${stock} disponibles </p> -->
                <p>$${precio.toLocaleString()}</p> <!-- toLocalString para que el numero salga con punto cuando es mil -->
            </div>
            
            <div class="btn--container">
                <button id=${id} class="btn--agregar">Agregar al carrito</button>
            </div>
        </div>
        `
        const container = document.querySelector('#cards--container')
        container.innerHTML += card // += para sumar a lo que ya tenga en el html
    }
}
mostrarProductos()
 // id para div del contador en el .html

const btnAgregar = document.getElementsByClassName('btn--agregar')
console.log(btnAgregar)
for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i]
    element.addEventListener('click', agregarAlCarrito)
} 

function agregarAlCarrito(e){
    const btn = e.target // trae exactamente el boton que el usuario clickea.
    const idBoton = btn.getAttribute('id') // sacar atributos de las etiquetas. trae el id del boton que clickea el usuario
    const productoEncontrado = fotoProductos.find((fotoProd) => fotoProd.id == idBoton) // find para saber que producto le corresponde el id, osea que fotoProd.id sea igual a lo que dice idBoton
    const enCarrito = carrito.find((fotoProd) => fotoProd.id == productoEncontrado.id) // al producto encontrado es igual al id de alguno de los productos? //recorre los productos que tenga en el carrito
    console.log(carrito)
    if(!enCarrito) { // si no existe el producto en el carrito entonces hacer esto: agregar el producto y la propiedad cantidad: 1 (propiedad cantidad añadida acá)
        carrito.push({...productoEncontrado, cantidad: 1}) //pushear al carrito. El "..." es para que en vez de pegar el objeto entero(porque productoEncontrado es un objeto), pega propiedad por propiedad. 
    } else { // si ya existe, entonces hacer lo siguiente:
        let carritoFiltrado = carrito.filter(fotoProd => fotoProd.id != enCarrito.id) // filtrado de productos para traer los productos que no están en el carrito.
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}] //agregar todos los productos(propiedad por propiedad) menos el que yo encontré en el carrito. agregar la cantidad que yo tenía en el carrito del producto + 1
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
    
    contador.innerHTML = `
    <p>${carrito.length}</p>
    `
}


// mostrar/ocultar carrito/tienda
const verCarrito = document.querySelector('#ver--carrito')
const verTienda = document.querySelector('#ver--tienda')
const divCarrito = document.querySelector('#div--carrito')
const fotoTienda = document.querySelector('#foto--tienda')
const divCarritoProductos = document.querySelector('#div--carrito--productos')

let validadorCarrito = true
verCarrito.addEventListener('click', function(){
    fotoTienda.style.display = 'none'
    divCarrito.style.display = 'flex'
    verCarrito.style.display = 'none'
    verTienda.style.display = 'block'
    if(validadorCarrito) {
        mostrarCarrito()
        validadorCarrito = false
    } else {
        const cardEliminar = ``
        divCarritoProductos.innerHTML = cardEliminar
        mostrarCarrito()
    }
})

verTienda.addEventListener('click', function(){
    fotoTienda.style.display = 'flex'
    divCarrito.style.display = 'none'
    verTienda.style.display = 'none'
    verCarrito.style.display = 'block'
})


// Carrito 

const totalCarrito = () => { // funcion anonima para que de el total del carrito
    return carrito.reduce((acumulador, fotoProd) => acumulador + fotoProd.precio * fotoProd.cantidad, 0) //recurrer el producto. acumulador + el precio del producto multiplicado por la cantidad (la cantidad propiedad ya va a estar creada)
}


// cambio a página carrito de compras. 2 páginas una cuando no existan productos en el carrito y la otra cuando si existan

function mostrarCarrito(){
    if(carrito.length == 0) { 
        const textoCarritoVacio = `
        <div>
            <h1>No hay productos en el carrito</h1>
        </div>
        `
        divCarrito.innerHTML += textoCarritoVacio
        
    } else {
         // el div donde van las cards de los productos
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            const {id, nombre, tamaño, precio, stock, descripcion, imagen, cantidad} = element
            const cardCart = `
            <div class="div--carrito--producto">
                <div>
                    <img src=${imagen} class="imagen--carrito" alt="">
                </div>
                <div>
                    <h3 class="nombre--producto">${nombre}</h3>
                </div>
                <div>
                    <p>${cantidad}</p>
                </div>
                <div>
                    <p>$${precio}</p>
                </div>
            </div>
            ` 
            divCarritoProductos.innerHTML += cardCart
            
        }
    }
}
