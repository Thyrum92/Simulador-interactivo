class Usuario{
    constructor (user,pass) {
        this.user = user
        this.pass = pass
    }
}

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
        this.gasto = gasto
    }
}