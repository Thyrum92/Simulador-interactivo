
/** Pedido de datos para login **/

class Usuario{
    constructor (user,pass) {
        this.user = user
        this.pass = pass
    }
}

const user1 = new Usuario ("fede", "1234")

function solicitarDatos() {

    let usuario = prompt("Ingrese su usuario") ;
    let password = prompt("ingrese su password") ;
    let n = 1 ;

    let check = verificadorDatos(usuario, password)

    if (check) {
        
    
    }  else while (n <= 2) { 

        usuario = prompt("Ingrese su usuario") ;

        password = prompt("ingrese su password") ; 

        verificadorDatos(usuario,password) ;

        n++

        console.log (n)

        if (n === 3 && user1.user !== usuario && user1.pass !== password) {
            alert ("Intente mas tarde")
            false
        }

    } 

}

function verificadorDatos(usuario,password) {

    if (user1.user === usuario && user1.pass === password) {
        alert("bienvenido" + " " + usuario)
        return true ;
    } else {
        alert("usuario y/o contraseña incorrectos")
        return false ;
    }
}

solicitarDatos()