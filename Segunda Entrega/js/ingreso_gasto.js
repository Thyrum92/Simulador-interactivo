// Agregar gastos

let nuevoID = 1 ;

agregarNuevoID("Banchero", "Armado de muebles", 42000)

let respuestaGasto = confirm("Desea agregar un nuevo gasto?")

if(respuestaGasto) {

ingresarGasto()

} else {

    alert("Gracias por usar nuestro sistema")

}
