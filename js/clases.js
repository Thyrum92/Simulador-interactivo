
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

    constructor (empresa, descripcion, presupuesto) {

        this.empresa = empresa ;
        this.descripcion = descripcion ;
        this.presupuesto = parseInt(presupuesto) ;
        this.id = -1 ;
        this.activo = -1;

    }
    
    setID(nuevoID) {
    
        this.id = nuevoID ;
        this.activo = true ;
    
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

    constructor (descripcionGasto , gasto) {

        this.descripcionGasto = descripcionGasto ;
        this.gasto = parseInt(gasto) ;

    }

}

// Arreglos

const listaClientes = new Array() ;

const listaGastos = new Array() ;
