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

class Gasto {

    constructor (descripcionGasto , gasto) {

        this.descripcionGasto = descripcionGasto ;
        this.gasto = parseInt(gasto) ;

    }

}

// Arreglos

const listaClientes = new Array() ;

const listaGastos = new Array() ;