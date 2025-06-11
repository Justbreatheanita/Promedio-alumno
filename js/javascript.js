function Sumadenotas (n1,n2,n3,n4,n5,n6) {
    return n1 + n2 + n3 + n4 + n5 + n6;
    }

const Alumno = [6, 8, 9, 2, 5, 10];
const resultado = Sumadenotas(...Alumno); //los ... permite que los números funciones como valores separados

console.log ("La suma de notas de Anita es", resultado);