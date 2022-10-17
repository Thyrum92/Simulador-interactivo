class Usuario{

    constructor (user,pass) {

        this.user = user ;
        this.pass = pass ;

    }

}

class Cliente {

    constructor (empresa, descripcion, presupuesto) {

        this.empresa = empresa ;
        this.descripcion = descripcion ;
        this.presupuesto = parseInt(presupuesto) ;
        this.id = -1 ;

    }

    mostrarDatosIngresados() {

        return (this.id + " - " + this.empresa + " - " + this.descripcion + " - $" + this.presupuesto) ;
    
    }
    
    
    setID(nuevoID) {
    
        this.id = nuevoID ;
    
    }

}

class Gasto {

    constructor (descripcionGasto , gasto) {

        this.descripcionGasto = descripcionGasto ;
        this.gasto = gasto ;

    }

}