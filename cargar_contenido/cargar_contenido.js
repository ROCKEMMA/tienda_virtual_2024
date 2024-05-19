import { cargar_categorias } from "./cargar_categorias/cargar_categorias.js";
import { cargarProductos } from "./cargar_productos/cargar_productos.js";

function cargar_contenido(inventario){

    const div_contenido = document.querySelector(".contenido");

    const div_categorias = document.createElement("div");
    div_categorias.id = "menu_categorias";

    const seccion_productos = document.createElement('section');
    seccion_productos.id = "div_product_list";

    div_contenido.appendChild(div_categorias);
    div_contenido.appendChild(seccion_productos);


    cargar_categorias();
    cargarProductos(inventario);
}

export { cargar_contenido }