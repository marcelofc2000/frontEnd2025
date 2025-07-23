const tours = [
    {
        id: "PM",
        nombre: "Puerto Madero",
        horario: "viernes 9 a 13",
        precio: 7000,
        foto: "./images/puertoMadero.jpg",
        alt: "Foto de Puerto Madero",
    },
    {
        id: "DT",
        nombre: "Delta del Tigre",
        horario: "sábado 9 a 13",
        precio: 12000,
        foto: "./images/deltaTigre.jpg",
        alt: "Foto del Delta de Tigre",
    },
    {
        id: "CH",
        nombre: "Centro histórico",
        horario: "sábado 12 a 15",
        precio: 6000,
        foto: "./images/centroHistorico.jpg",
        alt: "Foto del Cabildo",
    },
    {
        id: "ST",
        nombre: "San Telmo",
        horario: "domingo 12 a 15",
        precio: 7000,
        foto: "./images/sanTelmo.jpg",
        alt: "Foto de San Telmo",
    },
    {
        id: "LB",
        nombre: "La Boca",
        horario: "domingo 16 a 18",
        precio: 9000,
        foto: "./images/laBoca.jpg",
        alt: "Foto de La Boca",
    },
    {
        id: "OB",
        nombre: "Obelisco",
        horario: "sab y dom 9 a 12",
        precio: 9000,
        foto: "./images/obelisco.jpg",
        alt: "Foto de vista desde el Obelisco",
    },
    {
        id: "PA",
        nombre: "Palermo",
        horario: "sab y dom 14 a 18",
        precio: 10000,
        foto: "./images/palermo.jpg",
        alt: "Foto del barrio de Palermo",
    },
    {
        id: "RE",
        nombre: "Recoleta",
        horario: "viernes 14 a 17",
        precio: 8000,
        foto: "./images/recoleta.jpg",
        alt: "Foto del barrio de Recoleta",
    },
    {
        id: "BE",
        nombre: "Belgrano",
        horario: "sábado 14 a 17",
        precio: 9000,
        foto: "./images/belgrano.jpg",
        alt: "Foto del barrio de Belgrano",
    },
    {
        id: "VL",
        nombre: "Vicente López",
        horario: "sábado 9 a 13",
        precio: 7000,
        foto: "./images/vlpz.jpg",
        alt: "Foto de la costa de Vicente López",
    },
];

let carrito = [];

// Agrega un tour al carrito o aumenta cantidad
function agregarTourAlCarrito(idTour) {
    let tourEnCarrito = carrito.find(tour => tour.id === idTour);

    if (tourEnCarrito) {
        tourEnCarrito.cantidad++;
    } else {
        const tourOriginal = tours.find(tour => tour.id === idTour);
        if (!tourOriginal) {
            console.error(`No se encontró el tour con id ${idTour}`);
            return;
        }
        carrito.push({ ...tourOriginal, cantidad: 1 });
    }

    actualizarCarritoHTML();
}

function manejarClicComprar(evento) {
    if (evento.target.classList.contains("buttonCard")) {
        const tourId = evento.target.dataset.id;
        agregarTourAlCarrito(tourId);
    }
}

// agrega las tarjetas de los tours
function agregarTours() {
    const divTours = document.getElementById("contTours");

    for (const tour of tours) {
        divTours.insertAdjacentHTML("beforeend",
            `
            <div class="cardTours">
                <img src="${tour.foto}" alt="${tour.alt}">
                <h3>${tour.nombre}</h3>
                <span>${tour.horario}</span>
                <h5>$${tour.precio}</h5> 
                <button class="buttonCard" data-id="${tour.id}">Comprar</button> 
            </div>
            `
        );
    }

// type="button"


    divTours.addEventListener("click", manejarClicComprar);
}

function manejarClicCarrito(evento) {
    const target = evento.target;

    if (target.dataset && target.dataset.id && target.dataset.action) {
        const tourId = target.dataset.id;
        const accion = target.dataset.action;

        if (accion === "eliminar") {
            eliminarProductoDelCarrito(tourId);
        } else if (accion === "restar") {
            restarCantidadProducto(tourId);
        } else if (accion === "sumar") {
            sumarCantidadProducto(tourId);
        }
    }
}

function actualizarCarritoHTML() {
    const carritoCompras = document.querySelector(".carritoCompras");

    if (!carritoCompras) {
        console.error("No se encontró el contenedor del carrito");
        return;
    }

    carritoCompras.innerHTML = `
        <h3>Tu Compra</h3>
        <ul class="lista-carrito"></ul>
        <p class="total-carrito"></p>
        <p class="cantidad-carrito"></p>
        <div class="boton-vaciar">
            <button id="vaciarCarrito">Vaciar Carrito</button>
        </div>
    `;


document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carrito = [];
    actualizarCarritoHTML();
});



    const listaCarrito = carritoCompras.querySelector(".lista-carrito");
    let totalPagar = 0;
    let cantidadProductosUnicos = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        for (const item of carrito) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.nombre} - $${item.precio} x ${item.cantidad}</span>
                <div>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="restar"><i class="fa-solid fa-minus"></i></button>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="sumar"><i class="fa-solid fa-plus"></i></button>
                    <button class="btn-eliminar" data-id="${item.id}" data-action="eliminar"><i class="fa-solid fa-xmark"></i></button>
                </div>
            `;
            listaCarrito.appendChild(li);

            totalPagar += parseInt(item.precio) * item.cantidad;
            cantidadProductosUnicos++;
        }
    }

    carritoCompras.querySelector(".total-carrito").textContent = `Total a pagar: $${totalPagar}.-`;
    carritoCompras.querySelector(".cantidad-carrito").textContent = `Tours Elegidos: ${cantidadProductosUnicos}`;

    listaCarrito.addEventListener("click", manejarClicCarrito);
}

function sumarCantidadProducto(idProducto) {
    const producto = carrito.find(item => item.id === idProducto);
    if (producto) {
        producto.cantidad++;
        actualizarCarritoHTML();
    }
}

function restarCantidadProducto(idProducto) {
    const producto = carrito.find(item => item.id === idProducto);
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad <= 0) {
            eliminarProductoDelCarrito(idProducto);
        } else {
            actualizarCarritoHTML();
        }
    }
}

function eliminarProductoDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarritoHTML();
}

// Inicialización
agregarTours();
actualizarCarritoHTML();