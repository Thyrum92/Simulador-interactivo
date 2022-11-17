/** Desde aqui se podra buscar a los clientes que ya estan registrados en la base de datos **/

/** Declaracion de variables para usar en los eventos */

let buscadorCliente = document.getElementById("buscadorCliente")
let buscadorDescripcion = document.getElementById("buscadorDescripcion")
let botonBuscar = document.getElementById("buscar")
let botonFinalizar = document.getElementById("finalizar")
let bienvenida = document.getElementById("bienvenida")

/* Creacion de bienvenida, aca se crea la bienvenida en base al usuario que ingresa, ese dato se guarda en la session storage y se concatena al mensaje de bienvenida
   Que se muestra en la parte superior de la pagina */

let almacenamientoSesion = JSON.parse(sessionStorage.getItem(usuario_logueado))

let userLogueado = almacenamientoSesion[0]

bienvenida.innerText = "Bienvenido " + userLogueado

// Aca se declara un array de clientes para usarlo en la funcion para crear las etiquetas de los clientes, esa informacion sale directamente de la base de datos.

let arregloClientes = new Array

async function etiquetasClientes(label) {

    let arrayClientesApi = await fetch(apiRegClient) || []
    let contenidoApiClientes = await arrayClientesApi.json()

    contenidoApiClientes.forEach( (i) => {
    arregloClientes.push(i.cliente)
})

    let arregloClientesReducido = arregloClientes.reduce((a,e) => {
    if (!a.find(d=> d == e)) {
        a.push(e)
    }
    return a;
}, [])

    let elementos = "<option selected disables>--Seleccione--</option>"

    for (let i=0; i < arregloClientesReducido.length; i++) {
        elementos += '<option value="' + arregloClientesReducido[i] +'">' + arregloClientesReducido[i] +'</option>'

    }

    label.innerHTML = elementos

}


etiquetasClientes(buscadorCliente)

/* Evento de cambio para que impacte en la label de descripcion, una vez ejecutada la funcion anterior, se ejecuta el siguiente evento de cambio
    Para mostrar las descripciones del cliente seleccionado*/

let arregloDescripciones = new Array

buscadorCliente.addEventListener("change", async () => {

    let arrayClientesApi = await fetch(apiRegClient) || []
    let contenidoApiClientes = await arrayClientesApi.json()

    let valor = buscadorCliente.value
    let arrayBuscado = contenidoApiClientes.filter((e) => e.cliente.includes(valor))
    let opcionesEncontradas = new Array

    arrayBuscado.forEach( (i) => {
        opcionesEncontradas.push(i.descripcion)
    })
    
    let elementos = "<option selected disables>--Seleccione--</option>"

    for (let i=0; i < opcionesEncontradas.length; i++) {
        elementos += '<option value="' + opcionesEncontradas[i] +'">' + opcionesEncontradas[i] +'</option>'

    }

    buscadorDescripcion.innerHTML = elementos

})

// Evento de click para mostar informacion del cliente seleccionado. Una vez se seleccionan los clientes se ejecuta esta funcion para mostrar dicha info.

botonBuscar.addEventListener("click", async(e) => {

    e.preventDefault()

    let cliente = buscadorCliente.value
    let descripcion = buscadorDescripcion.value

    let arrayClientesApi = await fetch(apiRegClient) || []
    let contenidoApiClientes = await arrayClientesApi.json()

    let arrayBuscado = contenidoApiClientes.filter((e) => e.cliente.includes(cliente))
    let arrayBuscadoDescripcion = arrayBuscado.filter((e) => e.descripcion.includes(descripcion))

    alert("El cliente seleccionado es " + arrayBuscadoDescripcion[0].cliente + " - " + arrayBuscadoDescripcion[0].descripcion + ". Queda un presupuesto de $" + arrayBuscadoDescripcion[0].presupuesto_restante + ". Y su estado es " + arrayBuscadoDescripcion[0].estado)

})

botonFinalizar.addEventListener("click", async (e) => {

    e.preventDefault()

    let cliente = buscadorCliente.value
    let descripcion = buscadorDescripcion.value

    let arrayClientesApi = await fetch(apiRegClient) || []
    let contenidoApiClientes = await arrayClientesApi.json()

    let arrayBuscado = contenidoApiClientes.filter((e) => e.cliente.includes(cliente))
    let arrayBuscadoDescripcion = arrayBuscado.filter((e) => e.descripcion.includes(descripcion))

    let resp = confirm("Desea terminar este trabajo?")

    if(resp && arrayBuscadoDescripcion[0].estado == true){

        let indice = contenidoApiClientes.findIndex(elemento => {

            return elemento.cliente === arrayBuscadoDescripcion[0].cliente && elemento.descripcion === arrayBuscadoDescripcion[0].descripcion
    
        })

        console.log(indice)

        await fetch(apiRegClient+"/"+indice, {
        method: "PATCH",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "estado": "Terminado"
    
        })
    
      })

        let arrayGastosApi = await fetch(apiGastos) || []
        let contenidoApiGastos = await arrayGastosApi.json()

        let arrayUsuarios = new Array

        contenidoApiGastos.forEach( (e) => {

            if(e.cliente == cliente && e.descripcion == descripcion) {

            arrayUsuarios.push(e.usuario)

            }

        })

        let arrayUsuariosReducido = arrayUsuarios.reduce((a,e) => {
            if (!a.find(d=> d == e)) {
                a.push(e)
            }
            return a;
        }, [])

        let i = 0
        let sumaGasto = new Array
        let suma = 0

        while(i != arrayUsuariosReducido.length){

            let userBuscado = arrayUsuariosReducido[i]

            let arrayUserBuscado = contenidoApiGastos.filter( (e) => e.usuario.includes(userBuscado))
            let arrayUserCliente = arrayUserBuscado.filter((e) => e.cliente.includes(cliente))
            let arrayUserClienteDescripcion = arrayUserCliente.filter((e) => e.descripcion.includes(descripcion))

            let x = 0

            while (x != arrayUserClienteDescripcion.length){
            
            suma += parseFloat(arrayUserBuscado[x].gasto)

            x++

            }
            sumaGasto.push(suma)
            suma = 0

            i++
        }

        let msj = ""

        for (i = 0; i < arrayUsuariosReducido.length; i++){

            msj += arrayUsuariosReducido[i] + " gastó un total de $" + sumaGasto[i] + ". \n"

        }

        alert(msj)

        }

    return false

})