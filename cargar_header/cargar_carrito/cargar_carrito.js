// LLAMADO A LA API
async function cargarCarrito(){
    try{
        const respuesta = await fetch('https://fakestoreapi.com/carts/user/2');
        const datos = await respuesta.json();
        return datos;
    }catch{
        console.log("Error de la api");
        return [];
    }
}


function itemProducto(img,nombreProducto,precio){

    const div_item_cart = document.createElement('div');
    
    const cart_imagen = document.createElement('img');
    cart_imagen.src = img;
    cart_imagen.alt = nombreProducto;

    const cart_nombre = document.createElement('p');
    cart_nombre.textContent = nombreProducto;

    const cart_precio = document.createElement('p');
    cart_precio.textContent = precio;


    div_item_cart.appendChild(cart_imagen);
    div_item_cart.appendChild(cart_nombre);
    div_item_cart.appendChild(cart_precio);

    return div_item_cart;
}

// COMPONENTE DEL DOM
async function mostrarCarrito(lista_productos){
    try{
        const products = await lista_productos;
        
        let div_carrito_ventana = document.querySelector(".div-carrito_ventana");
        const div_carrito = document.createElement('div');
        div_carrito.className = "ventana-carrito";
        
        div_carrito_ventana.appendChild(div_carrito);
        div_carrito.appendChild(itemProducto("hola","hola",10));

    }catch{
        console.log("error al mostrar el carro")
    }
}



export { mostrarCarrito }