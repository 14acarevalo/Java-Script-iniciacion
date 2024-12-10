let a = 10
let b = 5

//Vamos a realizar los diferentes operadores que se pueden encontrar 
console.log (a+b) // suma
console.log (a-b) // resta
console.log (a/b) // division
console.log (a*b) // multiplicacion

console.log(a%b) // modulo
console.log(a**b) //cuadrado

a++
console.log(a) // incremento
b--
console.log(b) // decremento

//Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
console.log(myVariable)

//Operadores de comparación

console.log (a > b)
console.log (a < b)
console.log (12 >= 10)
console.log (14 <= 14)
console.log (21 == 21)
console.log ((a + b) == 14) // igualdad por valor
console.log (a === b) // igualdad por identidad

console.log(a) // para ver el valor de a
console.log (a == 10) // saldrá falso porque le hemos sumado antes 1
console.log (a == 11) // saldrá verdadero al tener un nuevo valor de 11
console.log (a != 14) // comparador de desigualdad

// Operadores lógicos

console.log (15 > 17 && 18 > 19) // false
console.log (15 > 17 && 18 > 16) // false
console.log (15 > 13 && 18 > 12) // true

console.log (15 > 17 || 18 > 19) // false
console.log (15 > 17 || 18 > 12) // true
console.log (15 > 12 || 18 > 11) // true

console.log (15 > 12 || 18 > 19 && 20 > 21)
console.log (!(15 > 17 || 18 > 19))


const isRaining = false // Dependiendo del orden donde tu los pongas, asi irá este. Es decir, true : false, en este caso al ser false escoge no esta lloviendo

isRaining ? console.log("Esta lloviendo") : console.log ("No está lloviendo")










