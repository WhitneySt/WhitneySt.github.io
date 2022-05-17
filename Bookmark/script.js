const tab = [
    document.getElementById('tab1'),
    document.getElementById('tab2'),
    document.getElementById('tab3')
];

const taba = [
    document.getElementById('taba1'),
    document.getElementById('taba2'),
    document.getElementById('taba3')
];

let btnhamburg = document.getElementById('hamburg');
let btnclose = document.getElementById('closenav');
let navmobile = document.querySelector('#menu');
let div = document.querySelector('.navbar-collapse');
let email = document.getElementById('email');
let form = document.querySelector('form');
let divseg = document.getElementById('validar');
let iconosnav = document.getElementById('iconosredes');


document.addEventListener('DOMContentLoaded', () => {
    let activo = tab.findIndex(item => item.classList.contains('active'));

    taba[activo].classList.add("activa");

})

taba.forEach(item => {
    item.addEventListener('click', () => {
        const cual = taba.findIndex(elemento => elemento.classList.contains('activa'));
        taba[cual].classList.remove('activa');

        item.classList.add('activa');

    })
})

btnhamburg.addEventListener('click', () => {
    
    navmobile.classList.add('hambur');
    iconosnav.innerHTML = `
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-twitter"></i>`;
})

btnclose.addEventListener('click', () => {
    
    navmobile.classList.remove('hambur');
    iconosnav.innerHTML = '';

})

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    
    if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)){
        form.reset();
        if(divseg.classList.contains('act')){
            divseg.classList.remove('act');
        }
    }else{
        divseg.classList.add('act');
    }

})




