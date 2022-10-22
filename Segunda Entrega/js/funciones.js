
function solicitarDatosCliente() {

    let check = true ;

    while (check){


        let mensaje = "" ;

        let empresa = prompt("Ingrese nombre del cliente o empresa").trim();
        let descripcion = prompt ("Ingrese descripcion del trabajo a realizar").trim();
        let presupuesto = parseFloat(prompt ("Ingrese presupuesto")); 


        while (!empresa){

            mensaje += "\nDebe ingresar nombre del cliente o empresa";
            cliente = prompt("Ingrese nombre del cliente o empresa").trim();

        }

        while (!descripcion){

            mensaje += "\nDebe ingresar descripcion del trabajo a realizar" ;
            descripcion = prompt ("Ingrese descripcion del trabajo a realizar").trim();
        }

        while (isNaN(presupuesto)){

            mensaje += "\nDebe ingresar un valor numerico para el presupuesto";
            presupuesto = parseFloat(prompt ("Ingrese un valor numerico para el presupuesto")); 

        }

        alert("Ingresaste estos datos: " + empresa + " - " + descripcion + " - " + presupuesto);

        check = confirm ("Desea cargar de nuevo los datos");

        if (check == false) {

            agregarNuevoID(empresa,descripcion,presupuesto)
            alert("Cliente agregado correctamente")

        } 

        }

    }

function agregarNuevoID(empresa,descripcion,presupuesto) {

    let nuevoCliente = new Cliente (empresa,descripcion,presupuesto);

    if (nuevoCliente) {

        nuevoCliente.setID(nuevoID);
        console.log(nuevoCliente.id)
        nuevoID ++ ;
        listaClientes.push(nuevoCliente);

    }

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