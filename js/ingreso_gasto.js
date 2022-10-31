// Creacion de variables para usar en el evento de click

let buscarClienteIn = document.getElementById("buscarCliente")
let buscarDescripcionIn = document.getElementById("buscarDescripcion")
let montoIn = document.getElementById("Monto")
let comentarioIn = document.getElementById("Comentario")
let botonMonto = document.getElementById("botonMonto")

lista_de_clientes = "listadoClientes"

// creacion de arrays para la pagina de registro de monto

let arregloClientes = new Array

let arrayLocalC = JSON.parse(localStorage.getItem(lista_de_clientes))

arrayLocalC.forEach( (i) => {
arregloClientes.push(arrayLocalC[i].empresa)
})
console.log(arregloClientes)


let arregloDescripciones = new Array

let arrayLocalD = JSON.parse(localStorage.getItem(lista_de_clientes))

for (i=0 ; i > arrayLocalD.lengh ; i++) {

    arregloDescripciones.push(arrayLocalD[i].descripcion)

}


// Evento de click para agregar gastos

botonMonto.addEventListener("click", (e) => {

    e.preventDefault()

    let buscarCliente = buscarClienteIn.value
    let buscarDescripcion = buscarDescripcionIn.value
    let monto = montoIn.value
    let comentario = comentarioIn.value


})




/* let nuevoID = 1 ;

agregarNuevoID("Banchero", "Armado de muebles", 42000)

let respuestaGasto = confirm("Desea agregar un nuevo gasto?")

if(respuestaGasto) {

ingresarGasto()

} else {

    alert("Gracias por usar nuestro sistema")

} */
