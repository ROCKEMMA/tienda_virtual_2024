async function cargar_categorias(){

    try{
        let obtener_categorias = await fetch('https://fakestoreapi.com/products/categories');
        let categorias = await obtener_categorias.json();
        imprimir_categorias(categorias);
    }catch{
        console.log("error");
    }
}


function imprimir_categorias(lista_categorias){

    let div_informacion = document.querySelector("#category_menu");

    lista_categorias.forEach(element => {
        
        let div = document.createElement("div");
        div.innerHTML = `
            <input type="checkbox" id="${element}">
            <label for="${element}">${element}</label>
        `;
        div_informacion.appendChild(div);
    });

}

export { cargar_categorias }