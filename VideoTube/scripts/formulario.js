const elementos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];

const btnSubir = document.getElementById("subir");
btnSubir.addEventListener('click', () => {
    const video = document.getElementById("video");
    const vistas = document.getElementById("vistas");
    const url = document.getElementById("url");
    const fecha = document.getElementById("fecha");
    const usuario = document.getElementById("usuario");
    const categorias = document.getElementById("categorias");

    const selectedIndex = categorias.selectedIndex;
    const categoria = categorias.options[selectedIndex].value


    if (video.value == "" || vistas.value === "" || url.value === "" || fecha.value === "" || usuario.value === "" || categoria === "-1") {
        swal("Oh oh!", "Faltan campos por ingresar!", "error");
        return false;
    }

    const ultimaPosicion = elementos.length - 1;
    const ultimoElemento = elementos.length > 0 ? elementos[ultimaPosicion] : { id: 0 };

    const nuevoId = (ultimoElemento.id + 1);
    const item = {
        id: nuevoId,
        namevideo: video.value,
        video: "",
        poster: url.value,
        fecha: fecha.value,
        vistas: vistas.value,
        username: usuario.value,
        avatar: "../images/miavatar.png",
        categoria: categoria
    }

    elementos.push(item);
    localStorage.setItem('videos', JSON.stringify(elementos));

    video.value = "";
    url.value = "";
    fecha.value = "";
    vistas.value = "";
    usuario.value = "";
    categorias.value = -1;

    swal("Bien hecho!", "Se ha subido el video correctamente!", "success");
});