const seleccion = document.querySelector("#seleccion");
const huevos = document.querySelector("#huevos");
const arroz = document.querySelector("#arroz");
const salsa = document.querySelector("#salsa");
const antipasto = document.querySelector("#antipasto");
const mostrarproducto = document.querySelector ("#mostrarproducto")
const selector = document.querySelector("#selector")
const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector ("#precio");
const borrar = document.querySelector ("#derechoboton")
const comprar = document.querySelector("#compras")
const Historia = document.querySelector("#textoFinal");
let precioTotal=0;

selector.addEventListener("change", () => {
    if(selector.value==="Panal de huevos"){
        agregarProducto(huevos.value);
    }else if (selector.value === "Arroz"){
        agregarProducto (arroz.value)
    } else if (selector.value==="Salsa Fruco"){
        agregarProducto(salsa.value);
    } else if (selector.value==="Antipasto"){
        agregarProducto(antipasto.value);
    }else{
        agregarProducto(seleccion.value)
    }

    precioTotal=+(selector.options[selector.selectedIndex].getAttribute('data-precio'));

   });

   cantidad.addEventListener("change", () => {
    calcularPrecio(cantidad.value)
  });

  borrar.addEventListener("click", () => {
  borrarTodo ();
  });

function borrarTodo (){
    selector.value=seleccion.value;
    cantidad.value = ""; 
    mostrarproducto.value = ""; 
    precio.value = ""; 
    precioTotal = 0; 
}


   function agregarProducto(product) {
    mostrarproducto.value = product; 
}

  comprar.addEventListener("click", () => {
        agregarcompra(selector.value, cantidad.value, precio.value);
        borrarTodo();
    
  });


function agregarcompra (producto, cantidad, precio){
    const compraHistorial = document.createElement("div");
    compraHistorial.textContent += `${producto} >>> Cantidad: ${cantidad} >>> ${precio}`;
    console.log(compraHistorial.textContent);
    Historia.appendChild(compraHistorial);
}

function calcularPrecio (cantidad){
    if(selector.value==="Panal de huevos"){
        precio.value = precioTotal*cantidad;
    }else if (selector.value === "Arroz"){
       precio.value= precioTotal*cantidad;
    } else if (selector.getAttribute('data-price')==="Salsa Fruco"){
       precio.value = precioTotal*cantidad;
    } else if (selector.value==="Antipasto"){
       precio.value= precioTotal*cantidad;
    }
    
}

