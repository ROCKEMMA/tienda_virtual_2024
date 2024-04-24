import { Cargar_categorias } from "./Cargar_categorias/cargar_categorias.js";
import { Cargar_productos } from "/cargar_productos/cargar_productos.js";

let DOM = document.querySelector("#root");

DOM.innerHTML = `
    <header></header>
    <main class="body">
        <section id="div_product_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`;

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let productos_api = data;
        Cargar_productos(productos_api);
    })

Cargar_categorias();