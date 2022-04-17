function calcular() {
    //Obtener valores de cajas de texto
    let valor = document.getElementById("valor").value;
    let propina = document.getElementById("propina").value;

    //Convertir a entero los valores digitados y recibidos como string
    valor = parseInt(valor);
    propina = parseInt(propina);

    if(valor === "" || valor < 0) {
        alert("Debe digitar un valor de cuenta válido!.");
        return;
    }

    if(propina === "") {
        alert("Debe digitar un porcentaje de propina válido!.");
        return;
    }

    const porcentaje = (propina/100);

    if(porcentaje < 0 || porcentaje > 1) {
        alert("El porcentaje no es un valor valido");
        return;
    }

    //Calcular valor de la propina y total a pagar
    const valorPropina = valor * porcentaje;
    const totalAPagar = valor + valorPropina;

    //Obtener objeto de resumen
    const resumen = document.querySelector("#resumen");

    //Agregar contenido html con las variables calculadas arriba
    resumen.innerHTML = `<table>
                            <thead>
                                <th>Resumen de la cuenta</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Valor inicial:</td>
                                    <td>$${valor.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Valor propina:</td>
                                    <td>$${valorPropina.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total a pagar:</td>
                                    <td>$${totalAPagar.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="limpiar" onclick="limpiar()">Limpiar</button>`;

    //Agregar la clase resumen al div                        
    const resumenCss = resumen.classList;
    resumenCss.add("resumen");
}

function limpiar() {
    //Obtener todos los elementos a utilizar
    const valor = document.getElementById("valor");
    const propina = document.getElementById("propina");
    const resumen = document.querySelector("#resumen");
    const resumenCss = resumen.classList;
    
    //Limpiar contenido html del div resumen, limpiar la caja de texto de valor y de propina, remover la clase del div resumen
    resumen.innerHTML = "";
    valor.value = "";
    propina.value = "";
    resumenCss.remove("resumen");
}