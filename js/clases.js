// clase cliente, es para agregar un nuevo cliente

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

//clase gasto para ingresar gastos por usuario

class Gasto {

    constructor (descripcionGasto , gasto) {

        this.descripcionGasto = descripcionGasto ;
        this.gasto = parseInt(gasto) ;

    }

}

// Clase usuario para login

class Usuario{
    constructor(nuevo_user) {
        this.mail = nuevo_user.mail
        this.user = nuevo_user.user
        this.pass = nuevo_user.pass
    }
}

// Arreglos

const listaClientes = new Array() ;

const listaGastos = new Array() ;