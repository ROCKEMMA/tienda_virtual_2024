// COMPONENTES DE LA TIENDA
import { cargar_header } from "./cargar_header/cargar_header.js";
import { cargar_contenido } from "./cargar_contenido/cargar_contenido.js";
//import { cargarProductos } from "./cargar_productos/cargar_productos.js";

const DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header></header>
    <main class="contenido"></main>
    <footer></footer>
`;

// INVENTARIO DE PRODUCTO
async function obtener_inventario_api(){
    try{
        let obtener_datos = await fetch("https://fakestoreapi.com/products");
        let datos = await obtener_datos.json();
        return datos;
    }catch(error){
        console.log("Error al cargar los productos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}

// CONTENIDO
cargar_header(obtener_inventario_api(),1);
cargar_contenido(obtener_inventario_api());