//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('¡Te damos la biemvenida!');

// 2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Andres';
console.log(`¡Hola ${nombre}`);

// 3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
// let nombre = 'Andres';
alert(`¡Hola ${nombre}!`);

//  4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Tu respuesta es: ${respuesta}`);

// 5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 5;
let valor2 = 10;
let resultadoSuma = valor1 + valor2;
console.log(`La suna de ${valor1} y ${valor2} es igual a ${resultadoSuma}`);

// 6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 = 15;
valor2 = 7;
let resultadoResta = valor1 - valor2;
console.log(`La resta entre ${valor1} y ${valor2} es igual a ${resultadoResta}`);

// 7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('Ingresa tu edad:');
if (edad > 0) {
    if (edad >= 18) {
        console.log('Eres mayor de edad.');
    } else {
        console.log('Eres menor de edad.');
    }
} else {
    console.log('Ingrese una edad válida');
};  

// 8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Ingresa un número:');
if (numero > 0) {
    console.log('El número es positivo.');
} else if (numero < 0) {
    console.log('El número es negativo.');
} else {
    console.log('El número es cero.');
}

// 9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
};
/*
    Otra opción valida de resolución sería
    let i = 0;
    while(i < 10){
        i++;
        console.log(i);
    }
*/

//10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8;
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

// 11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let randomNum1 = Math.random();
console.log(`Número aleatorio entre 0 y 1: ${randomNum1}`);

//12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let randomNum2 = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatorio entre 1 y 10:  ${randomNum2}`);

//13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let randomNum3 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatorio entre 1 y 1000: ${randomNum3}`);
