// REGISTRO DE USUARIOS //

// Funcion para chequear datos del registro de usuario en la api

async function validadorDatos(user,pass) {

  if (user == "") {

      alert("Debe ingresar un usuario")
      return false

  } else if (pass == "") {

      alert("Ingrese una contraseña")
      return false

  }else {

      let busqueda = await buscarUserApi(user)

      if (busqueda != false) {

          alert("Este usuario ya existe")
          return false

      } else {
          return true
      }

  }

}

// Funcion para registrar un nuevo usuario

async function registrarUsuarioNuevo(nuevo_usuario){



    await fetch(apiReg, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "usuario": nuevo_usuario.user,
      "contraseña": nuevo_usuario.pass
    })
  })

  }



// Declaracion de variables para el evento de click de registro

let botonRegistro = document.getElementById("botonReg")
let usuariolInput = document.getElementById("inputUserN")
let passlInput = document.getElementById("inputPassN")

botonRegistro.addEventListener("click", async (e) => {

    e.preventDefault()

    let user = usuariolInput.value
    let pass = passlInput.value

    if (await validadorDatos(user,pass)) {

        let nuevo_usuario = new User(user,pass)
        let user_new = new Usuario(nuevo_usuario)

        await registrarUsuarioNuevo(user_new)
        alert("Usuario creado correctamente")
    } else {

        return false

    }

})