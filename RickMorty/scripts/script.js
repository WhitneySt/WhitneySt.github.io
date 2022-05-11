import { getData } from "../helpers/getData.js";
import printCards from "../modules/printCards.js";

const url = 'https://rickandmortyapi.com/api/character';
const contenedor = document.getElementById('main');

document.addEventListener ('DOMContentLoaded', async()=>{
    const card = await getData(url);
    printCards(card,contenedor);
    Swal.fire({
        title: 'Bienvenido a nuestra web',
        icon: 'success'
    });
});