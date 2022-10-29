let botonRegistro = document.getElementById("botonReg")
let mailInput = document.getElementById("inputMailN")
let usuariolInput = document.getElementById("inputUserN")
let passlInput = document.getElementById("inputPassN")


botonRegistro.addEventListener("click", () => {

    let mail = mailInput.value
    let user = usuariolInput.value
    let pass = passlInput.value

    if (validadorDatos(mail,user,pass)) {

        let nuevo_usuario = new Usuario (mail, user, pass)

        registrarUsuarioNuevo(nuevo_usuario)
        alert("Usuario creado correctamente")

    }

})