import getData from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/helper/getdata.js";

//Visualizar contenido del detalle del producto seleccionado

let idProduct = JSON.parse(localStorage.getItem('verDetalle'));

function details(id){
    const products = JSON.parse(localStorage.getItem('Productos'));
    const seleccion = products.find(item => item.id === id);
    const containerDetail = document.querySelector('.detalle');

    const {imagen, productname, precio, descripcion} = seleccion;

    containerDetail.innerHTML =`<div class="imagen">
                                    <img src="${imagen}" alt="${productname}">
                                </div>
                                <div>
                                    <h1>${productname}</h1>
                                    <h2>$${parseInt(precio).toLocaleString()}</h2>
                                    <p>${descripcion}</p>
                                    <div class="agregar"><input id="cant" type="number" required><button id="agregarCarro">Agregar al carrito</button></div>
                                </div>`

}

details(idProduct);
//En el evento de click en el boton 'Agregar al carrito' crear el objeto del producto a comprar y añadirlo
const btnAgregarCarro = document.getElementById('agregarCarro');
btnAgregarCarro.addEventListener('click', async ()=>{

    let url = `https://productos-sprint3.herokuapp.com/productos/${idProduct}`
    let infoDetalle = await getData(url);

    const {id, productname, imagen, precio} = infoDetalle;
    
    let cant = document.getElementById('cant').value;
    let subTotal = cant*parseInt(precio);

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
   }).then( ()=> {
      alert("información guardada")
   })
   .catch(() => {
       alert("Hubo un error")
   })
    
})