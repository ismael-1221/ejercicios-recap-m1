//Pregunta la edad al usuario. Si tiene 18 años o más, muestra un mensaje que diga "Puedes votar".
let edad = prompt("Porfavor ingrese su edad");
edad = Number(edad)
if(edad>=18){
    alert("usted puede votar")
}else{
    alert("usted no puede votar")
}