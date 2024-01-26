// 1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 0;
while (contador < 10){
    contador++;
    console.log(contador);
};

//2.Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
while (contador> -1) {
    console.log(contador);
    contador--;
};

//3.Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let segundos = prompt('Ingrese un número para la cuenta rergesiva');
while (segundos > 0){
    
    console.log(`${segundos}...`);
    segundos--;
}
console.log("BOOOOOOOOOOOOOOOM!!");

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let conteoProgresivo = parseInt(prompt('Ingrese un número para la cuenta progesiva'));//aqui tuve que agregar la función parseInt para convertir el string que tomamos del promp a un entero para poder sumarle 1 en el while.
 contador = 0 ;
while (contador < conteoProgresivo + 1){
    console.log(contador);
    contador++;
};
