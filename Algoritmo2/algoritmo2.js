//Algoritmo 2: Harry Potter - Análisis de resultados del sombrerero seleccionador
let sesionCalificacion = [];
let i = 0;

do {
    i++
    const casaSeleccionada = prompt(`Asignación (${i}) Para elegir una de las casas, por favor digite: \n G para seleccionar Gryffindor \n R para Ravenclaw \n S para Slytherin \n H para escoger Hufflepuff \n `).toUpperCase();

    if (casaSeleccionada === "G" || casaSeleccionada === "R" || casaSeleccionada === "S" || casaSeleccionada === "H") {
        sesionCalificacion.push(casaSeleccionada);
    } else {
        i--;
    }
} while (i < 16);


function posicionDominante(arreglo) {
    let arregloResultado = [];

    arregloResultado[0] = arreglo.filter(item => item === "G").length;
    arregloResultado[1] = arreglo.filter(item => item === "R").length;
    arregloResultado[2] = arreglo.filter(item => item === "S").length;
    arregloResultado[3] = arreglo.filter(item => item === "H").length;

    const maximo = Math.max(...arregloResultado);    
    const indice = arregloResultado.findIndex(item => item === maximo);

    const dominante = arregloResultado[indice];

    const maximosRepetidos = arregloResultado.filter(item => item === maximo).length;

    if (maximosRepetidos > 1) {
        alert(`Las posiciones de las casas son las siguiente: \n Gryffindor obtiene ${(arregloResultado[0] / 16) * 100}%, \n Ravenclaw ${(arregloResultado[1] / 16) * 100}%, \n Slytherin ${(arregloResultado[2] / 16) * 100}% y \n Hufflepuff ${(arregloResultado[3] / 16) * 100}%. \n Fue una clasificación normal`);
    } else {
        switch (indice) {
            case 0:
                alert(`Las posiciones de las casas son las siguiente: \n Gryffindor obtiene ${(arregloResultado[0] / 16) * 100}%, \n Ravenclaw ${(arregloResultado[1] / 16) * 100}%, \n Slytherin ${(arregloResultado[2] / 16) * 100}% y \n Hufflepuff ${(arregloResultado[3] / 16) * 100}%; \n siendo la posición dominante la casa Gryffindor. `);
                break;
            case 1:
                alert(`Las posiciones de las casas son las siguiente: \n Gryffindor obtiene ${(arregloResultado[0] / 16) * 100}%, \n Ravenclaw ${(arregloResultado[1] / 16) * 100}%, \n Slytherin ${(arregloResultado[2] / 16) * 100}% y \n Hufflepuff ${(arregloResultado[3] / 16) * 100}%; \n siendo la posición dominante la casa Ravenclaw. `);
                break;
            case 2:
                alert(`Las posiciones de las casas son las siguiente: \n Gryffindor obtiene ${(arregloResultado[0] / 16) * 100}%, \n Ravenclaw ${(arregloResultado[1] / 16) * 100}%, \n Slytherin ${(arregloResultado[2] / 16) * 100}% y \n Hufflepuff ${(arregloResultado[3] / 16) * 100}%; \n siendo la posición dominante la casa Slytherin. `);
                break;
            case 3:
                alert(`Las posiciones de las casas son las siguiente: \n Gryffindor obtiene ${(arregloResultado[0] / 16) * 100}%, \n Ravenclaw ${(arregloResultado[1] / 16) * 100}%, \n Slytherin ${(arregloResultado[2] / 16) * 100}% y \n Hufflepuff ${(arregloResultado[3] / 16) * 100}%; \n siendo la posición dominante la casa Hufflepuff. `);
                break;
            default:
                alert("Clasificación normal!");
        }
    }
}

posicionDominante(sesionCalificacion);
