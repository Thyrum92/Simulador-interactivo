

//const user1 = new Usuario ("fede", "1234")

//Funcion de evento de click para ingresar con el usuario

let loginBot = document.getElementById("botonLogin") ;
loginBot.addEventListener("click", () => {

    let inputU = document.getElementById("inputUser").value
    let inputP = document.getElementById("inputPass").value

    verificadorDatos(inputU,inputP)
    
})

