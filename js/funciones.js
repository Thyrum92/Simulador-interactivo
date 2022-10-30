
const lista_de_usuarios = "listadoUsers"
const lista_de_clientes = "listadoClientes"

/*

function solicitarDatosCliente(empresa, descripcion, presupuesto) {

    let check = true ;

    alert("Ingresaste estos datos: " + empresa + " - " + descripcion + " - " + presupuesto);

    check = confirm ("Desea cargar de nuevo los datos");

        if (check == false) {

            agregarNuevoID(empresa,descripcion,presupuesto)
            alert("Cliente agregado correctamente")

        } 

        }

function agregarNuevoID(empresa,descripcion,presupuesto) {

    let count = 0

    let nuevoCliente = new Cliente (empresa,descripcion,presupuesto);

    if (nuevoCliente) {

        nuevoCliente.setID(nuevoID);
        console.log(nuevoCliente.id)
        nuevoID ++ ;
        listaClientes.push(nuevoCliente);

    }

    localStorage.setItem(count, nuevoCliente)
    count ++

}

function cerrarTrabajo() {

    if(existeCliente()) {

        mostrarCliente()

        let idIngresado = prompt("Ingrese el ID del cliente para concluir el trabajo realizado")

        if (idIngresado) {

            let clienteEncontrado = listaClientes.find((c) => c.id == idIngresado ) ;

                if (clienteEncontrado) {

                    let estado = confirm("Desea termimnar el trabajo " + clienteEncontrado.mostrarDescripcion() + "?")

                    if (estado) {

                        clienteEncontrado.activo = false
                        alert("Trabajo terminado, su ganancia fue de $" + (clienteEncontrado.presupuesto - gastos))
                        
                    } else {
                    
                        alert("No se modificó el cliente, muchas gracias por utlizar nuestros servicios")
                    
                    } 

                }

            }

            return false

        }

        return false
    }


function existeCliente() {

    if (listaClientes.length == 0) {

        alert("No hay ningun cliente ingresado")
        return false

    } 
    
    return true

}

function mostrarCliente(){

    let mensaje = "Los clientes actuales son: "
    listaClientes.forEach ((empresa) => {

        mensaje += "\n" + empresa.mostrarDescripcion()

    })

    alert(mensaje)

}


function ingresarGasto() {

    let check = true ;

    while (check){


        let mensaje = "" ;

        let descripcionGasto = prompt("Ingrese la descripcion del gasto").trim();
        let gasto = parseFloat(prompt ("Ingrese presupuesto")); 


        while (!descripcionGasto){

            mensaje += "\nDebe ingresar la descripcion del gasto";
            descripcionGasto = prompt("Ingrese la descripcion del gasto").trim();

        }

        while (isNaN(gasto)){

            mensaje += "\nDebe ingresar un valor numerico para el gasto";
            gasto = parseFloat(prompt ("Ingrese un valor numerico para el gasto")); 

        }

        alert("Ingresaste estos datos: " + descripcionGasto + " - $" + gasto)

        check = confirm ("Desea cargar de nuevo los datos");

        if (check == false) {

            agregarNuevoGasto(descripcionGasto,gasto)
            alert("Gasto agregado correctamente, quedan $" + (listaClientes[0].presupuesto - gasto) + " del presupuesto acordado")

        } 

        }

    }

    function agregarNuevoGasto(descripcionGasto,gasto) {

        let nuevoGasto = new Gasto (descripcionGasto,gasto);
        
        if (nuevoGasto) {
        
            listaGastos.push(nuevoGasto);
        
        }
        
    }

    **/

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

    let rta = confirm("Ingresaste " + cliente + " - " + descripcion + " - " + presupuesto + " , es correcto?")

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