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

        } else while (n <= 3 || validarID(id) !== true) {

            alert("Este id no se encuentra registrado")
            id = prompt("Ingrese un ID Correcto")

            if (validarID(id)) {

                agregarGasto()

            } else {

                n++
                console.log(n)

                if (n >= 3 && validarID(id) == false) {

                    alert("Intente mas tarde")
                    return false
    
                }
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