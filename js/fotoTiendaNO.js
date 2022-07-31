// En este script está el código referente a la seccion tienda(mi e-commerce) del sitio.

let fotoProductos = [
    {
        id:"001",
        nombre:'Chinita',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print1.jpg',
        descripcion:'',
    },
    {
        id:"002",
        nombre:'2 Psillobora picta',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print2.jpg',
        descripcion:''
    },
    {
        id:"003",
        nombre:'gorgojo de la rosa',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print3.jpg',
        descripcion:''
    },
    {
        id:"004",
        nombre:'mariposa de la tarde',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print4.jpg',
        descripcion:''
    },
    {
        id:"005",
        nombre:'Chinche',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print5.jpg',
        descripcion:''
    },
    {
        id:"006",
        nombre:'Salticido y mosca',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print6.jpg',
        descripcion:''
    },
    {
        id:"007",
        nombre:'Hormigon dorado alado',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20000',
        stock:'',
        imagen:'../images/print7.jpg',
        descripcion:''
    },
    {
        id:"008",
        nombre:'Chanchito blanco',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20000',
        stock:'',
        imagen:'../images/print8.jpg',
        descripcion:''
    },
    {
        id:"009",
        nombre:'Xylocopa Augusti',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print9.jpg',
        descripcion:''
    },
    {
        id:"010",
        nombre:'Ariadna maxima',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/printt10.jpg',
        descripcion:''
    },
    {
        id:"011",
        nombre:'Coniopterígido',
        tamaño:'30x40cm, 40x30cm',
        precio:'20000',
        stock:'',
        imagen:'../images/print11.jpg',
        descripcion:''
    },
    {
        id:"012",
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:'20000',
        stock:'',
        imagen:'../images/print12.jpg',
        descripcion:''
    },
]

// CART ITEMS COUNTER
const contadorProductos = document.querySelector('#contador--producto')
let contador = 0
contadorProductos.innerHTML = `
    <p>${contador}</p>
    `

let carrito, cardCart
let validadorCarrito = true

let btnAgregar = document.getElementsByClassName('btn--agregar')
let btnQuitar = document.getElementsByClassName('btn--quitar--producto')

// ADD KEY CARRITO TO LOCAL STORAGE
if(JSON.parse(localStorage.getItem('carrito'))) { // si existe la clave carrito en el storage
    carrito = JSON.parse(localStorage.getItem('carrito')) // asignar dicho valor en la variable carrito
} else { // si no existe
    localStorage.setItem('carrito', JSON.stringify([])) // seteado el local storage
    carrito = JSON.parse(localStorage.getItem('carrito')) // a la variable carrito quiero que sea lo que setié en el localStorage
}

mostrarProductos()


// mostrar/ocultar carrito/tienda
const verCarrito = document.querySelector('#ver--carrito')
const verTienda = document.querySelector('#ver--tienda')
const divCarrito = document.querySelector('#div--carrito')
const fotoTienda = document.querySelector('#foto--tienda')
const divCarritoProductos = document.querySelector('#div--carrito--productos')
const divTotalProductos = document.querySelector('#total--carrito')


verCarrito.addEventListener('click', function(){
    fotoTienda.style.display = 'none'
    divCarrito.style.display = 'flex'
    verCarrito.style.display = 'none'
    verTienda.style.display = 'block'
    divTotalProductos.style.display = 'flex'
    if(validadorCarrito) {
        mostrarCarrito()
        console.log(carrito.length)
        validadorCarrito = false
    } else {
        const cardEliminar = ``
        const totalEliminar = ``
        divCarritoProductos.innerHTML = cardEliminar
        divTotalProductos.innerHTML = totalEliminar
        mostrarCarrito()
        console.log(carrito.length)
    }
    // ADDEVENTLISTENER A CADA BTN--QUITAR--PRODUCTO
    for (let i = 0; i < btnQuitar.length; i++) {
        const element = btnQuitar[i]
        element.addEventListener('click', quitarDelCarrito)
        }
})

verTienda.addEventListener('click', function(){
    fotoTienda.style.display = 'flex'
    divCarrito.style.display = 'none'
    verTienda.style.display = 'none'
    verCarrito.style.display = 'block'
    divTotalProductos.style.display = 'none'
})

// ADDEVENTLISTENER A CADA BTN--AGREGAR
for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i]
    
    element.addEventListener('click', agregarAlCarrito)
}


//PUT CARDS OF PRODUCTS INTO HTML
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
                <button id=${id} class="btn--agregar" type="button">Agregar al carrito</button>
            </div>
        </div>
        `
        const container = document.querySelector('#cards--container')
        container.innerHTML += card // += para sumar a lo que ya tenga en el html
    }
}

function agregarAlCarrito(e){
    const btn = e.target // trae exactamente el boton que el usuario clickea.
    console.log(btn)
    const idBoton = btn.getAttribute('id') // sacar atributos de las etiquetas. trae el id del boton que clickea el usuario
    const productoEncontrado = fotoProductos.find((fotoProd) => fotoProd.id == idBoton) // find para saber que producto le corresponde el id, osea que fotoProd.id sea igual a lo que dice idBoton
    const enCarrito = carrito.find((fotoProd) => fotoProd.id == productoEncontrado.id) // al producto encontrado es igual al id de alguno de los productos? //recorre los productos que tenga en el carrito
    if(!enCarrito) { // si no existe el producto en el carrito entonces hacer esto: agregar el producto y la propiedad cantidad: 1 (propiedad cantidad añadida acá)
        carrito.push({...productoEncontrado, cantidad: 1}) //pushear al carrito. El "..." es para que en vez de pegar el objeto entero(porque productoEncontrado es un objeto), pega propiedad por propiedad. 
    } else { // si ya existe, entonces hacer lo siguiente:
        const carritoFiltrado = carrito.filter(fotoProd => fotoProd.id != enCarrito.id) // filtrado de productos para traer los productos que no están en el carrito.
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}] //agregar todos los productos(propiedad por propiedad) menos el que yo encontré en el carrito. agregar la cantidad que yo tenía en el carrito del producto + 1
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    //
    contador++
    contadorProductos.innerHTML = `
    <p>${contador}</p>
    `
    
}

function quitarDelCarrito(e) {
    const btn2 = e.target // el boton que el usuario clickea
    console.log(btn2)
    const idBoton = btn2.getAttribute('id') // el id de dicho boton( 001, 002, 003, etc..)
    console.log(idBoton)
    const productoEncontrado = fotoProductos.find((fotoProd) => fotoProd.id == idBoton) // encuentra el objeto(en fotoProductos) con el id del boton
    const enCarrito = carrito.find((fotoProd) => fotoProd.id == productoEncontrado.id) //encuentra el objeto(en carrito) con el mismo id del producto clickeado
    //const carritoFiltrado2 = carrito.filter(fotoProd => fotoProd.id != enCarrito.id)
    //carrito = [carritoFiltrado2]
    let index = carrito.indexOf(enCarrito)
    console.log(index)
    let cantidadDeElementosABorrar = 1
    carrito.splice(index, cantidadDeElementosABorrar);

    localStorage.setItem('carrito', JSON.stringify(carrito))
}


// TotalCarrito 
function totalCarrito(){ // funcion para que de el total del carrito
    return carrito.reduce((acumulador, fotoProd) => acumulador + fotoProd.precio * fotoProd.cantidad, 0) //recurrer el producto. acumulador + el precio del producto multiplicado por la cantidad (la cantidad propiedad ya va a estar creada)
}

// cambio a página carrito de compras. 2 páginas una cuando no existan productos en el carrito y la otra cuando si existan
// SHOW CART
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
            const {id, nombre, precio, imagen, cantidad} = element
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
                    <p>$${(precio * cantidad).toLocaleString()}</p>
                </div>
                <div class="quitar--producto">
                    <button id=${id} class="btn--quitar--producto">Quitar producto</button>
                </div>
            </div>
            ` 
            divCarritoProductos.innerHTML += cardCart

        }
        const cardTotal = `
            <div>
                <h2>
                    Total:
                </h2>
            </div>
            <div>
                <h2>
                    $${totalCarrito().toLocaleString()}
                </h2>
            </div>
            
            <div id="vaciar--carrito">
                <button id="btn--vaciar--carrito">Vaciar carrito</button>
            </div>
            
            ` 
        divTotalProductos.innerHTML += cardTotal
        // REMOVE CARDS FROM CARRITO
        const vaciarCarrito = document.querySelector('#btn--vaciar--carrito')
        vaciarCarrito.addEventListener('click', function (){
            const cardVacio = ` 
            `
            const cardVacio2 = `
                <div>
                    <h1>No hay productos en el carrito</h1>
                </div>
            `
            divCarritoProductos.innerHTML = cardVacio2
            divTotalProductos.innerHTML = cardVacio
            //REMOVE ITEMS FROM LOCALSTORAGE
            localStorage.removeItem('carrito')
            //RETURN TO 0 THE COUNTER
            contador = 0
            contadorProductos.innerHTML = `
                <p>${contador}</p>
                `
            carrito = []
            })
    }
}


