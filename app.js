class Producto {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.img = img
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    agregar(producto) {
        this.listaCarrito.push(producto)
    }

    mostrarProductos() {
        let contenedor_carrito = document.getElementById('contenedor_carrito')
        contenedor_carrito.innerHTML = ""
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="tarjeta">

            <img src="./img/airforceb.webp" alt="Zapatilla Nike Air Force Blancas">

            <div class="cuerpo-tarjeta">

                <h3>Nike Air Force 1 LE</h3>

                <span>$65.999</span>

                <button class="btn">Agregar al carrito</button>

            </div>

        </div>`
        })
    }
}

class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto)
    }

    mostrarProductos() {
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `<div class="tarjeta">
            <img src="${producto.img}" class="cuerpo-tarjeta" alt="...">
            <div class="cuerpo-tarjeta">
                <h5 class="cuerpo-tarjeta">${producto.nombre}</h5>
                <p class="cuerpo-tarjeta">${producto.descripcion}</p>
                <p class="cuerpo-tarjeta">$${producto.precio}</p>
                <a href="#" class="btn" id="ap-${producto.id}">Añadir al carrito</a>
            </div>
        </div>
            `
        })

        this.listaProductos.forEach(producto => {

            const btn = document.getElementById(`ap-${producto.id}`)

            btn.addEventListener("click", () => {
                carrito.agregar(producto)
                carrito.mostrarProductos()
            })
        })
    }
}

const carrito = new Carrito()

const controlador_productos = new ProductoController()

controlador_productos.agregar(p1)
controlador_productos.agregar(p2)
controlador_productos.agregar(p3)
controlador_productos.agregar(p4)
controlador_productos.agregar(p5)
controlador_productos.agregar(p6)

controlador_productos.mostrarProductos()