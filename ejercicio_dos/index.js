class Numero {
    constructor(numero) {
        this.numero = numero
    }
    mostrarNumero() {

        var $numero_uno = document.getElementById("numero_uno").value;
        var $numero_dos = document.getElementById("numero_dos").value;
        var $numero_tres = document.getElementById("numero_tres").value;
        var $numero_cuatro = document.getElementById("numero_cuatro").value;

        var myArray = [$numero_uno, $numero_dos, $numero_tres, $numero_cuatro];
        var menor = Math.min(...myArray);
        var mayor = Math.max(...myArray);
        document.getElementById("numero_menor").innerHTML = menor;
        document.getElementById("numero_mayor").innerHTML = mayor;

    }
}

const numero = new Numero("Diez");

document.getElementById("boton").addEventListener("click", function(event) {

    event.preventDefault();
    numero.mostrarNumero()

});