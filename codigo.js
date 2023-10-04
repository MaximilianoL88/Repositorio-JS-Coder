//Array de productos

const productos=[
    {
        id: 1 ,
        nombre:"Papines", 
        precio: 1500 , 
        imagen:"img/papines 4.jpg"
    },
    {
        id: 2 , 
        nombre:"P. noissette", 
        precio: 2000 , 
        imagen:"img/Papines.jpg"
    },
    {
        id: 3 , 
        nombre:"Mini papa", 
        precio: 1000 , 
        imagen:"img/papas15.jpeg"
    },
    {
        id: 4 , 
        nombre:"P. consumo", 
        precio: 900 , 
        imagen:"img/papines 4.jpg"
    },
    {
        id: 5 , 
        nombre:"Papines andinos", 
        precio: 1900 , 
        imagen:"img/papas 12.jpeg"
    },
    {
        id: 6 , 
        nombre:"Papas del sudeste", 
        precio: 1500 , 
        imagen:"img/papines 5.jpg"
    },
    {
        id: 7 , 
        nombre:"Papas de Córdoba", 
        precio: 1800 , 
        imagen:"img/papas16.jpeg"
    },
    {
        id: 8 , 
        nombre:"Papas patagónica", 
        precio: 3000 , 
        imagen:"img/papines 2.jpg"
    },
    {
        id: 9 , 
        nombre:"Papas copetin", 
        precio: 4000 , 
        imagen:"img/papas14.jpeg"
    },
    {
        id: 10 , 
        nombre:"Papas especiales", 
        precio: 2700 , 
        imagen:"img/papas17.jpg"
    },
    {
        id: 11 , 
        nombre:"Papas selecionadas", 
        precio: 1900 , 
        imagen:"img/papas18.jpeg"
    },
    {
        id: 12 , 
        nombre:"Papas premium", 
        precio: 5000 , 
        imagen:"img/papas15.jpeg"
    },
];

//guardo en variables los diferentes botones
let cards=document.getElementById("cards1");
let finalizar=document.getElementById("terminar");
let borrarTotal=document.getElementById ("borrar");

//Renderizando los objetos del array
function rendderizar(listado){
    for(const prod of listado){
        cards.innerHTML+=`
                <div class="fotoTienda col-12 col-sm-6 col-lg-3" > 
                    <div class="imgT"> 
                    <img src="${prod.imagen}" class="imgProducto" alt="papines">
                    </div>            
                    <div id="precio2">
                        <p class="precio">${prod.nombre}</p>
                        <p class="precio">$ ${prod.precio}</p>
                        <button id=${prod.id} type="button" class="btn btn-success boton">Comprar</button>
                    </div>
                </div> 
        `;
    }
    //Tomando los botones de los productos en una variable
    let botones= document.getElementsByClassName("boton");

    //Tomando la seccion donde van a ir nuestras cards
    let tablaC=document.getElementById("tablaC");

    //for of para que cada vez que se clickea el boton find busca el producto y a traves de la funcion se agrega al carrito
    for(const button of botones){
        button.addEventListener("click",()=>{
            console.log("hiciste click en el id "+ button.id);
            const carrito=listado.find((prod)=>prod.id==button.id);
            console.log(carrito)
            agregarACarro(carrito);
        })
        button.onmouseover=()=>button.classList.replace ("btn-success", "btn-warning");
        button.onmouseout=()=>button.classList.replace ("btn-warning","btn-success");
    }
};

rendderizar(productos);

// carrito para guardar los productos y si se cierra la sesión recuperarlos del localStorage
let carroDeCompras=JSON.parse(localStorage.getItem("compra")) || [];

//Funcion que va a pushear los productos seleccionados al carrito
function agregarACarro(prod){
    carroDeCompras.push(prod);
    console.table(carroDeCompras);
    let total=carroDeCompras.reduce((acum,prod)=>acum+prod.precio,0);
    Swal.fire(
        "Excelente!!!",
        "Agregaste"+" "+prod.nombre+" al carro",
        "success"
        )
//Plantilla que vamos a insertar en el carrito cada vez que se seleccione un producto
    tablaC.innerHTML+=` 
                <tr>
                    <td class="carrito10" scope="row">${prod.id} </td>
                    <td class="carrito10">${prod.nombre} </td>
                    <td class="carrito10">$ ${prod.precio} </td>                    
                </tr>
    `; 
    
    document.getElementById("totalCompra").innerText="TOTAL: $ "+total;

//Guardando informacion en el local storage
    localStorage.setItem("compra",JSON.stringify(carroDeCompras));
};

//Recuperamos los productos del carrito abandonado
function recuperarCarro () {
    for (const prod of carroDeCompras) {
        let total=carroDeCompras.reduce((acum,prod)=>acum+prod.precio,0);
        tablaC.innerHTML+=` 
                <tr>
                    <td class="carrito10" scope="row">${prod.id} </td>
                    <td class="carrito10">${prod.nombre} </td>
                    <td class="carrito10">$ ${prod.precio} </td>                    
                </tr>
    `; 
    document.getElementById("totalCompra").innerText="TOTAL: $ "+total;
    }
}

//evaluamos el estado del carro
if (carroDeCompras.length != 0) {
    recuperarCarro();
}
//Boton para finalizar la compra
finalizar.onclick=()=>{
    Swal.fire("Gracias por tu compra!!!",
                "🙌",
                "success"          
    );
    carroDeCompras=[];
    tablaC.innerHTML='';
    document.getElementById("totalCompra").innerText="TOTAL:"+"";
    localStorage.removeItem("compra");
};

//Boton para vaciar carrito
borrarTotal.onclick=()=>{
    carroDeCompras=[];
    tablaC.innerHTML='';
    document.getElementById("totalCompra").innerText="TOTAL:"+"";
    Swal.fire(
        "Atención ❌",
        "Has vaciado tu carrito.",
        );
    localStorage.removeItem("compra");
}

/* let botonFormulario=document.getElementById(btnEnviar);
btnEnviar.addEventListener("click",guardarInfo);
function guardarInfo(){

}; */

let usuNombre = document.getElementById("nombre");
let usuDNI = document.getElementById("documento");
let usuCorreo = document.getElementById("correo");
let usuClave = document.getElementById("clave");







usuNombre.onkeyup =()=>{
    if(usuNombre.value.length < 3){
        usuNombre.style.color = "red";
    }else{
        usuNombre.style.color = "black";
    }
}
usuDNI.onkeyup=()=>{
    if(usuDNI.value.length <7){
        document.getElementById("msj").innerText="Ingrese DNI valido!"
        msj.style.color="red"
    }else{
        document.getElementById("msj").innerText=""
    }
}

usuCorreo.onkeyup=()=>{
    if((!usuCorreo.value.includes("@"))||(!usuCorreo.value.includes("."))){
    document.getElementById("msj2").innerText="El correo no es válido"
    msj2.style.color="red"
    }else{
    document.getElementById("msj2").innerText=""
}
}

usuClave.onkeyup=()=>{
    if(usuClave.value.length <7 ){
        document.getElementById("msj3").innerText="Ingrese clave de más de 6 digitos"
        msj3.style.color="red"
    }else{
        document.getElementById("msj3").innerText=""
    }
}

const formulario = document.getElementById("form");


formulario.addEventListener("submit", enviar);

const btnGuardarDatos= document.getElementById("btnG");

btnGuardarDatos.addEventListener("click", guardarD);


function enviar(dato){
    if((usuNombre.value=="")||(usuDNI.value=="")||(usuCorreo.value=="")||(usuClave.value=="")||
        (usuNombre.value.length<3)||(usuDNI.value.length<7)||(!usuCorreo.value.includes("@"))||
        (!usuCorreo.value.includes("."))||(usuClave.value.length<7)){       
        document.getElementById("msj10").innerText= "Formulario incompleto!!"
        msj10.style.color="red"
        dato.preventDefault();      
    }
}

function guardarD(){
    if((usuNombre.value=="")||(usuDNI.value=="")||(usuCorreo.value=="")||(usuClave.value=="")||
        (usuNombre.value.length<3)||(usuDNI.value.length<7)||(!usuCorreo.value.includes("@"))||
        (!usuCorreo.value.includes("."))||(usuClave.value.length<7)){       
        document.getElementById("msj11").innerText= "Datos erroneos!!"
        msj11.style.color="red"
    }else(
        guardarDatos(),
        document.getElementById("msj11").innerText= ""
    )
}

function guardarDatos(){
    const baseDeDatos="https://jsonplaceholder.typicode.com/posts"
    const datosAGuardar={
        id: usuClave.value ,
        title: usuNombre.value ,
        body: usuCorreo.value ,
        userId: usuDNI.value ,
        
    }
    
    fetch (baseDeDatos,{
        method: "POST",
        body:JSON.stringify(datosAGuardar),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
        }
    })
    .then((respuesta) => respuesta.json())
    .then((json) => {
        console.log(json);
        let resultadoD= json
        console.table(resultadoD)
        for(const datos of resultadoD){
        document.getElementById("dato").innerHTML+=
        `
            <tr>
                <td>${datos.id} </td>
                <td>${datos.title} </td>
                <td>${datos.body} </td>
                <td>${datos.userId} </td>
            </tr>
        `;
        }
    } )
    .catch((error)=>console.log("error" ,error))
}

setTimeout(()=>{
    Swal.fire({
        title: "Bienvenido a nuestra tienda 🛒",
        imageUrl: "https://static4.depositphotos.com/1000586/340/i/950/depositphotos_3409424-stock-photo-potato-field-on-a-sunset.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        })
}, 2000)


