// Parte 1 — Datos básicos - Declarar variables para una persona:

nombre
let nombre = "Nayla";

edad
let edad = 35;

dineroEnCuenta
let dineroEnCuenta = 1500;

tieneHijos (booleano)
let tieneHijos = true;

horasDeSuenoAnoche
let horasDeSuenoAnoche = 5;
edad

dineroEnCuenta

tieneHijos (booleano)

horasDeSuenoAnoche

/* Parte 2 — Decisiones de adulto funcional - Usando condicionales, mostrar en consola:

Si tiene menos de 18 →
"Todavía zafás de pagar impuestos"*/

if (edad < 18) {
    console.log("Todavía zafás de pagar impuestos");
}

//Si tiene 18 o más →"Bienvenido al club del estrés"
if (edad >= 18) {
    console.log("Bienvenido al club del estrés");
}

//Si dineroEnCuenta < 1000 →"Modo ahorro activado"
if (dineroEnCuenta < 1000) {
    console.log("Modo ahorro activado");
}

//Si dineroEnCuenta >= 1000 →"Hoy se come algo rico"
if (dineroEnCuenta >= 1000) {
    console.log("Hoy se come algo rico");
}

//Si horasDeSuenoAnoche < 6 →"Sobreviviendo a base de mate"
if (horasDeSuenoAnoche < 6) {
    console.log("Sobreviviendo a base de mate");
}
//Si horasDeSuenoAnoche >= 6 →"Persona funcional detectada"
if (horasDeSuenoAnoche >= 6) {
    console.log("Persona funcional detectada");
} 

//Parte 3 — Combo (acá está la gracia) 
//Mostrar un mensaje especial SOLO si: tieneHijos es true y durmió menos de 6 horas
//Mensaje: "Nivel de dificultad: EXTREMO"

if (tieneHijos && horasDeSuenoAnoche < 6) {
    console.log("Nivel de dificultad: EXTREMO");
}

// Extra (opcional pero recomendado 🧠✨) Crear una variable:

energia = horasDeSuenoAnoche * 10 - edad

//Mostrar:

//si energia < 20 → "No llego a las 21 hs"
if (energia < 20) {
    console.log("No llego a las 21 hs");
}

//si energia >= 20 → "Se puede programar"     
if (energia >= 20) {
    console.log("Se puede programar");
}