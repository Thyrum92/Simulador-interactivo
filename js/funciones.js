
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
    
function verificadorDatos(usuario,password) {

    if (buscar_usuario(usuario) != false && buscar_usuario(password) != false) {

        alert("Bienvenido " + usuario)

    } else {

        alert(usuario + " no existe")

    }

}

// Funcion para chequear datos del registro de usuario

function validadorDatos(mail,user,pass) {

    if (mail == "") {

        alert("Debe ingresar un mail")

    } else if (user == "") {

        alert("Debe ingresar un usuario")

    } else if (pass == "") {

        alert("Ingrese una contraseña")

    }else {

        let busqueda = buscar_usuario(mail)

        if (busqueda != false) {

            alert("Este usuario ya existe")
            return false

        } else {
            return true
        }


    }

}

// Funcion para buscar usuarios en local storage

function buscar_usuario(mail) {

     if (!localStorage.getItem(lista_de_usuarios)) {

        return false

    } 
    
    let arrayLocal = JSON.parse(localStorage.getItem(lista_de_usuarios))
    let encontrado = false
    let i = 0;
 
    while (!encontrado && i != arrayLocal.length ){

    if (arrayLocal[i].mail == mail) {

      encontrado = arrayLocal[i];

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

    } else if (descripcion == "") {

        alert("Debe ingresar una descripcion del trabajo a realizar")

    } else if (presupuesto == isNaN ) {

        alert("Ingrese un presupuesto")

    } 

    console.log("perfecto")
}

// Funcion para buscar clientes en local storage

function buscar_cliente(empresa) {

    if (!localStorage.getItem(lista_de_clientes)) {

       return false

   } 
   
   let arrayLocal = JSON.parse(localStorage.getItem(lista_de_clientes))
   let encontrado = false
   let i = 0;

   while (!encontrado && i != arrayLocal.length ){

   if (arrayLocal[i].empresa == empresa) {

    encontrado = arrayLocal[i];

   }

   i++;

 }

 return encontrado;

}

// Funcion para registrar un nuevo usuario

function registrarClienteNuevo(nuevo_cliente){

    let i = 1
    let item = localStorage.getItem(lista_de_clientes);
    if (item){
  
      let clientesAlmacenados = JSON.parse(localStorage.getItem(lista_de_clientes));
      clientesAlmacenados.push(nuevo_cliente.setID(i));
  
      let clientesAlmacenados_string = JSON.stringify(clientesAlmacenados);
      localStorage.setItem(lista_de_clientes,clientesAlmacenados_string);
  
    }else{
  
      let clientesAlmacenados = new Array();
      clientesAlmacenados.push(nuevo_cliente.setID(i));
      let clientesAlmacenados_string = JSON.stringify(clientesAlmacenados);
      localStorage.setItem(lista_de_clientes,clientesAlmacenados_string);
  
    }

    i++

  }