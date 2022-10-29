let nuevoID = 1 ;

let inputCliente = document.getElementById("cliente")
let inputTrabajo = document.getElementById("trabajo")
let inputPresupuesto = document.getElementById("presupuesto")
let botonIngreso = document.getElementById("botonIngreso")

botonIngreso.addEventListener("click", () => {

    let empresa = inputCliente.value
    let trabajo = inputTrabajo.value
    let presupuesto = parseFloat(inputPresupuesto.value)

    if (empresa == "") {

        alert("Ingrese un cliente")

    } else if (trabajo == "") {

        alert("Ingrese la descripcion del trabajo")

        } else if (presupuesto == NaN || presupuesto == "") {

            alert("El presupuesto tiene que ser un numero")

        } else {

        solicitarDatosCliente(empresa, trabajo, presupuesto)

}
})
