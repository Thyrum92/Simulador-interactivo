const iconMenu = document.querySelector("#iconMenu")
const menu = document.querySelector("#menu")

iconMenu.addEventListener("click", (e) => {

    // Alternar estilos del icono

    menu.classList.toggle("active")
    document.body.classList.toggle("opacity");

    const rutaActual = e.target.getAttribute("src")

    if (rutaActual == "./img/menu-hamburger.png") {
        e.target.setAttribute("src", "./img/menu-hamburger-white.png")
    } else {
        e.target.setAttribute("src", "./img/menu-hamburger.png")
    }

})