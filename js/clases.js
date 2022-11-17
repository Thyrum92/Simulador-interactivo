// Declaracion de constantes de API de registro de users, clientes y gastos
/**
 * apiReg: Api para registro de usuarios
 * apiRegClient: Api para registro de clientes
 * apiGastos: Api para registro de gastos
 */
const apiReg = "https://sheet.best/api/sheets/5a65b8be-acd1-4263-bbc9-c946d0b379e3"
const apiRegClient = "https://sheet.best/api/sheets/68f83d4b-9cec-4fef-b014-ae4d6a8f50d1"
const apiGastos = "https://sheet.best/api/sheets/45fcc54b-bea4-4949-9090-3edfa959b738"

// Clase usuario para login y registro de usuario

class Usuario{
    constructor(nuevo_user) {
        this.user = nuevo_user.user
        this.pass = nuevo_user.pass
    }
}

class User {
    constructor(user,pass) {
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
        this.activo = nuevo_cliente.activo

    }

}

class Client {

    constructor(empresa,descripcion,presupuesto) {

        this.empresa = empresa
        this.descripcion = descripcion
        this.presupuesto = presupuesto
        this.activo = true

    }

}


//clase gasto para ingresar gastos por usuario

class Gasto {

    constructor (cliente, descripcion, gasto , comentario) {

        this.cliente = cliente;
        this.descripcion = descripcion;
        this.gasto = gasto ;
        this.comentario = comentario ;
        
    }

}

// Arreglos

const listaClientes = new Array() ;


