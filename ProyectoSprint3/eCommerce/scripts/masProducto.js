import getData from "https://whitneyst.github.io/ProyectoSprint3/eCommerce/helper/getdata.js";

const form = document.getElementById('formulario');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = "https://productos-sprint3.herokuapp.com/productos";

    const nombreProducto = document.getElementById('pName');
    const imagenProducto = document.getElementById('pImg');
    const precioProducto = document.getElementById('pPrecio');
    const descripProducto = document.getElementById('pDescripcion');
    const categoriaProducto = document.getElementById('pCategorias');

    const arrProductos = await getData(url);

    const selectedIndex = categoriaProducto.selectedIndex;
    const cateProducto = categoriaProducto.options[selectedIndex].value;

    if (nombreProducto.value === "" || imagenProducto.value === "" || precioProducto.value === "" || descripProducto.value === "" || cateProducto.value === "-1") {
        swal("Oh oh!", "Faltan campos por ingresar!", "error");
        return false;
    }

    const ultimaPosicion = arrProductos.length - 1;
    const ultimoElemento = arrProductos.length > 0 ? arrProductos[ultimaPosicion] : { id: 0 };

    const nuevoId = (ultimoElemento.id + 1);
    const nuevoProducto = {
        id: nuevoId,
        productname: nombreProducto.value,
        imagen: imagenProducto.value,
        precio: precioProducto.value,
        descipcion: descripProducto.value,
        categoria: cateProducto
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        swal("Bien hecho!", "Se ha subido el producto correctamente!", "success").then(() => {
            nombreProducto.value = "";
            imagenProducto.value = "";
            precioProducto.value = "";
            descripProducto.value = "";
            categoriaProducto.value = "-1";
        });;
    })
        .catch(() => {
            swal("Oh oh!", "Ha ocurrido un error", "error");
            nombreProducto.value = "";
            imagenProducto.value = "";
            precioProducto.value = "";
            descripProducto.value = "";
            categoriaProducto.value = "-1";
        })
})