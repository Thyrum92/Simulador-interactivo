debugger
let inputCliente = document.getElementById("cliente")
let inputTrabajo = document.getElementById("trabajo")
let inputPresupuesto = document.getElementById("presupuesto")
let botonIngreso = document.getElementById("botonIngreso")

botonIngreso.addEventListener("click", (e) => {

    e.preventDefault()

    let empresa = inputCliente.value
    let descripcion = inputTrabajo.value
    let presupuesto = inputPresupuesto.value

    if (validadorDatosCliente(empresa,descripcion,presupuesto)) {

        let ID = 1
        let nuevo_cliente = new Client(empresa,descripcion,presupuesto)
        nuevo_cliente.setID(ID)
        let client_new = new Cliente(nuevo_cliente)

        registrarClienteNuevo(client_new)
        ID++
        alert("Cliente creado correctamente")
    }
})
