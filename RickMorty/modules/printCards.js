const printCards = async(data,container)=>{

    container.innerHTML ='';

    data.forEach(async (card) => {
        const {name, status, species, location, episode, image} = card;
        const clastatus = status == 'Alive'?'status':'status1';

        const episodioResp = await fetch(episode[0]);
        const episodio = await episodioResp.json();

        
        const div = document.createElement ('div');
        div.classList.add('card');
        div.innerHTML =`
        <img src="${image}" alt="${name}">
        <div class="overview">
            <h2>${name}</h2>
            <div><section class="${clastatus}"></section><p>${status} - ${species}</p></div>
            <h3>Last known location:</h3>
            <p>${location.name}</p>
            <h3>First seen in:</h3>
            <p>${episodio.name}</p>
        </div>`

        container.appendChild(div);
            
        });

};

export default printCards;