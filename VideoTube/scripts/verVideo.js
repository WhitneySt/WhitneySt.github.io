function mostrarVideoSeleccionado(id) {
    const elementos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const elemento = elementos.find(item => item.id === id);
    const verVideo = document.getElementById("verVideo");
    if (!elemento) {
        verVideo.innerHTML = '<h2 style="color: white;">No se pudieron cargar los videos!.</h2>';
    } else {
        const videoHtml = elemento.video ? `<video src="${elemento.video}" poster="${elemento.poster}" controls autoload autoplay type="video/mp4"></video>` : `<img src="${elemento.poster}" poster="${elemento.poster}">`;
        verVideo.innerHTML = ` ${videoHtml}
                                <section class="frameV">
                                    <section><img src="${elemento.avatar}" alt="Yo"></section>
                                    <section class="descripcionV">
                                        <h1>${elemento.namevideo}</h1>
                                        <p>
                                            ${elemento.vistas} vistas - ${elemento.fecha}
                                        </p>
                                    </section>
                                </section>`;
    }
}

function mostrarVideosFiltrados(id, filters = {}) {
    const elementos = localStorage.getItem("videos") ? JSON.parse(localStorage.getItem("videos")) : [];
    const sugeridos = document.getElementById("sugeridos");

    let elementosFiltrados = elementos.filter(item => item.id !== id);
    if(Object.keys(filters).length) {
        elementosFiltrados = elementosFiltrados.filter(video => video.categoria === filters.categoria);
    }

    sugeridos.innerHTML="<h1>Videos sugeridos</h1>";
    elementosFiltrados.forEach(item => {
        sugeridos.innerHTML += `<div class="video">
                                    <div class="cover" id="cover">
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
    const videoId = parseInt(localStorage.getItem("videoId"));
    mostrarVideosFiltrados(videoId, { categoria: target.value });
});

const btnProgramacion = document.getElementById('Programacion');
btnProgramacion.addEventListener('click', ({ target }) => {
    const videoId = parseInt(localStorage.getItem("videoId"));
    mostrarVideosFiltrados(videoId, { categoria: target.value });
});

const btnMovies = document.getElementById('Movies');
btnMovies.addEventListener('click', ({ target }) => {
    const videoId = parseInt(localStorage.getItem("videoId"));
    mostrarVideosFiltrados(videoId, { categoria: target.value });
});

const btnTodos = document.getElementById('Todos');
btnTodos.addEventListener('click', ({ target }) => {
    const videoId = parseInt(localStorage.getItem("videoId"));
    mostrarVideosFiltrados(videoId);
});

const sugeridos = document.getElementById("sugeridos");
sugeridos.addEventListener('click', ({ target }) => {
    console.log(target)
    if (target.id) {
        const videoId = parseInt(target.id);
        localStorage.setItem("videoId", videoId);
        mostrarVideoSeleccionado(videoId);
        mostrarVideosFiltrados(videoId);
    }
});

const videoId = parseInt(localStorage.getItem("videoId"));
mostrarVideoSeleccionado(videoId);
mostrarVideosFiltrados(videoId);
