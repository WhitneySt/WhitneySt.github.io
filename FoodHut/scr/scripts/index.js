let darkModeState = false;
const toogle = document.getElementById("toogle");

const url = 'https://foodhut-reto-2.herokuapp.com/data';


// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    toogle.checked = state;
    darkModeState = state;

    const logo = document.getElementById("logo");
    if (state) {
        logo.setAttribute("src", "./images/logowhite.svg");
    } else {
        logo.setAttribute("src", "./images/logo.png");
    }
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
}

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers, 
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
toogle.addEventListener("change", (event) => {
    darkModeState = event.target.checked;
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
});

function obtenerBtnActivo() {
    const btnfil = document.getElementById("btnfil");
    const children = Object.values(btnfil.children);
    const activo = children.find(child => child.classList.contains("activo"));
    return activo;
}

function toggleClass(active, normal) {
    if(active) {
        active.classList.remove('activo');
        active.classList.add('botonesfil');
    }

    normal.classList.remove('botonesfil');
    normal.classList.add('activo');
}

function configurarFiltros() {
    const btnfil = document.getElementById("btnfil");
    const children = Object.values(btnfil.children);
    children.forEach(btn => {
        btn.addEventListener("click", async () => {
            const filtro = btn.name ? { [btn.name]: true } : {};
            await cargarCards(filtro);
        
            const activo = obtenerBtnActivo();
            toggleClass(activo, btn);
        });
    })
}

async function cargarCards({ breakfast = false, dinner = false, lunch = false }) {
    const cards = document.getElementById("cards");
    const { data } = await axios.get(url);
    let nuevaData = data;

    if (breakfast) {
        nuevaData = data.filter(d => d.categoria === "Breakfast");
    }

    if (dinner) {
        nuevaData = data.filter(d => d.categoria === "Dinner");
    }

    if (lunch) {
        nuevaData = data.filter(d => d.categoria === "Lunch");
    }

    cards.innerHTML = '';
    nuevaData.forEach(item => {
        const { img, titulo, descripcion, calificacion, id } = item;
        cards.innerHTML += `
            <div class="card">
            <img class="menuImg" src="${img}" alt="${titulo}">
            <div>
                <img class="users" src="./images/users.png" alt="users">
                <span><img src="./images/star.png" alt="star">(${calificacion})</span>
            </div>
            <h5>${titulo}</h5>
            <p>${descripcion}</p>
            <button class="btndownload">Order Now</button>
        </div>
        `
    })
}

configurarFiltros()
cargarCards({});