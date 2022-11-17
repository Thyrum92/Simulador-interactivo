let inputCliente = document.getElementById("cliente")
let inputTrabajo = document.getElementById("trabajo")
let inputPresupuesto = document.getElementById("presupuesto")
let botonIngreso = document.getElementById("botonIngreso")

// Evento de click para ingresar un cliente nuevo en la base de datos

botonIngreso.addEventListener("click", async (e) => {

    e.preventDefault()

    let empresa = inputCliente.value
    let descripcion = inputTrabajo.value
    let presupuesto = inputPresupuesto.value

    if (await validadorDatosCliente(empresa,descripcion,presupuesto)) {

        let nuevo_cliente = new Client(empresa,descripcion,presupuesto)
        let client_new = new Cliente(nuevo_cliente)

        await registrarClienteNuevo(client_new)
        alert("Cliente creado correctamente")
    }
})
