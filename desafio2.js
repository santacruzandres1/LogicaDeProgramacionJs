//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt('¿Qué día es hoy?').toLowerCase();
(diaDeLaSemana=='sabado' || diaDeLaSemana=='sábado' || diaDeLaSemana == 'domingo'  ? alert('¡Buen fin de semana!') : alert('¡Buena semana!'));

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt('Ingrese un número');
if (numero > 0){
    alert(`El número ${numero} es POSITIVO.`);
} else if (numero == 0){
    alert('El numero que ingresaste es cero');
}else{
    alert(`El número ${numero} es NEGATIVO.`);
};

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."

let scoreUser = prompt("ingrese su puntaje");
(scoreUser>=100 ? alert('¡Enhorabuena, has ganado!') : alert('Inténtalo de nuevo para ganar.') );

//4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.

let saldo = 1500;
alert(`Su saldo en cuenta es de USD $1500`);

//5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.

let nombre = prompt('Ingrese su nombre');
alert(`Te damos la bienvenida ${nombre}`);
