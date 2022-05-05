function printProducts(arreglo, contenedor){
    contenedor.innerHTML = "";
    arreglo.forEach(element=> {
        const {id, productname, imagen, precio} = element;
        const div = document.createElement("div");
        div.classList.add("productos");
        div.setAttribute('id', id);

        div.innerHTML += `
        <img src="${imagen}" alt="${productname}">
            <div class="info-producto">
                <h1>${productname}</h1>
                <span>$ ${parseInt(precio).toLocaleString()}</span>
                <button id="${id}" class="irDetalle">Ver producto</button>
            </div>`
        
        contenedor.appendChild(div);
    });
}

export default printProducts; 
    