//Crea un programa que pregunte si el usuario tiene una cuenta y conoce la
//contraseña. Si ambas respuestas son afirmativas, muestra "Acceso concedido".
let cuenta = prompt("¿Tiene una cuenta? si/no");
if (cuenta === "si") { 
    let contraseña = prompt("¿Recuerda la contraseña? si/no");
    if (contraseña === "si") {
        alert("Acceso concedido.");
    } else {
        alert("Acceso denegado."); 
    }    
} else {
    alert("Acceso denegado."); 
}
