let gastoTotal = 0


//Funcion para sumar compra del usuario
function sumarTotalCompra(precioProducto){
    gastoTotal=gastoTotal + precioProducto;
}
//Función descuento en compra
function descontar(total, porcentaje){
    let descuento= total - total * (porcentaje/100);
    return descuento;
}

//Función de bienvenida
function bienvenida(){
    let nombre = prompt("Ingresa tu nombre");
      alert("Hola, "+ nombre +" !!!"+" Bienvenido/a a nuestra tienda online");
}
bienvenida();

//Variable productos
let producto=parseInt(prompt("Ingresa el número del producto a comprar\n\nPRODUCTOS\n\n1- Papines x kg. ----$1000\n2- Mini papa x kg. ----$1100\n3- Papas noissette x kg. ----$1200\n4- Papa andina x kg. ----$1300\n5- Papa sudeste x kg. ----$1400\n0- Ver total"));

//Ciclo con condicional
while (producto !=0){
    switch(producto){
        case 1:
            alert("Agregaste Papines x kg. ----$1000 🙌 ");
            sumarTotalCompra(1000)
            break;
        case 2:
            alert("Agregaste Mini papa x kg. ----$1100 🙌");
            sumarTotalCompra(1100)
            break;
        case 3:
            alert("Agregaste Papas noissette x kg. ----$1200 🙌");
            sumarTotalCompra(1200)
            break;
        case 4:
            alert("Agregaste Papa andina x kg. ----$1300 🙌");
            sumarTotalCompra(1300)
            break;
        case 5:
            alert("Agregaste Papa sudeste x kg. ----$1400 🙌");
            sumarTotalCompra(1400)
            break; 
         default:
            alert("Producto no encontrado 🔍");     
    }
    producto=parseInt(prompt("Ingresa el numero del producto a comprar\n\nPRODUCTOS\n\n1- Papines x kg. ----$1000\n2- Mini papa x kg. ----$1100\n3- Papas noissette x kg. ----$1200\n4- Papa andina x kg. ----$1300\n5- Papa sudeste x kg. ----$1400\n0- Ver total"));
}

alert("El total de tu compra es $"+gastoTotal)

let medioDePago=parseInt(prompt("Consulte descuentos según forma de pago\n\n1-Efectivo\n2-Tarjeta de débito\n3-Tarjeta de crédito\n0-Finalizar"))

while(medioDePago !=0){
    switch(medioDePago){
        case 1:
            let descuentoConEfectivo= descontar (gastoTotal, 30)
            alert("Tu compra abonando en efectivo tiene un descuento del 30%, debes abonar $"+ descuentoConEfectivo );
            break;
        case 2:
            let descuentoConDebito= descontar (gastoTotal, 20)
                alert("Tu compra abonando con débito tiene un descuento del 20%, debes abonar $"+ descuentoConDebito );
                break;
        case 3:
            let descuentoConCredito= descontar (gastoTotal, 5)
            alert("Tu compra abonando con crédito tiene un descuento del 5%, debes abonar $"+ descuentoConCredito );
            break;  
        default:
            alert("error ❌")  
    }
    medioDePago=parseInt(prompt("Consulte descuentos según forma de pago\n\n1-Efectivo\n2-Tarjeta de débito\n3-Tarjeta de crédito\n0-Finalizar"))
    }