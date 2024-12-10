// 1. Concatena dos cadenas de texto
const cadena1 = "Mi nombre es Alberto"
const cadena2 = "estoy estudiando javaScript"
console.log(cadena1+ " y " +cadena2)

// 2. Muestra la longitud de una cadena de texto
let cadena3 ="Me va a servir para calcular con el lenght la longitud de mi cadena de texto"
console.log("La longitud de mi cadena de texto es de: " +cadena3.length+ " letras")
// 3. Muestra el primer y último carácter de un string
let cadena4 ="Campanero"
console.log(cadena4.length)
console.log (cadena4 [0])
console.log(cadena4[8])
// 4. Convierte a mayúsculas y minúsculas un string
let cadena5 ="este texto va todo en minúsculas, no preguntes porque pero es asi"
console.log("Vamos a convertir el texto a mayusculas, el que dice: " +cadena5+ " con toUpperCase y obtenemos: " +cadena5.toUpperCase())
console.log(" ")
let cadena6 ="AHORA, VAMOS A HACERLO AL REVÉS Y VAMOS A PASAR ESTE TEXTO A MINUSCULAS..."
console.log("Vamos a convertir el texto a minusculas, el que dice: " +cadena6+ " con toLowerCase y obtenemos: " +cadena6.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(" ")
let cadena7 = `Este texto
se divide en varias lineas
ya que no utilizamos las 
comillas normales`

console.log(cadena7)

// 6. Interpola el valor de una variable en un string
//RECUERDA, USA EN VEZ DE LA DOBLE COMILLA, ESTAS ` ` 
let cadena8 = "Alberto"
let interpolar = `Mi nombre es ${cadena8}, encantado de conocerte`
console.log (interpolar)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena14 = "Vamos a desarrollar esta frase con espacios en blanco para luego cambiar dichos espacios por guiones"
console.log(cadena14)
console.log(" ")
console.log(cadena14.replace(/ /g, "-")) // con esta / /g se ocupan todos los espacios
console.log(cadena14.replace(/ /g, "   espacio   "))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(" ")
let cadena9 = "Vamos a jugar a buscar palabras: prueba, cadena, agua, marca, entrenar, bebida"
console.log(cadena9.includes("bebida")) // true
console.log(cadena9.includes("Amoniaco")) // false
console.log(cadena9.includes("aGua")) // false, puesto que hay una letra en mayusucula
console.log(cadena9.includes("cadena")) // true
// 9. Comprueba si dos strings son iguales
console.log(" ")
let cadena10 = "alberto"
let cadena11= "alberto"
let cadena12="AlBeRtO"
console.log(cadena10 === cadena12) //false - es un string, pero el contenido es distinta, la forma de las letras
console.log(cadena10 === cadena11) //true
console.log(" ")

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena10.length == cadena11.length) //true
let cadena13 ="Campanero"
console.log(cadena10.length == cadena13.lenght) //false
//el lenght nos ayudará a contar la dimension del string y con el doble igual veremos si son iguales, si ponemos === será falso