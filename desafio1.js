//1.Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
alert('¡Bienvenida y bievenido a nuestro sitio web!');
//2.Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";
//3.Crea una variable llamada edad y asígnale el valor 25.
let edad = 25;
//4.Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;
//5.Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;
//7.Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");
//8.Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
//9.Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
nombre = prompt('Ingrese su nombre');
//10.Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
edad = prompt('Ingrese su edad');

/*
    11.Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
*/
if(edad>=18){
    alert(`¡Enhorabuena ${nombre}! Ya puedes obtener tu licencia de conducir.`)
}else{
    alert(`En ${18-edad} años podrás obtener tu licencia de conducir ${nombre}!`)
}
