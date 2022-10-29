
debugger

let inputCliente = document.getElementById("cliente")
let inputTrabajo = document.getElementById("trabajo")
let inputPresupuesto = document.getElementById("presupuesto")
let botonIngreso = document.getElementById("botonIngreso")

botonIngreso.addEventListener("click", () => {

    let empresa = inputCliente.value
    let trabajo = inputTrabajo.value
    let presupuesto = inputPresupuesto.value

    if (validadorDatosCliente(empresa,trabajo,presupuesto)) {

        let nuevo_cliente = new Client(empresa,trabajo,presupuesto)
        let client_new = new Cliente(nuevo_cliente)

        registrarUsuarioNuevo(client_new)
        alert("Cliente creado correctamente")
    }
})
