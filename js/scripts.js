let tours = [
    {
        nombre: "Puerto Madero",
        horario: "viernes 9 a 13",
        precio: "$7.000.-",
        foto: "puertoMadero",
        descripcion:"Recorremos el puerto que no pudo ser antes de ser inaugurado.  Descubriremos como se recuperó el para el turismo y se creó un espacio para los habitantes con la reserva ecológica",
    },
    {
        nombre: "Delta del Tigre",
        horario: "sábado 9 a 13",
        precio: "$12.000.-",
        foto: "deltaTigre",
        descripcion:"Te invitamos a descubrir el delta de una manera que nunca lo viviste.  Una experiencia única en donde todos tus sentidos se activarán desde que partimos"
    },
    {
        nombre: "Centro histórico",
        horario: "sábado 12 a 15",
        precio: "$6.000.-",
        foto: "centroHistorico",
    },
    {
        nombre: "San Telmo",
        horario: "domingo 12 a 15",
        precio: "$7.000.-",
        foto: "sanTelmo",
    },
    {
        nombre: "La Boca",
        horario: "domingo 16 a 18",
        precio: "$9.000.-",
        foto: "laBoca",
    },    
    {
        nombre: "Obelisco",
        horario: "sab y dom 9 a 12",
        precio: "$9.000.-",
        foto: "obelisco",
    },
    {
        nombre: "Palermo",
        horario: "sab y dom 14 a 18",
        precio: "$10.000.-",
        foto: "palermo",
    },
    {
        nombre: "Recoleta",
        horario: "viernes 14 a 17",
        precio: "$8.000.-",
        foto: "recoleta",
    },
    {
        nombre: "Belgrano",
        horario: "sábado 14 a 17",
        precio: "$9.000.-",
        foto: "belgrano",
    },
    {
        nombre: "Vicente López",
        horario: "sábado 9 a 13",
        precio: "$7.000.-",
        foto: "vLopez",
    },
]

let todosLosTours = document.getElementById("contTours");
for (let contador = 0; contador < tours.length; contador++) {
    todosLosTours.innerHTML = todosLosTours.innerHTML + "<div class='cardTours'>"  +
                    "<img src='./images/" + tours[contador]["foto"] + ".jpg' alt='" + tours[contador]["nombre"] + "' >" +
                    "<h3>" + tours[contador]["nombre"] + "</h3>" +
                    "<span>" + tours[contador]["horario"] + "</span>" +
                    "<h5>" + tours[contador]["precio"] + "</h5>" 
                    + "<div class='separaBotones'><button class='buttonCard'><a href='#'> Ver </a></button>" + "<button class='buttonCard'><a href='#'> comprar </a></button></div>" + 
                    "</div>" 
}





document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburguesa');
  const menu = document.getElementById('menuResponsive');

  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Para cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});

