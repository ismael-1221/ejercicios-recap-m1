let num1 = prompt("Porfavor ingrese el primer número:");
let num2 = prompt("Porfavor ingrese el segundo número:");
num1 = Number(num1);
num2 = Number(num2);
function sum(a, b) {
    return a + b;
}
let result = sum(num1, num2);
alert("La suma de los dos números es: " + result);
