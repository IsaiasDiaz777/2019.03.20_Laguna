// Variaveles
var fila;

// Esta atento a los CLICK de la tabla para tomar sus datos del TR
window.onload = function () {

    // Obtener del tomarDatos
    let elementos = document.getElementsByClassName("tomarDatos");

    // Recorres los valores
    for (let i = 0; i < elementos.length; i++) {

        // Obtener valores de la columna TD seleccionada
        elementos[i].addEventListener("click", function (e) {

            //Obtener los datos de cada TD
            var elementosTD = e.srcElement.parentElement.getElementsByTagName("td");

            //Llenar valores
            for (let i = 0; i < elementosTD.length; i++) {
                var inputNombre = document.getElementById("form_modal" + i.toString());
                inputNombre.value = elementosTD[i].innerHTML;
            }
        })
    }
}

// Modificar tabla
function ModificarTabla() {

}

// Eliminar creando una variable local
function EliminarTR1(filaSelect) {
    fila = filaSelect;
}

// Eliminar fila
function EliminarTR2() {
    var td = fila.parentNode;
    var tr = td.parentNode;
    var table = tr.parentNode;
    table.removeChild(tr);

    fila = "";
}

// Deja vacio los inputs del modal
function LimpiarInput() {
    for (let i = 0; i < 10; i++) {
        var inputNombre = document.getElementById("form_modal" + i.toString());
        inputNombre.value = "";
    }
}

// Agregar fila
function AgregarTR() {

    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById("myTable");

    // Inserta una fila en la tabla, en el índice 0
    var newRow = tableRef.insertRow(1);

    for (let i = 0; i < 10; i++) {

        // Inserta una celda en la fila, en el índice 0
        var newCell = newRow.insertCell(i);

        // Obtiene el valor de texto Input
        var valorTomado = document.getElementById("form_modal" + i.toString());

        // Añade un nodo de texto a la celda
        var newText = document.createTextNode(valorTomado);

        // Anñade el texto a la filaº
        newCell.appendChild(newText);
    }
}