// 1. Escribe un comentario en una línea
let comentario = "Hola, este es el primer ejercicio de prueba"
console.log (comentario)
// 2. Escribe un comentario en varias líneas
let comentarioVariasLineas = "Segundo ejercicio para practicar \n varias lineas y asi mejorar \n el codigo escrito"
console.log (comentarioVariasLineas)

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Comillas presentes"
let numero = 21
let booleano = false
let myBigInt = BigInt (21231452345536364363)
let valorNull = null
let undefined
let mySymbol = Symbol ("Mi simbolo")
// 4. Imprime por consola el valor de todas las variables
console.log (string)
console.log (numero)
console.log (booleano)
console.log (myBigInt)
console.log (valorNull)
console.log (undefined)
console.log (mySymbol)

// 5. Imprime por consola el tipo de todas las variables
typeof string
console.log(typeof string)
typeof numero
console.log(typeof numero)
typeof booleano
console.log(typeof booleano)
typeof myBigInt
console.log(typeof myBigInt)
typeof valorNull
console.log(typeof valorNull)
typeof mySimbol
console.log(typeof mySimbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
let otro ="Cambio de nombre"
string = otro
console.log(string)
console.log(otro)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 123;
numero = "Ahora soy una cadena";
booleano = 1n;
myBigInt = false;
valorNull = undefined;
indefinido = null;
mySymbol = "Nuevo símbolo";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constString = "Constante string";
const constNumero = 100;
const constBooleano = true;
const constBigInt = BigInt(9876543210123456789);
const constValorNull = null;
const constUndefined = undefined;
const constSymbol = Symbol("Constante símbolo");

// 9. A continuación, modifica los valores de las constantes
// Comenta las líneas que produzcan algún tipo de error al ejecutarse
// constString = 456;               // Error: No se puede reasignar una constante
// constNumero = "Nuevo valor";     // Error: No se puede reasignar una constante
// constBooleano = BigInt(2);       // Error: No se puede reasignar una constante
// constBigInt = false;             // Error: No se puede reasignar una constante
// constValorNull = "No null";      // Error: No se puede reasignar una constante
// constUndefined = null;           // Error: No se puede reasignar una constante
// constSymbol = "Nuevo símbolo";   // Error: No se puede reasignar una constante

// Imprime por consola los nuevos valores y tipos de las variables
console.log(string);
console.log(typeof string);

console.log(numero);
console.log(typeof numero);

console.log(booleano);
console.log(typeof booleano);

console.log(myBigInt);
console.log(typeof myBigInt);

console.log(valorNull);
console.log(typeof valorNull);

console.log(indefinido);
console.log(typeof indefinido);

console.log(mySymbol);
console.log(typeof mySymbol);

// Imprime por consola los valores y tipos de las constantes
console.log(constString);
console.log(typeof constString);

console.log(constNumero);
console.log(typeof constNumero);

console.log(constBooleano);
console.log(typeof constBooleano);

console.log(constBigInt);
console.log(typeof constBigInt);

console.log(constValorNull);
console.log(typeof constValorNull);

console.log(constUndefined);
console.log(typeof constUndefined);

console.log(constSymbol);
console.log(typeof constSymbol);