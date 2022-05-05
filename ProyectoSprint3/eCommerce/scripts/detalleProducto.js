import getData from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/helper/getdata.js";

//Visualizar contenido del detalle del producto seleccionado

let idProduct = JSON.parse(localStorage.getItem('verDetalle'));

async function details(id) {
    const url = "https://productos-sprint3.herokuapp.com/productos";
    const products = await getData(url);
    const seleccion = products.find(item => item.id === id);
    const containerDetail = document.querySelector('.detalle');

    const { imagen, productname, precio, descripcion } = seleccion;

    containerDetail.innerHTML = `<div class="imagen" id="${idProduct}">
                                    <img src="${imagen}" alt="${productname}">
                                </div>
                                <div>
                                    <h1>${productname}</h1>
                                    <h2>$${parseInt(precio).toLocaleString()}</h2>
                                    <p>${descripcion}</p>
                                    <div class="agregar"><input id="cant" type="number" required><button class="btnAgregar">Agregar al carrito</button></div>
                                </div>`

}

details(idProduct);
//En el evento de click en el boton 'Agregar al carrito' crear el objeto del producto a comprar y añadirlo
const agregarCarro = document.getElementById('agregarCarro');
agregarCarro.addEventListener('click', async ({ target }) => {

    if(target.classList.contains('btnAgregar')){
        let url = `https://productos-sprint3.herokuapp.com/productos/${idProduct}`
        let infoDetalle = await getData(url);

        const { id, productname, imagen, precio } = infoDetalle;

        let cant = document.getElementById('cant').value;
        let subTotal = cant * parseInt(precio);

        let objCarrito = {
            id: id,
            name: productname,
            img: imagen,
            precioP: precio,
            cantidad: cant,
            sTotal: subTotal
        }

        fetch('https://productos-sprint3.herokuapp.com/carrito', {
            method: 'POST',
            body: JSON.stringify(objCarrito),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            alert("información guardada")
        })
            .catch(() => {
                alert("Hubo un error")
            })
    }
})