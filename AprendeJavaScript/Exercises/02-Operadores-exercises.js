// 1. Crea una variable para cada operación aritmética
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let number = 10
let number2 = 2
let suma = 10 +2
let resta = 10-2
let division = 10/2
let modulo = 10%2
let multiplicacion = 10*2
let cuadrado = 10**2
console.log ("El resultado de las operaciones con las que voy a trabajar es el siguiente: \n " +suma+ " " +resta+ " "+division+ " " +multiplicacion+ " " +modulo+ " " +cuadrado)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación mezclando operados como && ||
console.log (10 > 8)
console.log (2 < 9)
console.log (10 >= 9)
console.log (7 === 7)
console.log (12 != 11)
console.log (1<2 && 2<3)
console.log (1<2 && 2<3 && 3<4 && 4<5)
console.log (1>2 || 2<3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación mezclando operados como && ||

console.log (10 < 8)
console.log (2 > 9)
console.log (10 <= 9)
console.log (7 === number)
console.log (12 != 12)
console.log (5<2 && 5<3)
console.log (5<2 && 6<3 && 8<4 && 9<5)
console.log (1>2 || 7<3)

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

let isStormy = false
isStormy ? console.log("Hoy SI hay tormenta") : console.log("Hoy NO hay tormenta")

// 10. Combina operadores aritméticos, de comparáción y lógicas