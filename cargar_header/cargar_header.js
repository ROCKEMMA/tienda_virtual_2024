function cargar_header(){
    
    let section_header = document.querySelector("header");
    section_header.innerHTML= `
        <div class="content">
            <h3>🛍️rm_store</h3>
            <img src="https://raw.githubusercontent.com/ROCKEMMA/img/56d2ab91eb05e6880d6700e60b1d09a22aa76022/ico_tienda/car.svg" alt="">
        </div>
    `;

}

export { cargar_header }