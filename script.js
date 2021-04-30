var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, correo, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.promedio = promedio;
    }
    return Alumno;
}());
var alumnos = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }
];
// 1.Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.
/*
//version anterior
const mayor6 = alumnos.filter(alumnos => alumnos.promedio > 6)
console.log(mayor6)
*/
function promedioAlto(alumnos) {
    return alumnos.filter(function (alumnos) { return alumnos.promedio > 6; });
}
;
console.log("First Exercise");
console.log(promedioAlto(alumnos));
//-------------------------------------------------------------------------------------------------
//2.  Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
/*
//versión anterior
const menor6 = alumnos.filter(alumnos => alumnos.promedio < 6 && alumnos.edad > 19);
console.log(menor6)
*/
function promedioBajo(alumnos) {
    return alumnos.filter(function (alumnos) { return alumnos.promedio < 6 && alumnos.edad > 19; });
}
console.log("Second Exercise");
console.log(promedioBajo(alumnos));
//-----------------------------------------------------------------------------------------------------
//3. Devuelva un arreglo ordenado segun el promedio de forma ascendente.
/*
const promedio:  = alumnos.map( ({promedio}) => promedio);
const orden = promedio.sort(function(prev:number, next:number):number

{
  // if(prev>next)
  // {
  //   return 1
  // }
  // if(prev<next)
  // {
  //   return -1
  // }
  // return 0
  return prev - next
});

console.log(orden)
*/
//----------------------------------------------------------------------------------------------------
function promedioTotal(alumnos) {
    return alumnos.map(function (alumnos) { return alumnos.promedio; });
}
;
function promedioOrdenado(promedioTotal) {
    return promedioTotal.sort(function (prev, next) {
        return prev - next;
    });
}
;
console.log("Third Exercise");
console.log(promedioOrdenado(promedioTotal(alumnos)));
//4. El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, 
// devuelva un arreglo que cumpla con esta condición
/*
const menor4 = alumnos.map(alumno => {
if(alumno.promedio > 4) return alumno;

return{
  ...alumno,
  promedio: alumno.promedio + 2
}
 
});

console.log(menor4)
*/
function promedioDeficiente(alumnos) {
    return alumnos.filter(function (alumnos) { return alumnos.promedio < 4; }).map(function (alumnos) { return alumnos.promedio + 2; });
}
console.log("Exercise Fourth");
console.log(promedioDeficiente(alumnos));
//----------------------------------------------------------------------------------------------------
//5. Devuelva el promedio general de todos los alumnos 
/*
const suma = (n) => {
  let acumulado = 0;
  
  for(let i = 0; i < n.length; i++)
  {
    acumulado += n[i]
  }

  return acumulado
}

const arraypromedio = alumnos.map( ({promedio}) => promedio)
const resultado = suma(arraypromedio)
const promedioTotal =  resultado/arraypromedio.length
console.log(promedioTotal.toFixed(2))
*/
function sumaPromedios(alumnos) {
    return alumnos.reduce(function (acc, item) {
        return acc += item.promedio;
    }, 0);
}
var promedioGeneral = sumaPromedios(alumnos) / alumnos.length;
console.log("fifth exercise");
console.log(promedioGeneral.toFixed(2));
