
// Clase usuario para login y registro de usuario

class Usuario{
    constructor(nuevo_user) {
        this.mail = nuevo_user.mail
        this.user = nuevo_user.user
        this.pass = nuevo_user.pass
    }
}

class User {
    constructor(mail,user,pass) {
        this.mail = mail
        this.user = user
        this.pass = pass
    }
}

// clase cliente para registro de cliente nuevo, buscador y registro de monto

class Cliente {

    constructor (nuevo_cliente) {

        this.empresa = nuevo_cliente.empresa
        this.descripcion = nuevo_cliente.descripcion
        this.presupuesto = nuevo_cliente.presupuesto
        this.id = nuevo_cliente.id
        this.activo = nuevo_cliente.activo

    }

    nuevoGasto(monto) {

        this.gasto = monto

    }

    mostrarDescripcion() {

        return (this.id + " - " + this.empresa + " - " + this.descripcion + " - " + this.presupuesto + " - " + this.activo)

    }

}

class Client {

    constructor(empresa,descripcion,presupuesto) {

        this.empresa = empresa
        this.descripcion = descripcion
        this.presupuesto = presupuesto
        this.id = -1
        this.activo = -1

    }

    setID(nuevoID) {

        this.id = nuevoID
        this.activo = true

    }

    mostrarDescripcion() {

        return (this.id + " - " + this.empresa + " - " + this.descripcion + " - " + this.presupuesto + " - " + this.activo)

    }

}


//clase gasto para ingresar gastos por usuario

class Gasto {

    constructor (empresa, descripcion, gasto , descripcionGasto) {

        this.empresa = empresa;
        this.descripcion = descripcion;
        this.gasto = gasto ;
        this.descripcionGasto = descripcionGasto ;
        
    }

    mostrarGasto() {

        return ("ingresaste " + this.empresa + " - " + this.descripcion + " $" + this.gasto + " que corresponde a " + this.descripcionGasto)

    }

}

class Gastos {
    constructor(nuevo_gasto) {

        this.empresa = nuevo_gasto.empresa;
        this.descripcion = nuevo_gasto.descripcion;
        this.gasto = nuevo_gasto.gasto
        this.descripcionGasto = nuevo_gasto.descripcionGasto

    }
}

// Arreglos

const listaClientes = new Array() ;
