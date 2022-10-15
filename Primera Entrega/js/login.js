
/** Pedido de datos para login **/
const user = "fede"
const pass = "1234"

function solicitarDatos() {

    let usuario = prompt("Ingrese su usuario") ;
    let password = prompt("ingrese su password") ;
    let n = 1 ;

    if (verificadorDatos(usuario,password)) {
        
    
    }  else while (n <= 2) { 

        usuario = prompt("Ingrese su usuario") ;

        password = prompt("ingrese su password") ; 

        verificadorDatos(usuario,password) ;

        n++

        console.log (n)

        if (n === 3 & user !== usuario && pass !== password) {
            alert ("Intente mas tarde")
            false
        }

    } 

}

function verificadorDatos(usuario,password) {

    if (user === usuario && pass === password) {
        alert("bienvenido" + " " + usuario)
        return true ;
    } else {
        alert("usuario y/o contraseña incorrectos")
        return false ;
    }
}


solicitarDatos()