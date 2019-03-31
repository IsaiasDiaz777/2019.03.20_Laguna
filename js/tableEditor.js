// Variaveles
var fila;

window.onload = function () {
    TomarDatosTD();
}

// Esta atento a los CLICK de la tabla para tomar sus datos del TR
function TomarDatosTD() {
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

// Eliminar fila
function EliminarTR1(filaSelect) {
    this.fila = filaSelect;
}
function EliminarTR2() {
    var td = fila.parentNode;
    var tr = td.parentNode;
    var table = tr.parentNode;
    table.removeChild(tr);
    
    this.fila = "";
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

}