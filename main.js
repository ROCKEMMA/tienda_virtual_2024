// COMPONENTES DE LA TIENDA
import { Cargar_categorias } from "./Cargar_categorias/cargar_categorias.js";
import { cargar_header } from "./cargar_header/cargar_header.js";
import { Cargar_productos } from "/cargar_productos/cargar_productos.js";

let DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header></header>
    <section id="category_menu"></section>
    <main id="div_product_list"></main>
    <footer></footer>
`;

async function cargar_productos(){
    try{
        let obtener_datos = await fetch("https://fakestoreapi.com/products");
        let datos = await obtener_datos.json();
        Cargar_productos(datos);
    }catch{
        console.log("error");
    }
}

// ETAPAS DE CARGA DEL LA TIENDA
cargar_productos();
Cargar_categorias();
cargar_header();