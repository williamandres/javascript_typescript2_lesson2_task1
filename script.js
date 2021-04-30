var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
function promedioAlto(alumnos) {
    return alumnos.filter(function (alumnos) { return alumnos.promedio > 6; });
}
;
console.log("First Exercise");
console.log(promedioAlto(alumnos));
//-------------------------------------------------------------------------------------------------
//2.  Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
function promedioBajo(alumnos) {
    return alumnos.filter(function (alumnos) { return alumnos.promedio < 6 && alumnos.edad > 19; });
}
console.log("Second Exercise");
console.log(promedioBajo(alumnos));
//-----------------------------------------------------------------------------------------------------
//3. Devuelva un arreglo ordenado segun el promedio de forma ascendente.
/*
function promedioTotal(alumnos:Alumno[]):number[]{
  return alumnos.map(alumnos => alumnos.promedio);
};

function promedioOrdenado(promedioTotal:number[]):number[]{
  return promedioTotal.sort(function(prev:number,next:number):number {
    return prev - next;
  })
};

console.log(`Third Exercise`)
console.log(promedioOrdenado(promedioTotal(alumnos)));
*/
function promedioOrdenado(alumnos) {
    var alumnosCopy = __spreadArray([], alumnos);
    return alumnosCopy.sort(function (promedio1, promedio2) {
        return promedio1.promedio - promedio2.promedio;
    });
}
;
console.log("Third Exercise");
console.log(promedioOrdenado(alumnos));
//----------------------------------------------------------------------------------------------------
//4. El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, 
// devuelva un arreglo que cumpla con esta condición
/*
function promedioDeficiente(alumnos:Alumno[]){
  return alumnos.filter(alumnos => alumnos.promedio < 4 ).map(alumnos=> alumnos.promedio +2);
}

console.log(`Exercise Fourth`);
console.log(promedioDeficiente(alumnos));
*/
function menor4(alumnos) {
    return alumnos.map(function (alumno) {
        return __assign(__assign({}, alumno), { promedio: alumno.promedio < 4 ? alumno.promedio + 2 : alumno.promedio });
    });
}
console.log("Fourth");
console.log(menor4(alumnos));
//----------------------------------------------------------------------------------------------------
//5. Devuelva el promedio general de todos los alumnos 
function sumaPromedios(alumnos) {
    return alumnos.reduce(function (acc, item) {
        return acc += item.promedio;
    }, 0);
}
var promedioGeneral = sumaPromedios(alumnos) / alumnos.length;
console.log("fifth exercise");
console.log(promedioGeneral.toFixed(2));
