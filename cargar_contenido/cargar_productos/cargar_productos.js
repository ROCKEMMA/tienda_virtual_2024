function crearProductoHTML(product) {
    let shortText = product.title.split(' ').slice(0, 8).join(' ');

    // Crear elementos DOM
    let divItem = document.createElement('div');
    divItem.classList.add('item_product');

    let divBoxImg = document.createElement('div');
    divBoxImg.classList.add('box_img');
    let img = document.createElement('img');
    img.src = product.image;
    img.alt = "";
    divBoxImg.appendChild(img);

    let divBoxDescription = document.createElement('div');
    divBoxDescription.classList.add('box_description');
    let spanName = document.createElement('span');
    spanName.classList.add('name');
    spanName.textContent = shortText;
    let spanPrice = document.createElement('span');
    spanPrice.classList.add('price');
    spanPrice.textContent = `Q ${product.price}`;
    let divBuyBtn = document.createElement('div');
    divBuyBtn.classList.add('buy_btn');
    divBuyBtn.id = product.id;
    divBuyBtn.textContent = 'Comprar';
    divBoxDescription.appendChild(spanName);
    divBoxDescription.appendChild(spanPrice);
    divBoxDescription.appendChild(divBuyBtn);

    divItem.appendChild(divBoxImg);
    divItem.appendChild(divBoxDescription);

    return divItem;
}


async function cargarProductos(productos) {
    try {
        let productsList = await productos;
        let divProductList = document.querySelector("#div_product_list");

        productsList.forEach(product => {
            let productElement = crearProductoHTML(product);
            divProductList.appendChild(productElement);
        });
    } catch (error) {
        console.log("Error al obtener productos de la API:", error);
    }
}

export { cargarProductos };
