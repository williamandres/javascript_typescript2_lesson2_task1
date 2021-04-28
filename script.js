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
const mayor6 = alumnos.filter(alumnos => alumnos.promedio > 6)
console.log(mayor6)
*/
//-------------------------------------------------------------------------------------------------
//2.  Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
/*
const menor6 = alumnos.filter(alumnos => alumnos.promedio < 6 && alumnos.edad > 19);
console.log(menor6)

*/
//-----------------------------------------------------------------------------------------------------
//3. Devuelva un arreglo ordenado segun el promedio de forma ascendente.
/*
const promedio = alumnos.map( ({promedio}) => promedio);
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
//----------------------------------------------------------------------------------------------------
//5. Devuelva el promedio general de todos los alumnos 
var suma = function (n) {
    var acumulado = 0;
    for (var i = 0; i < n.length; i++) {
        acumulado += n[i];
    }
    return acumulado;
};
var arraypromedio = alumnos.map(function (_a) {
    var promedio = _a.promedio;
    return promedio;
});
var resultado = suma(arraypromedio);
var promedioTotal = resultado / arraypromedio.length;
console.log(promedioTotal.toFixed(2));
