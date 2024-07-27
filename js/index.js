// Le doy la bienvenida al usuario y lo invito a revisar mis productos
alert("Bienvenido a Stiilsed Kellad");
alert("Mira nuestros productos");

// Defino un array de productos
const productos = [
    { id: 1, nombre: "Reloj Tommy Hilfiger", precio: 359 },
    { id: 2, nombre: "Reloj Tissot Everytime Gent", precio: 549 },
    { id: 3, nombre: "Reloj Tissot Seastar", precio: 764 },
    { id: 4, nombre: "Reloj Swatch Ashbayang", precio: 130 }
];

function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}$`);
    });
}


// Función para agregar productos al carrito
function agregarAlCarrito() {
    let carrito = [];
    let idIngresado;

    mostrarProductos(); // Muestra los productos disponibles

    while (true) {
        idIngresado = prompt("Ingrese un numero del 1 al 4 para agregar al carrito \n 1) Reloj Tommy Hilfiger 359$\n 2) Reloj Tissot Everytime Gent 549$ \n 3) Reloj Tissot Seastar \n 4)Reloj Swatch Ashbayang 130$");

        if (idIngresado.toLowerCase() === 'fin') break;

        let id = parseInt(idIngresado);
        let productoElegido = productos.find(producto => producto.id === id);

        if (productoElegido) {
            carrito.push(productoElegido);
            console.log("Producto agregado: " + productoElegido.nombre);
        } else {
            console.error("Este producto no existe. Inténtelo de nuevo.");
        }
    }

    return carrito;
}

// Llamar a la función para iniciar el proceso
let carrito = agregarAlCarrito();
console.log("Carrito final:", carrito);

