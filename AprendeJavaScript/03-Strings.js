// Strings (cadenas de texto)

// Concatenación

let myName = "Alberto"
let apellido = "Campanero Arevalo"
let greeting = "Hola, " + myName + "! con apellidos: " +apellido 
console.log (myName)
console.log(apellido)
console.log(greeting)
console.log("El tipo de palabra es: " +typeof greeting)
console.log (" ")
// Longitud

console.log("La longitud de la variable greeting es: " +greeting.length)
console.log("La longitud de mi nombre es: " +myName.length)
console.log("La longitud de mis apellidos son: " +apellido.length)
console.log (" ")


// Acceso a caracteres - para su acceso ten en cuenta que empezaremos contando la primera letra desde 0

console.log(greeting[0])
console.log(greeting[11])
console.log(greeting[3])
console.log(greeting[20])
console.log(myName[2])
console.log(apellido[4])
console.log(apellido[0])

console.log (" ")

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Alberto"))
console.log(greeting.indexOf("Campanero"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Alberto"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 11)) // Sección
console.log(greeting.replace("Alberto", "aLbErToOoOoO")) // Reemplazo 
console.log (" ")
let minusculas = " esta frase esta en minúsculas, hasta que usemos el toUpperCase para convertirla en mayúsculas"
console.log(minusculas)
console.log("Vamos a hacer magia: " +minusculas.toUpperCase())
let mayusculas = " POR EL CONTRARIO, SI LO QUE DESEAMOS ES CONVERTIR LA FRASE A MINÚSCULAS, TENDREMOS QUE USAR EL LOWERCASE"
console.log (" ")
console.log (mayusculas)
console.log("Repetimos esa magia para cambiar el tamaño de las letras: " +mayusculas.toLowerCase())
console.log (" ")
console.log("Vamos a trabajar con el includes")
let prueba = "Con esta frase vamos a añadir palabras y ver si están o no están: Alberto , dia , verano , trabajo , casa , salario"
console.log("Practica de includes, esta presente esta palabra????")
console.log (prueba.includes("Con")) // esta presente - true
console.log(prueba.includes("Alberto")) // esta presente - true
console.log(prueba.includes("money")) // esta presente - false, es salario
console.log(prueba.includes("ahorrar")) // esta presente - false, para nada
console.log (" ")
console.log(prueba.slice(0, 11)) // Con esto vamos a incluir un intervalo de frase
console.log(prueba.replace("salario", "money"))
console.log(prueba)

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)