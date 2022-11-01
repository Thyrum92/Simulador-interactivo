// Creacion de variables para usar en el evento de click
const lista_de_gastos = "listadoGastos"
let buscarClienteIn = document.getElementById("buscarCliente")
let buscarDescripcionIn = document.getElementById("buscarDescripcion")
let montoIn = document.getElementById("Monto")
let comentarioIn = document.getElementById("Comentario")
let botonMonto = document.getElementById("botonMonto")

lista_de_clientes = "listadoClientes"

// aca estoy creando un array para usar como opciones a la hora de buscar un cliente en el formulario.

let arregloClientes = new Array

let arrayLocalC = JSON.parse(localStorage.getItem(lista_de_clientes)) || []

arrayLocalC.forEach( (i) => {
arregloClientes.push(i.empresa)

})

// aca estoy creando la funcion que se encarga de mostrarme las opciones del array de ingreso_gasto.js y la ejecuto.

function opcionesClientes(array, label) {

    let elementos = "<option selected disables>--Seleccione--</option>"

    for (let i=0; i < array.length; i++) {
        elementos += '<option value="' + array[i] +'">' + array[i] +'</option>'

    }

    console.log(elementos)
    label.innerHTML = elementos

}
opcionesClientes(arregloClientes, buscarClienteIn)

let arregloDescripciones = new Array

let arrayLocalD = JSON.parse(localStorage.getItem(lista_de_clientes)) || []

for (i=0 ; i > arrayLocalD.lengh ; i++) {

    arregloDescripciones.push(i.descripcion)

}

// Evento de cambio para que impacte en la label de descripcion

buscarClienteIn.addEventListener("change", () => {

    let valor = buscarClienteIn.value
    let arrayBuscado = arrayLocalC.filter((e) => e.empresa.includes(valor))
    let opcionesEncontradas = new Array

    arrayBuscado.forEach( (i) => {
        opcionesEncontradas.push(i.descripcion)
    })
    
    opcionesClientes(opcionesEncontradas, buscarDescripcionIn)

})



// Evento de click para agregar gastos al cliente y descipcion seleccionados

botonMonto.addEventListener("click", (e) => {

    e.preventDefault()

    let empresa = buscarClienteIn.value
    let descripcion = buscarDescripcionIn.value
    let gasto = parseFloat(montoIn.value)
    let comentario = comentarioIn.value

    gasto || alert("tenes que ingresar tu gasto, el mismo tiene que ser un numero.")
    comentario || alert("Tiene que ingresar un comentario")

    const nuevo_gasto = new Gasto(empresa,descripcion,gasto,comentario)
    const listaGastos = new Gastos(nuevo_gasto)

    registrarGastoNuevo(listaGastos)

    console.log(listaGastos)

})




/* let nuevoID = 1 ;

agregarNuevoID("Banchero", "Armado de muebles", 42000)

let respuestaGasto = confirm("Desea agregar un nuevo gasto?")

if(respuestaGasto) {

ingresarGasto()

} else {

    alert("Gracias por usar nuestro sistema")

} */
