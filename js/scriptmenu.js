document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("hamburguesa");
    const menu = document.getElementById("menuItems"); 
    const icono = document.getElementById("icono-menu");

    btnMenu.addEventListener("click", (e) => {
        e.stopPropagation();

        const menuVisible = menu.style.display === "flex";
        menu.style.display = menuVisible ? "none" : "flex";

        icono.classList.toggle("fa-bars", menuVisible);
        icono.classList.toggle("fa-xmark", !menuVisible);
    });

    // Cierra el menú al hacer clic fuera
    document.addEventListener("click", (e) => {
        if (!btnMenu.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none";
            icono.classList.add("fa-bars");
            icono.classList.remove("fa-xmark");
        }
    });

    // Cierra si agrandás la ventana a más de 1124px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1124) {
            menu.style.display = "flex"; 
            icono.classList.add("fa-bars");
            icono.classList.remove("fa-xmark");
        } else {
            menu.style.display = "none"; 
        }
    });
});
