// 1. Concatena tres cadenas de texto con un separador específico entre cada una.
let cadena1= " El "
let cadena2= " comienzo "
let cadena3= " de mi nuevo futuro"
console.log(cadena1+ " - " +cadena2+ " - " +cadena3)
console.log (" ")

// 2. Extrae una subcadena de una cadena de texto usando índices y muéstrala.
let cadena4 = "En este ejercicio vamos a extraer un apartado de esta frase, por ejmplo de vamos a frase"
console.log(cadena4)
console.log(cadena4.slice(18, 59))
console.log (" ")

// 3. Convierte los carácteres de cada palabra en mayúsculas en una cadena de texto.
let cadena5 = "conversion"
console.log(cadena5.toUpperCase(1))
console.log (" ")


// 4. Reemplaza todas las ocurrencias de una palabra específica en un string por otra palabra.
let cadena6 = "El gato está en el tejado y el gato es blanco"
console.log (cadena6 + " - vamos a quitar gato y añadir perro en su lugar")
console.log(cadena6.replace(/gato/g, "perro"))
console.log (" ")

// 5. Comprueba si una cadena de texto comienza y termina con caracteres específicos.
let cadena7 = "JavaScript es genial"
console.log (cadena7.startsWith("JavaScript"))
console.log(cadena7.endsWith("genial"))
console.log(" ")

// 6. Cuenta el número de palabras en una cadena de texto.
let cadena9="Una super cadena de texto muy larga para contar las letras"
console.log(cadena9.length)




