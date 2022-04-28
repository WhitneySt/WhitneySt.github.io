import { elementos } from "./data.js";

function cargarVideos(items) {
    let videos = items;
    if (elementos.length === items.length || items.length === 0) {
        localStorage.setItem('videos', JSON.stringify(elementos));
        videos = elementos;
    }

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    videos.forEach(item => {
        contenedor.innerHTML += `<div class="video">
                                    <div class="cover">
                                        <a>
                                            <img src=${item.poster} id="${item.id}" alt="video">
                                        </a>
                                    </div>
                                    <section class="frame">
                                        <section><img src=${item.avatar} alt="fulanito"></section>
                                        <section class="descripcion">
                                            <h1 id="${item.id}">${item.namevideo}</h1>
                                            <h2>${item.username}</h2>
                                            <p>
                                            ${item.vistas} vistas - ${item.fecha}
                                            </p>
                                        </section>
                                    </section>
                                </div>`
    });
}

const btnMusica = document.getElementById('Musica');
btnMusica.addEventListener('click', ({ target }) => {
    let videos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const videosMusica = videos.filter(video => video.categoria === target.value);
    cargarVideos(videosMusica);
});

const btnProgramacion = document.getElementById('Programacion');
btnProgramacion.addEventListener('click', ({ target }) => {
    let videos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const videosProgramacion = videos.filter(video => video.categoria === target.value);
    cargarVideos(videosProgramacion);
});

const btnMovies = document.getElementById('Movies');
btnMovies.addEventListener('click', ({ target }) => {
    let videos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const videosMovies = videos.filter(video => video.categoria === target.value);
    cargarVideos(videosMovies);
});

const btnTodos = document.getElementById('Todos');
btnTodos.addEventListener('click', ({ target }) => {
    let videos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const videosMusica = videos.filter(video => video.categoria === target.value);
    cargarVideos(videosMusica);
});

const cover = document.getElementById("contenedor");
cover.addEventListener('click', ({ target }) => {
    if (target.id) {
        localStorage.setItem("videoId", target.id);
        window.location.href = "../pages/verVideo.html";
    }
});

let videos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : elementos;

cargarVideos(videos);