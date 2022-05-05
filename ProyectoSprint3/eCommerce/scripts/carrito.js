import getData from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/helper/getdata.js";

const cuerpoTabla = document.getElementById('cuerpoTabla');
const totalHtml = document.getElementById('total');

const url = "https://productos-sprint3.herokuapp.com/carrito";

const carrito = await getData(url);

let total = 0;
carrito.forEach(element => {
    total += element.sTotal;
    cuerpoTabla.innerHTML += `<tr class="fila">
                                <td><img src="${element.img}" alt="${element.nombre}"></td>
                                <td>${element.cantidad}</td>
                                <td>$${parseInt(element.precioP).toLocaleString()}</td>
                                <td>$${parseInt(element.sTotal).toLocaleString()}</td>
                                <td><button id="${element.id}" >Eliminar</button></td>
                              </tr>`
});

totalHtml.innerText = `$${parseInt(total).toLocaleString()}`;

const fila = document.getElementById('cuerpoTabla');
fila.addEventListener('click', async ({ target }) => {
    if(target.id){
        const url = "https://productos-sprint3.herokuapp.com/carrito";
        fetch(`${url}/${target.id}`, {
            method: "DELETE",
            header: {
                "Content-type": "application/json"
            }
        }).then(() => {
            swal("Bien hecho!", "Se ha eliminado el producto correctamente!", "success").then(() => {
                window.location.reload();
            });
        }).catch(() => {
            swal("Oh oh!", "Ha ocurrido un error", "error");
        });
    }
})