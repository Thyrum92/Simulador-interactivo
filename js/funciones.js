
const lista_de_usuarios = "listadoUsers"
const lista_de_clientes = "listadoClientes"


// Funcion verificadora de usuarios, usada en index para login
    
function verificadorDatos(user,pass) {

    if (buscar_user(user) != false && buscar_pass(pass) != false) {

        alert("Bienvenido " + user)
        return true

    } else {

        alert("Usuario o contraseña incorrectos")
        return false

    }

}

// Funcion para chequear datos del registro de usuario

function validadorDatos(mail,user,pass) {

    if (mail == "") {

        alert("Debe ingresar un mail")
        return false

    } else if (user == "") {

        alert("Debe ingresar un usuario")
        return false

    } else if (pass == "") {

        alert("Ingrese una contraseña")
        return false

    }else {

        let busqueda = buscar_mail(mail)

        if (busqueda != false) {

            alert("Este usuario ya existe")
            return false

        } else {
            return true
        }


    }

}

// Funcion para buscar usuarios en local storage

function buscar_mail(mail) {

     if (!localStorage.getItem(lista_de_usuarios)) {

        return false

    } 
    
    let arrayLocal = JSON.parse(localStorage.getItem(lista_de_usuarios))
    let encontrado = false
    let i = 0;
 
    while (!encontrado && i != arrayLocal.length ){

    if (arrayLocal[i].mail == mail) {

      encontrado = arrayLocal[i].mail;

    }

    i++;

  }

  return encontrado;

}

function buscar_user(user) {

    if (!localStorage.getItem(lista_de_usuarios)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_usuarios))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].user == user) {

     encontrado = arrayLocal[i].user;

   }

   i++;

 }

 return encontrado;

}

function buscar_pass(pass) {

    if (!localStorage.getItem(lista_de_usuarios)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_usuarios))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].pass == pass) {

     encontrado = arrayLocal[i].pass;

   }

   i++;

 }

 return encontrado;

}

// Funcion para registrar un nuevo usuario

function registrarUsuarioNuevo(nuevo_usuario){

    let item = localStorage.getItem(lista_de_usuarios);
    if (item){
  
      let usersAlmacenados = JSON.parse(localStorage.getItem(lista_de_usuarios));
      usersAlmacenados.push(nuevo_usuario);
  
      let usersAlmacenados_string = JSON.stringify(usersAlmacenados);
      localStorage.setItem(lista_de_usuarios,usersAlmacenados_string);
  
    }else{
  
      let usersAlmacenados = new Array();
      usersAlmacenados.push(nuevo_usuario);
      let usersAlmacenados_string = JSON.stringify(usersAlmacenados);
      localStorage.setItem(lista_de_usuarios,usersAlmacenados_string);
  
  
    }
  }

  // Funcion para chequear datos del registro de cliente

function validadorDatosCliente(cliente,descripcion,presupuesto) {

    if (cliente == "") {

        alert("Debe ingresar un cliente")
        return false

    } else if (descripcion == "") {

        alert("Debe ingresar una descripcion del trabajo a realizar")
        return false

    }else if (presupuesto == "" || !parseInt(presupuesto)) {

        alert("Ingrese un presupuesto, recuerda que el presupuesto tiene que ser un numero")
        return false

    } 

    let rta = confirm("Ingresaste " + cliente + " - " + descripcion + " - " + "$" + presupuesto + " , es correcto?")

    if (rta) {

        return true

    } 

    return false

    
}

// Funcion para buscar clientes en local storage

function buscar_empresa(empresa) {

    if (!localStorage.getItem(lista_de_clientes)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_clientes))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].empresa == empresa) {

    encontrado = arrayLocal[i].empresa;

   }

   i++;

 }

 return encontrado;

}

function buscar_descripcion(descripcion) {

    if (!localStorage.getItem(lista_de_clientes)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_clientes))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].descripcion == descripcion) {

    encontrado = arrayLocal[i].descripcion;

   }

   i++;

 }

 return encontrado;

}

function buscar_presupuesto(presupuesto) {

    if (!localStorage.getItem(lista_de_clientes)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_clientes))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].presupuesto == presupuesto) {

    encontrado = arrayLocal[i].presupuesto;

   }

   i++;

 }

 return encontrado;

}

// Funcion para registrar un nuevo cliente

function registrarClienteNuevo(nuevo_cliente){

    let item = localStorage.getItem(lista_de_clientes);
    if (item){
  
      let clientesAlmacenados = JSON.parse(localStorage.getItem(lista_de_clientes));
      clientesAlmacenados.push(nuevo_cliente);
  
      let clientesAlmacenados_string = JSON.stringify(clientesAlmacenados);
      localStorage.setItem(lista_de_clientes,clientesAlmacenados_string);
  
    }else{
  
      let clientesAlmacenados = new Array();
      clientesAlmacenados.push(nuevo_cliente);
      let clientesAlmacenados_string = JSON.stringify(clientesAlmacenados);
      localStorage.setItem(lista_de_clientes,clientesAlmacenados_string);
  
    }

  }

// Funcion para validar datos del Monto

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

function registrarGastoNuevo(nuevo_gasto){

    let item = localStorage.getItem(lista_de_gastos);
    if (item){
  
      let gastosAlmacenados = JSON.parse(localStorage.getItem(lista_de_gastos));
      gastosAlmacenados.push(nuevo_gasto);
  
      let gastosAlmacenados_string = JSON.stringify(gastosAlmacenados);
      localStorage.setItem(lista_de_gastos,gastosAlmacenados_string);
  
    }else{
  
      let gastosAlmacenados = new Array();
      gastosAlmacenados.push(nuevo_gasto);
      let gastosAlmacenados_string = JSON.stringify(gastosAlmacenados);
      localStorage.setItem(lista_de_gastos,gastosAlmacenados_string);
  
    }
  }