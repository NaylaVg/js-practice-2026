// Día 1 - Variables en JavaScript

// -------- TIPOS BÁSICOS --------

// string (texto)
let nombre = "Nay";
let ciudad = "Resistencia";

// number (número)
let edad = 35;
let añoActual = 2026;

// boolean (verdadero o falso)
let estudiando = true;
let tieneHijos = true;

// undefined (valor no asignado aún)
let lenguajeFavorito;

// null (valor vacío intencionalmente)
let trabajoActual = null;


// -------- USO DE VARIABLES --------

console.log("Hola, mi nombre es " + nombre);
console.log("Vivo en " + ciudad);
console.log("Tengo " + edad + " años");


// -------- OPERACIONES --------

let añoNacimiento = añoActual - edad;
console.log("Nací aproximadamente en " + añoNacimiento);


// -------- CAMBIAR VALORES --------

lenguajeFavorito = "JavaScript";
console.log("Estoy aprendiendo " + lenguajeFavorito);


// -------- BOOLEANOS --------

if (estudiando) {
    console.log("Estoy estudiando programación 💻");
} else {
    console.log("Hoy tocó descanso");
}


// -------- DESAFÍO CHIQUITO --------

// Cambiá tu edad y ejecutá de nuevo
// ¿Se actualiza el año de nacimiento?
