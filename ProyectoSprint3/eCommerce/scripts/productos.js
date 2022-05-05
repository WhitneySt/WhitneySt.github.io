import getData from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/helper/getdata.js";
import printProducts from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/modules/printProducts.js";

//Al ingresar a la interfaz de producto por primera vez.
async function cargarDatos() {
    let mostrarProductos = [];
    
    const url ="https://productos-sprint3.herokuapp.com/productos";
    const arrProductos = await getData(url);
    const IdBoton = localStorage.getItem('IdBoton');
    
    
    switch (IdBoton){
        case "hombres":
            mostrarProductos = arrProductos.filter(elemento=> elemento.categoria === "Hombre");
            break;
        case "mujeres":
            mostrarProductos = arrProductos.filter(elemento=> elemento.categoria === "Mujer");
            break;
        case "":
            mostrarProductos = arrProductos;
            break;
        default:
            swal("¡Ooh!", "Por favor redirigirse a Home", "error");
    
    }
    
    const containerProducts = document.querySelector('.principal');
    printProducts(mostrarProductos, containerProducts);
}

cargarDatos();

//Definición del evento para filtrar por categoría

const btnHombre = document.getElementById('hombres');
const btnMujer = document.getElementById('mujeres');

btnHombre.addEventListener('click', async ({target})=>{
    const containerProducts = document.querySelector('.principal');
    const url ="https://productos-sprint3.herokuapp.com/productos";
    const arrProductos = await getData(url);
    const pagHombre = arrProductos.filter(elemento=> elemento.categoria === target.value);
    printProducts(pagHombre, containerProducts);
})

btnMujer.addEventListener('click', async ({target})=>{
    const containerProducts = document.querySelector('.principal');
    const url ="https://productos-sprint3.herokuapp.com/productos";
    const arrProductos = await getData(url);
    const pagMujer = arrProductos.filter(elemento=> elemento.categoria === target.value);
    printProducts(pagMujer, containerProducts);
})

//Evento para direccionar a la interfaz para agregar productos a la colección
const btnAgregar = document.getElementById('nuevo');
btnAgregar.addEventListener('click', ({target})=>{
    window.location.href = "https://whitneyst.github.io/ProyectoSprint3/eCommerce/pages/agregarProducto.html"
})

//Ver detalle de producto seleccionado
document.addEventListener('click', ({target})=>{
    if(target.classList.contains('irDetalle')){
        let productId = target.id;
        localStorage.setItem('verDetalle', productId);
        window.location.href = "https://whitneyst.github.io/ProyectoSprint3/eCommerce/pages/detalleProducto.html"
    }
})