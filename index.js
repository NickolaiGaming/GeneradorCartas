let iconos = ["♦", "♥", "♠", "♣"];
let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function conseguirIcono() {
    let numero = Math.floor(Math.random() * iconos.length);

    return numero;
}




let icono = iconos[conseguirIcono()];
console.log(icono);



function conseguirNumero() {
    let numero = Math.floor(Math.random() * numeros.length);
    return numero;
}

let numero = numeros[conseguirNumero()];
console.log(numero);




let iconoIzq = document.querySelector(".iconLeft");
let contenidoNumero = document.querySelector(".number");
let iconoDerech = document.querySelector(".iconRight");

iconoIzq.innerHTML = icono; 
iconoDerech.innerHTML = icono;
contenidoNumero.innerHTML = numero;

if (icono == "♦" || icono == "♥") 
{iconoIzq.style.color = "red";
iconoDerech.style.color = "red";
}


