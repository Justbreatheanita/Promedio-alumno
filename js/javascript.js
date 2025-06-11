//Sumar notas

function Sumadenotas (n1,n2,n3,n4,n5,n6) {
    return n1 + n2 + n3 + n4 + n5 + n6;
    }

const Alumno = [6, 8, 9, 2, 5, 10];
const resultado = Sumadenotas(...Alumno); // los (...) permite que los números funciones como valores separados o sino no me funciona

console.log ("La suma de notas de Anita es", resultado);

//Sacar promedio

function Promedio (resultado, cantidad) {
    return resultado / cantidad;
    }

const Anita = Promedio(resultado, Alumno.length); // Alumno.length dice cuantas notas hay en Alumno

console.log ("El promedio de notas de Anita es", Anita);