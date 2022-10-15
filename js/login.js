
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
    let n = 0 ;

    if (verificadorDatos(usuario, password)) {

        alert("bienvenido" + " " + usuario)

    } else while (verificadorDatos(usuario, password) !== true || n <= 2) {

        alert("usuario y/o contraseña incorrectos")

        usuario = prompt("Ingrese su usuario") ;

        password = prompt("ingrese su password") ; 

        if (verificadorDatos(usuario,password)) {

            alert("bienvenido" + " " + usuario)
            return true

        } else {
            
            n++
            console.log (n)
            
            if (n >= 3 && verificadorDatos(usuario, password) == false) {

                alert ("Intente mas tarde")
                return false
    
            }
        } 
    }

        

}

function verificadorDatos(usuario,password) {

    if (user1.user === usuario && user1.pass === password) {

        return true ;

    } else {

        return false ;

    }
}

solicitarDatos()