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

 function agregarGasto() {
    
    let agregarGasto = confirm("Desea agregar un gasto?")

    if (agregarGasto) {

        let id = prompt("Ingrese el ID del cliente")
        let n = 1

        if( id == cliente_1.id) {

        const gasto_1 = new Gasto (

            prompt("Ingrese la descripcion del gasto") ,
            prompt("Ingrese el monto del gasto"))

            alert("Usted ingresó " + gasto_1.descripcionGasto + " con un monto de " + gasto_1.gasto + " pesos." + " Queda disponible " + cliente_1.presupuesto - gasto_1.gasto + " pesos.")

        } else {

            alert("Ingrese un ID Valido")
    } 

    }
}

agregarGasto()