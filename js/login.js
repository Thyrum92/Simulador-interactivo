//Funcion de evento de click para ingresar con el usuario

let loginBot = document.getElementById("botonLogin") ;
loginBot.addEventListener("click", (e) => {

    e.preventDefault()

    let user = document.getElementById("inputUser").value
    let pass = document.getElementById("inputPass").value

    verificadorDatos(user,pass)
    
})

