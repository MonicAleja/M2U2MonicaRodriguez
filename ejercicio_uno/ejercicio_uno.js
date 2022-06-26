class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    mostrarNombre() {
        var input_nombre = document.getElementById("nombre_estudiante").value;
        document.getElementById("mostrar_nombre").innerHTML = input_nombre;

        var input_materias = document.getElementById("cantidad_materias").value;
        document.getElementById("mostrar_cantidad_materias").innerHTML = input_materias;

        var papeleria = 20000;
        var carne = 8000;
        var descuento = 0.2;

        var total = papeleria + carne + descuento;

        document.getElementById("total").innerHTML = total;

        var numFilas = document.getElementById("cantidad_materias").value;
        var numColumnas = 2;
        var contenedorTabla = document.getElementById("contenedorTabla");

        contenedorTabla.innerHTML = "";
        var tabla = "<table>";
        tabla += "<tr><th>Materia</th><th>Valor</th></tr>";
        for (var f = 1; f <= numFilas; f++) {
            tabla += "<tr>";
            // for (var c = 1; c <= numColumnas; c++) {
            tabla += '<td><input type="text" id="nombre_materia" name="nombre_materia" value=""></td>';
            tabla += '<td><input type="text" id="valor_materia" name="valor_materia" value=""></td>';
            // }
            tabla += "</tr>";
        }
        tabla += "</table>";
        contenedorTabla.innerHTML = tabla;

    }
}

const estudiante = new Estudiante("Estudiante");

document.getElementById("boton").addEventListener("click", function(event) {

    event.preventDefault();
    estudiante.mostrarNombre()

});