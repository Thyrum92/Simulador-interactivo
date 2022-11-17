// Constante de usuario logueado para guardar en el session storage

const usuario_logueado = "user_log"

// funciones validadoras de usuario y pass general

async function buscarUserApi(user) {

  const respApi = await fetch(apiReg)

  const contenidoApi = await respApi.json()

  if(!contenidoApi) {
    
    return false

  }

  let encontrado = false
  let i = 0

  while(!encontrado && i != contenidoApi.length) {

    if(contenidoApi[i].usuario == user) {

      encontrado = contenidoApi[i].usuario

    } 

    i++

  }

  return encontrado;

}

async function buscarPassApi(pass) {

  const respApi = await fetch(apiReg)

  const contenidoApi = await respApi.json()

  if(!contenidoApi) {
    
    return false

  }

  let encontrado = false
  let i = 0

  while(!encontrado && i != contenidoApi.length) {

    if(contenidoApi[i].contraseña == pass) {

      encontrado = contenidoApi[i].contraseña

    } 

    i++

  }

  return encontrado;

}

// funciones buscadoras de clientes y presupuesto general

async function buscarClienteApi(cliente,descripcion) {

  const respApi = await fetch(apiRegClient)

  const contenidoApi = await respApi.json()

  if(!contenidoApi) {
    
    return false

  }

  let filtroCliente = contenidoApi.filter( (e) => e.cliente.includes(cliente));
  let filtroClienteDescripcion = filtroCliente.filter( (e) => e.descripcion.includes(descripcion))

  if (filtroClienteDescripcion == "") {

    return false

  }

  return filtroClienteDescripcion

}

// LOGIN //

// Funcion verificadora de usuarios para logIn y para guardar el user log en el session storage

 
async function verificadorDatosApi(user,pass) {

  if (user == "") {

    alert("Debe ingresar un usuario")
    return false

} else if (pass == "") {

    alert("Ingrese una contraseña")
    return false

}else {

    let busqueda1 = await buscarUserApi(user)
    let busqueda2 = await buscarPassApi(pass)

    if (busqueda1 == user && busqueda2 == pass) {

      let userLog = new Array();
      userLog.push(user);
      let userLog_string = JSON.stringify(userLog);
      sessionStorage.setItem(usuario_logueado,userLog_string);
      
      window.location = "buscador.html"

       return true

}

alert("Usuario o contraseña incorrectos")
return false

}
}

// Funcion utilizada para desloguear la cuenta

let logOut = document.getElementById("LogOut")

logOut.addEventListener("click", (e) => {

  let resp = confirm("Realmente desea salir?")

  if (resp) {
    window.location="index.html"
    sessionStorage.clear()

  } else {
    return false
  }

})

//Registro de clientes//

// Funcion para chequear datos ingresados del registro de cliente

async function validadorDatosCliente(cliente,descripcion,presupuesto) {

    if (cliente == "") {

        alert("Debe ingresar un cliente")
        return false

    } else if (descripcion == "") {

        alert("Debe ingresar una descripcion del trabajo a realizar")
        return false

    }else if (presupuesto == "" || !parseInt(presupuesto)) {

        alert("Ingrese un presupuesto, recuerda que el presupuesto tiene que ser un numero")
        return false

    } else {

      let busqueda = await buscarClienteApi(cliente,descripcion)

      if(busqueda != false) {

        alert("Este presupuesto ya está ingresado, fue ingresado por " + busqueda[0].usuario)
        return false

      }

      let rta = confirm("Ingresaste " + cliente + " - " + descripcion + " - " + "$" + presupuesto + " , es correcto?")

      if (rta) {
  
          return true
  
      } 
  
      return false

    }
    
}

// Funcion para registrar un nuevo cliente

async function registrarClienteNuevo(nuevo_cliente){

  let sessionLog = JSON.parse(sessionStorage.getItem(usuario_logueado))
  let userSession = sessionLog[0]

  await fetch(apiRegClient, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "usuario": userSession,
      "cliente": nuevo_cliente.empresa,
      "descripcion": nuevo_cliente.descripcion,
      "presupuesto_inicial": nuevo_cliente.presupuesto,
      "estado": nuevo_cliente.activo,
      "presupuesto_restante": nuevo_cliente.presupuesto
 
    })
  })
}


// Funcion para validar datos del gasto

function validadorDatosMonto(buscarCliente,buscarID,monto,comentario) {

if (buscarCliente == "") {

        alert("Debe ingresar un cliente")
        return false

    } else if (buscarID == "") {

        alert("Debe ingresar un ID")
        return false

    }else if (monto == "" || !parseInt(monto)) {

        alert("Ingrese un gasto, recuerda que el gasto tiene que ser un numero")
        return false

    } else if (comentario == "") {

        alert("Ingrese una descripcion del gasto")
        return false

    }

    let rta = confirm("Ingresaste " + buscarCliente + " - " + buscarID + " - " + "$" + monto + " - " + comentario + " , es correcto?")

    if (rta) {

        return true

    } 

    return false

    
}

async function registrarGastoNuevo(nuevo_gasto){

  let sessionLog = JSON.parse(sessionStorage.getItem(usuario_logueado))
  let userSession = sessionLog[0]
  
  await fetch(apiGastos, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "usuario": userSession,
      "cliente": nuevo_gasto.cliente,
      "descripcion": nuevo_gasto.descripcion,
      "comentario": nuevo_gasto.comentario,
      "gasto": nuevo_gasto.gasto

    })
  })

  let arregloClientes = await fetch(apiRegClient)
  let arregloParseado = await arregloClientes.json()

  let arregloClientesFiltrado = arregloParseado.filter((e) => e.cliente.includes(nuevo_gasto.cliente))

  let arregloClientesDescripcion = arregloClientesFiltrado.filter((e) => e.descripcion.includes(nuevo_gasto.descripcion))

  let presupuestoR = parseFloat(arregloClientesDescripcion[0].presupuesto_restante)

  presupuestoR -= parseFloat(nuevo_gasto.gasto)

  console.log(presupuestoR)

  let indice = arregloParseado.findIndex(elemento => {

    return elemento.cliente === arregloClientesDescripcion[0].cliente && elemento.descripcion === arregloClientesDescripcion[0].descripcion

  })

    await fetch(apiRegClient+"/"+indice, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "presupuesto_restante": presupuestoR

    })

  })

  alert("Todavia queda disponible $" + presupuestoR)

}