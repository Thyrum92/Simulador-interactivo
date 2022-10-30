// Agregar gastos

let buscarClienteIn = document.getElementById("buscarCliente")
let buscarIDIn = document.getElementById("buscarID")
let montoIn = document.getElementById("Monto")
let comentarioIn = document.getElementById("Comentario")
let botonMonto = document.getElementById("botonMonto")

botonMonto.addEventListener("click", (e) => {

    e.preventDefault()

    let buscarCliente = buscarClienteIn.value
    let buscarID = buscarIDIn.value
    let monto = montoIn.value
    let comentario = comentarioIn.value

    validadorDatosMonto(buscarCliente,buscarID,monto,comentario)



})




/* let nuevoID = 1 ;

agregarNuevoID("Banchero", "Armado de muebles", 42000)

let respuestaGasto = confirm("Desea agregar un nuevo gasto?")

if(respuestaGasto) {

ingresarGasto()

} else {

    alert("Gracias por usar nuestro sistema")

} */
