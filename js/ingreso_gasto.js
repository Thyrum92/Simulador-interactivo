// Creacion de variables para usar en el evento de click

let buscarClienteIn = document.getElementById("buscarCliente")
let buscarDescripcionIn = document.getElementById("buscarDescripcion")
let montoIn = document.getElementById("Monto")
let comentarioIn = document.getElementById("Comentario")
let botonMonto = document.getElementById("botonMonto")

// aca estoy creando un array para usar como opciones a la hora de buscar un cliente en el formulario.

let arregloClientes = new Array

// aca estoy creando la funcion que se encarga de mostrarme las opciones del array de ingreso_gasto.js y la ejecuto.

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


etiquetasClientes(buscarClienteIn)

// Evento de cambio para que impacte en la label de descripcion

let arregloDescripciones = new Array

buscarClienteIn.addEventListener("change", async () => {

    let arrayClientesApi = await fetch(apiRegClient) || []
    let contenidoApiClientes = await arrayClientesApi.json()

    let valor = buscarClienteIn.value
    let arrayBuscado = contenidoApiClientes.filter((e) => e.cliente.includes(valor))
    let opcionesEncontradas = new Array

    arrayBuscado.forEach( (i) => {
        opcionesEncontradas.push(i.descripcion)
    })
    
    let elementos = "<option selected disables>--Seleccione--</option>"

    for (let i=0; i < opcionesEncontradas.length; i++) {
        elementos += '<option value="' + opcionesEncontradas[i] +'">' + opcionesEncontradas[i] +'</option>'

    }

    buscarDescripcionIn.innerHTML = elementos

})

// Funcion para registrar un gasto, y restarselo al presupuesto y actualizarlo en la base de datos de clientes.

botonMonto.addEventListener("click", async(e) => {

    e.preventDefault()

    let cliente = buscarClienteIn.value
    let descripcion = buscarDescripcionIn.value
    let comentario = comentarioIn.value
    let gasto = parseFloat(montoIn.value)

    if(validadorDatosMonto(cliente,descripcion,gasto,comentario)) {

        let nuevo_gasto = new Gasto(cliente, descripcion, gasto , comentario)
        
        await registrarGastoNuevo(nuevo_gasto)

    } else {

        return false

    }
})