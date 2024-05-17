// COMPONENTES DE LA TIENDA
import { cargar_categorias } from "./cargar_categorias/cargar_categorias.js";
import { cargar_header } from "./cargar_header/cargar_header.js";
import { cargarProductos } from "./cargar_productos/cargar_productos.js";

let DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header></header>
    <section id="category_menu"></section>
    <main id="div_product_list"></main>
    <footer></footer>
`;

async function cargar_productos_api(){
    try{
        let obtener_datos = await fetch("https://fakestoreapi.com/products");
        let datos = await obtener_datos.json();
        return datos;
    }catch(error){
        console.log("Error al cargar los productos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}


// ETAPAS DE CARGA DEL LA TIENDA
cargarProductos(cargar_productos_api());
cargar_categorias();
cargar_header(cargar_productos_api());