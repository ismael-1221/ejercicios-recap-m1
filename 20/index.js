const calIva = (precio)=>{
    let iva = precio*0.12;
    let precioTotal = precio + iva
    return precioTotal;
}
let precio = 50;
let total = calIva(precio);
console.log(`El precio total con IVA es: ${total}`)
alert(`El precio total con IVA es: ${total}`)