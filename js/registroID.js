class Cliente {

    constructor (empresa, descripcion, presupuesto) {

        this.empresa = empresa ;
        this.descripcion = descripcion ;
        this.presupuesto = parseInt(presupuesto) ;
        this.id = -1 ;
        this.activo = -1;

    }
    
    setID(nuevoID) {
    
        this.id = nuevoID ;
        this.activo = true ;
    
    }

    mostrarDescripcion() {

        return (this.id + " - " + this.empresa + " - " + this.descripcion + " - " + this.presupuesto + " - " + this.activo)

    }

}

const listaClientes = new Array() ;
 
let nuevoID = 1 ;

let respuesta = confirm ("Desea agregar un nuevo cliente?")

if (respuesta) {

    solicitarDatosCliente()

}

respuesta = confirm("Desea concluir un trabajo?")

    if(respuesta) {

        cerrarTrabajo()

    } else {

        alert("Muchas gracias por utilizar nuestros servicios")

    }

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
                        alert("Trabajo terminado")
                        
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
