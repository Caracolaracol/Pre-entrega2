//PRODUCT LIST
let fotoProductos = [
    {
        id:0,
        nombre:'Chinita',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print1.jpg',
        descripcion:'',
    },
    {
        id:1,
        nombre:'2 Psillobora picta',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print2.jpg',
        descripcion:''
    },
    {
        id:2,
        nombre:'gorgojo de la rosa',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print3.jpg',
        descripcion:''
    },
    {
        id:3,
        nombre:'mariposa de la tarde',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print4.jpg',
        descripcion:''
    },
    {
        id:4,
        nombre:'Chinche',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print5.jpg',
        descripcion:''
    },
    {
        id:5,
        nombre:'Salticido y mosca',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print6.jpg',
        descripcion:''
    },
    {
        id:6,
        nombre:'Hormigon dorado alado',
        tamaño:'30x40cm, 40x30cm, 40',
        precio: 20000,
        enStock:3,
        imagen:'../images/print7.jpg',
        descripcion:''
    },
    {
        id:7,
        nombre:'Chanchito blanco',
        tamaño:'30x40cm, 40x30cm, 40',
        precio: 20000,
        enStock:3,
        imagen:'../images/print8.jpg',
        descripcion:''
    },
    {
        id:8,
        nombre:'Xylocopa Augusti',
        tamaño:'30x40cm, 40x30cm',
        precio:20000,
        enStock:3,
        imagen:'../images/print9.jpg',
        descripcion:''
    },
    {
        id:9,
        nombre:'Ariadna maxima',
        tamaño:'30x40cm, 40x30cm',
        precio:12000,
        enStock:3,
        imagen:'../images/printt10.jpg',
        descripcion:''
    },
    {
        id:10,
        nombre:'Coniopterígido',
        tamaño:'30x40cm, 40x30cm',
        precio:14000,
        enStock:3,
        imagen:'../images/print11.jpg',
        descripcion:''
    },
    {
        id:11,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:15000,
        enStock:3,
        imagen:'../images/print12.jpg',
        descripcion:''
    },
    {
        id:12,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print13.jpg',
        descripcion:''
    },
    {
        id:13,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print14.jpg',
        descripcion:''
    },
    {
        id:14,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print15.jpg',
        descripcion:''
    },
    {
        id:15,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print16.jpg',
        descripcion:''
    },
    {
        id:16,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio: 20000,
        enStock:3,
        imagen:'../images/print17.jpg',
        descripcion:''
    },
    {
        id:17,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print18.jpg',
        descripcion:''
    },
    {
        id:18,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print19.jpg',
        descripcion:''
    },
    {
        id:19,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print20.jpg',
        descripcion:''
    },
    {
        id:20,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print21.jpg',
        descripcion:''
    },
    {
        id:21,
        nombre:'Abeja joya',
        tamaño:'30x40cm, 40x30cm, 40',
        precio:20000,
        enStock:3,
        imagen:'../images/print22.jpg',
        descripcion:''
    },
]

// localStorage
let cart
if(JSON.parse(localStorage.getItem('cart'))) { // si existe la clave carrito en el storage
    cart = JSON.parse(localStorage.getItem('cart')) // asignar dicho valor en la variable carrito
} else { // si no existe
    localStorage.setItem('cart', JSON.stringify([])) // seteado el local storage
    cart = JSON.parse(localStorage.getItem('cart')) // a la variable carrito quiero que sea lo que setié en el localStorage
}

// SELECT CONTAINER
const productosContainer = document.querySelector(".foto-productos")
const cartItems = document.querySelector("#div--carrito--productos")
const divTotalProductos = document.querySelector('#total--carrito')
const verCarrito = document.querySelector('#ver--carrito')
const verTienda = document.querySelector('#ver--tienda')
const divCarrito = document.querySelector('#div--carrito')
const fotoTienda = document.querySelector('#foto--tienda')
const divCarritoProductos = document.querySelector('#div--carrito--productos')

const contadorProductos = document.querySelector('#contador--producto')
let contador = 0
let validadorCarrito = true


// SHOW PRODUCTS
function mostrarProductos(){
    fotoProductos.forEach((fotoProducto) => {
        productosContainer.innerHTML += `
        <div class="card">
            <div>
                <img src="${fotoProducto.imagen}" class="fotos--tienda">
            </div>
            <div>
                <h3>
                ${fotoProducto.nombre}
                </h3>
            </div>
            
            <div>
                <p>
                ${fotoProducto.descripcion}
                </p>
            </div>
            <div>
                <!-- <p> Tamaños: ${fotoProducto.tamaño}  </p> -->
                <!-- <p>${fotoProducto.stock} disponibles </p> -->
                <p>$${fotoProducto.precio.toLocaleString()}</p> <!-- toLocalString para que el numero salga con punto cuando es mil -->
            </div>
            
            <div class="btn--container" onclick="addToCart(${fotoProducto.id})">
                <button class="btn--agregar" type="button">Agregar al carrito</button>
            </div>
        </div>
        `
    })
}
mostrarProductos()
showCartItems()


// ADD TO CART
function addToCart(id) {
    if(cart.some((item) => item.id === id)) { // si el producto que quiero agregar ya existe en el carrito:
        const productoEncontrado = fotoProductos.find((fotoProd) => fotoProd.id == id) // find para saber que producto le corresponde el id, osea que fotoProd.id sea igual a lo que dice idBoton
        const enCarrito = cart.find((fotoProd) => fotoProd.id == productoEncontrado.id)
        const carritoFiltrado = cart.filter(fotoProd => fotoProd.id != enCarrito.id) // filtrado de productos para traer los productos que no están en el carrito.
        cart = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}] //agregar todos los productos(propiedad por propiedad) menos el que yo encontré en el carrito. agregar la cantidad que yo tenía en el carrito del producto +
    } else {
        const productoEncontrado = fotoProductos.find((producto) => producto.id === id )
        cart.push({...productoEncontrado, cantidad: 1})
    }
    updateCart()
}

// VER CARRITO
verCarrito.addEventListener('click', function(){
    
    divTotalProductos.style.display = 'flex'
    fotoTienda.style.display = 'none'
    divCarrito.style.display = 'flex'
    verCarrito.style.display = 'none'
    verTienda.style.display = 'block'
    const vaciarCarrito = document.querySelector('.btn--vaciar--carrito')
    vaciarCarrito.addEventListener('click', function(e){
        e.preventDefault
        borrarCarrito()
    })
})
// VER TIENDA
verTienda.addEventListener('click', function(){
    fotoTienda.style.display = 'flex'
    divCarrito.style.display = 'none'
    verTienda.style.display = 'none'
    verCarrito.style.display = 'block'
    divTotalProductos.style.display = 'none'
})

//VACIAR CARRITO



//UPDATE CART
function updateCart(){
    showCartItems()
    localStorage.setItem('cart', JSON.stringify(cart)) //actualizar el localstorage

}

// MOSTRAR ITEMS AL GRID CARRITO
function showCartItems(){
    cartItems.innerHTML = ` ` //borrar los elementos para que no se dupliquen
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
        <button class="btn--vaciar--carrito">Vaciar carrito</button>
    </div>
    
    ` 
    divTotalProductos.innerHTML = cardTotal
    
    cart.forEach((item) => {
        cartItems.innerHTML += `
            <div class="div--carrito--producto">
                <div>
                    <img src=${item.imagen} class="imagen--carrito" alt="">
                </div>
                <div>
                    <h3 class="nombre--producto">${item.nombre}</h3>
                </div>
                <div>
                    <p>${item.cantidad}</p>
                </div>
                <div>
                    <p>$${(item.precio * item.cantidad).toLocaleString()}</p>
                </div>
                <div class="quitar--producto">
                    <button class="btn--quitar--producto" onclick="removeItemFromCart(${item.id})" >Quitar producto</button>
                </div>
            </div>
            `
    })
}


// REMOVE ITEM FROM CART
function removeItemFromCart(id){
    cart = cart.filter( (item) => item.id !== id) // filtrar el array quitando el producto con el id que quiero eliminar
    updateCart()
}

// TotalCarrito 
function totalCarrito(){ // funcion para que de el total del carrito
    return cart.reduce((acumulador, fotoProd) => acumulador + fotoProd.precio * fotoProd.cantidad, 0) //recurrer el producto. acumulador + el precio del producto multiplicado por la cantidad (la cantidad propiedad ya va a estar creada)
}

function borrarCarrito(){
    const cardVacio = ` 
    `
    const cardVacio2 = `
        <div>
            <h1>No hay productos en el carrito</h1>
        </div>
    `
    divCarritoProductos.innerHTML = cardVacio2
    divTotalProductos.innerHTML = cardVacio
    
    localStorage.removeItem('cart')
}
