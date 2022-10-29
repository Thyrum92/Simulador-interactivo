let botonRegistro = document.getElementById("botonReg")
let mailInput = document.getElementById("inputMailN")
let usuariolInput = document.getElementById("inputUserN")
let passlInput = document.getElementById("inputPassN")

botonRegistro.addEventListener("click", () => {

    let mail = mailInput.value
    let user = usuariolInput.value
    let pass = passlInput.value

    if (validadorDatos(mail,user,pass)) {

        let nuevo_usuario = new User(mail,user,pass)
        let user_new = new Usuario(nuevo_usuario)

        registrarUsuarioNuevo(user_new)
        alert("Usuario creado correctamente")
    }

})