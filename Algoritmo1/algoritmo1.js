//Algoritmo 1: Procesamiento de cadenas ADN
//Preguntar secuencia y almacenar los valores en el arreglo
let secuencia = [];
let valoresCorrectos = 0;

for (let i = 0; i < 20; i++) {
    secuencia[i] = prompt(`Por favor ingresar el elemento ${i+1} de la secuencia: `).toUpperCase();
}

function validarSecuencia(arreglo) {
    let elementoValido = 0;
    arreglo.forEach(element => {
        if (element == "A" || element == "C" || element == "G" || element == "T") {
            elementoValido++;
        }
    });
    return elementoValido
}

valoresCorrectos = validarSecuencia(secuencia);

function cuentaProteina(arreglo) {
    let arregloResultado = [];
    arregloResultado[0] = arreglo.filter(item => item === "A").length;
    arregloResultado[1] = arreglo.filter(item => item === "C").length;
    arregloResultado[2] = arreglo.filter(item => item === "G").length;
    arregloResultado[3] = arreglo.filter(item => item === "T").length;

    return arregloResultado;
}



if (valoresCorrectos === 20) {
    const arrayResultado = cuentaProteina(secuencia);
    alert(`La secuencia de ADN ingresado cuenta con ${arrayResultado[0]} Adenina, ${arrayResultado[1]} Citosina, ${arrayResultado[2]} Guanina y ${arrayResultado[3]} Timina.`);

} else {
    alert("Error en la secuencia. Hay valores que no corresponden a las proteínas válidas.");
}
