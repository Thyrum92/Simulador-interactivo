let buscadorCliente = document.getElementById("buscadorCliente")
let buscadorDescripcion = document.getElementById("buscadorDescripcion")
let botonBuscar = document.getElementById("buscar")
let botonFinalizar = document.getElementById("finalizar")

let arregloClientes = new Array


let arrayLocalC = JSON.parse(localStorage.getItem(lista_de_clientes)) || []

arrayLocalC.forEach( (i) => {
arregloClientes.push(i.empresa)

})

let arregloClientesReducido = arregloClientes.reduce((a,e) => {
    if (!a.find(d=> d == e)) {
        a.push(e)
    }
    return a;
}, [])

function opcionesClientes(array, label) {

    let elementos = "<option selected disables>--Seleccione--</option>"

    for (let i=0; i < array.length; i++) {
        elementos += '<option value="' + array[i] +'">' + array[i] +'</option>'

    }

    console.log(elementos)
    label.innerHTML = elementos

}
opcionesClientes(arregloClientesReducido, buscadorCliente)

// Evento de cambio para que impacte en la label de descripcion

buscadorCliente.addEventListener("change", () => {

    let valor = buscadorCliente.value
    let arrayBuscado = arrayLocalC.filter((e) => e.empresa.includes(valor))
    let opcionesEncontradas = new Array

    arrayBuscado.forEach( (i) => {
        opcionesEncontradas.push(i.descripcion)
    })
    
    opcionesClientes(opcionesEncontradas, buscadorDescripcion)

})

// Evento para buscar informacion de los clientes 

botonBuscar.addEventListener("click", (e) => {

    e.preventDefault()

    let clienteSeleccionado = buscadorCliente.value
    let descipcionSeleccionada = buscadorDescripcion.value

    let clientesFiltrados = arrayLocalC.filter((i) => i.empresa.includes(clienteSeleccionado))
    let descripcionFiltrada = clientesFiltrados.filter((i) => i.descripcion.includes(descipcionSeleccionada))
    let clienteEncontrado = descripcionFiltrada[0]

    console.log(clienteEncontrado)
    
    alert("El cliente seleccionado es " + clienteEncontrado.empresa + " el trabajo realizado es " + clienteEncontrado.descripcion + " actualmente te queda una ganancia de $" + clienteEncontrado.presupuesto + " y su estado es " + clienteEncontrado.activo)

})

botonFinalizar.addEventListener("click", (e) => {

    e.preventDefault()

    let clienteSeleccionado = buscadorCliente.value
    let descipcionSeleccionada = buscadorDescripcion.value

    let clientesFiltrados = arrayLocalC.filter((i) => i.empresa.includes(clienteSeleccionado))
    let descripcionFiltrada = clientesFiltrados.filter((i) => i.descripcion.includes(descipcionSeleccionada))
    let clienteEncontrado = descripcionFiltrada[0]

    let resp = confirm("Seleccionaste al cliente " + clienteEncontrado.empresa + " - " + clienteEncontrado.descripcion + " Desea finalizar el trabajo de este cliente?")

    if (resp) {

        let indiceClientes = arrayLocalC.indexOf((arrayLocalC.find((i) => i.descripcion == descipcionSeleccionada && i.empresa == clienteSeleccionado)))
        arrayLocalC[indiceClientes].activo = false

        let arrayLocalC_string = JSON.stringify(arrayLocalC)
        localStorage.setItem(lista_de_clientes,arrayLocalC_string)

        alert("Trabajo finalizado correctamente. Tu ganancia del cliente " + arrayLocalC[indiceClientes].empresa + " fue de $" + arrayLocalC[indiceClientes].presupuesto )

    } 

    return false

})

