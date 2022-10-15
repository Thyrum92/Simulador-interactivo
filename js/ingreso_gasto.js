// Agregar gastos

class Cliente {
    constructor (id, empresa, descripcion, presupuesto) {
        this.id = id
        this.empresa = empresa
        this.descripcion = descripcion
        this.presupuesto = parseInt(presupuesto)
    }
}

class Gasto {
    constructor (descripcionGasto , gasto) {
        this.descripcionGasto = descripcionGasto
        this.gasto = parseInt(gasto)
    }
}



const cliente_1 = new Cliente (1, "banchero", "Armado de muebles", "42000")

 function agregarGastoACliente() {
    
    let agregarGasto = confirm("Desea agregar un gasto?")

    if (agregarGasto) {

        let id = prompt("Ingrese el ID del cliente")
        let n = 0

        if( id == cliente_1.id) {

            agregarGasto()

        } else while (n <= 2) {

            id = prompt("Ingrese un ID Correcto")

            validarID(id)

            n++

            if (n == 2) {

                alert("Intente mas tarde")
                return false

            }
    } 

    }
}

function validarID(id) {

    if (id == cliente_1.id) {

        alert("Ingresaste " + " # " + cliente_1.id + " " + cliente_1.empresa + " - " + cliente_1.descripcion )
        agregarGasto()
        return true

    } else {
        alert("id incorrecto")
        return false
    }

}

function agregarGasto() {

    const gasto_1 = new Gasto (

        prompt("Ingrese la descripcion del gasto") ,
        prompt("Ingrese el monto del gasto"))

        alert("Usted ingresó " + gasto_1.descripcionGasto + " con un monto de $" + gasto_1.gasto + " Queda disponible $" + (cliente_1.presupuesto - gasto_1.gasto))

}

agregarGastoACliente()