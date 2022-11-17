//Funcion de evento de click para ingresar con el usuario

let loginBot = document.getElementById("botonLogin") ;
loginBot.addEventListener("click", async (e) => {

    e.preventDefault()

    let user = document.getElementById("inputUser").value
    let pass = document.getElementById("inputPass").value

    await verificadorDatosApi(user,pass)
    
})
