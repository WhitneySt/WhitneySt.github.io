const btnHombre = document.getElementById('hombres');
const btnMujer = document.getElementById('mujeres');
const enlaceProductos = document.getElementById('produc');

btnHombre.addEventListener('click',({target})=>{ 
    localStorage.setItem('IdBoton',target.id);
    window.location.href = "https://whitneyst.github.io/ProyectoSprint3/eCommerce/pages/productos.html"
})
btnMujer.addEventListener('click',({target})=>{ 
    localStorage.setItem('IdBoton',target.id);
    window.location.href = "https://whitneyst.github.io/ProyectoSprint3/eCommerce/pages/productos.html"
})
enlaceProductos.addEventListener('click',()=>{
    localStorage.setItem('IdBoton',"");
})



