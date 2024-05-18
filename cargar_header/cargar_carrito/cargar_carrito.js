/**
 * LLAMADO A LA API
 * 
 * La función cargarCarrito se encarga de realizar una solicitud a la API para obtener los datos del carrito de un usuario.
 * Utiliza fetch para hacer la petición GET al endpoint de la API y obtiene el carrito con el ID especificado.
 * Retorna los datos del carrito en formato JSON.
 * En caso de error durante la solicitud, captura la excepción, imprime un mensaje de error en la consola y retorna un arreglo vacío.
 * 
 * @param {number} id_carrito - El ID del carrito que se desea cargar.
 * @returns {Promise<Object>} - Una promesa que resuelve con los datos del carrito o un arreglo vacío en caso de error.
 */
async function cargarCarrito(id_carrito){
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/carts/${id_carrito}`);
        const datos = await respuesta.json();
        return datos;
    }catch{
        console.log("Error de la api");
        return [];
    }
}

/**
 * COMPONENTE DEL DOM
 * 
 * La función itemProducto crea y retorna un elemento de tipo div que representa un producto en el carrito.
 * Recibe la URL de la imagen y el precio del producto como parámetros.
 * Crea una estructura HTML con la imagen del producto, el precio y un botón para eliminar el producto del carrito.
 * 
 * @param {string} img - URL de la imagen del producto.
 * @param {number} precio - Precio del producto.
 * @returns {HTMLElement} - Un elemento div que representa un producto en el carrito.
 */
function itemProducto(img, precio) {
    const div_item_cart = document.createElement('div');
    div_item_cart.className = "item-cart";
    
    const caja_img = document.createElement('div');
    caja_img.classList = "caja_img";
    const imagen_cart = document.createElement('img');
    imagen_cart.src = img;
    caja_img.appendChild(imagen_cart);

    const cart_precio = document.createElement('p');
    cart_precio.textContent = "Q " + precio;

    const btn_eliminar = document.createElement("div");
    btn_eliminar.classList = "btn-eliminar";
    btn_eliminar.textContent = "Eliminar";

    div_item_cart.appendChild(caja_img);
    div_item_cart.appendChild(cart_precio);
    div_item_cart.appendChild(btn_eliminar);

    return div_item_cart;
}

/**
 * COMPONENTE DEL DOM
 * 
 * La función mostrarCarrito se encarga de mostrar los productos del carrito en el DOM.
 * Recibe una lista de productos (inventario) como parámetro.
 * Carga los datos del carrito del usuario utilizando la función cargarCarrito.
 * Itera sobre los productos del carrito y el inventario, y añade al DOM los productos que están en el carrito.
 * 
 * @param {Promise<Array>} lista_productos - Una promesa que resuelve con la lista de productos disponibles (inventario).
 */
async function mostrarCarrito(lista_productos) {
    try {
        const inventario = await lista_productos;
        const carrito_usuario = await cargarCarrito(1); // < -- {}
        const usuario = carrito_usuario.userId;
        const fecha = carrito_usuario.date;
        const productos = carrito_usuario.products;

        const div_carrito_ventana = document.querySelector(".ventana-carrito");

        productos.forEach(element => {
            inventario.forEach((producto) => {
                if (producto.id == element.productId) {
                    div_carrito_ventana.appendChild(itemProducto(producto.image, producto.price));
                }
            });
        });

    } catch {
        console.log("error al mostrar el carro");
    }
}

export { mostrarCarrito }
