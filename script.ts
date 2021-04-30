class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;
  
    constructor(nombre: string, edad: number, correo: string, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.promedio = promedio;
    }
  }
  
  
  const alumnos: Array<Alumno> = [
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
]


// 1.Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.




function promedioAlto(alumnos:Alumno[]):Alumno[]{
  return alumnos.filter(alumnos =>alumnos.promedio > 6);
};
console.log(`First Exercise`)
console.log(promedioAlto(alumnos))

//-------------------------------------------------------------------------------------------------


//2.  Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.


function promedioBajo(alumnos:Alumno[]):Alumno[]{
  return alumnos.filter(alumnos => alumnos.promedio < 6 && alumnos.edad > 19);}

  console.log(`Second Exercise`)
  console.log(promedioBajo(alumnos))


//-----------------------------------------------------------------------------------------------------



//3. Devuelva un arreglo ordenado segun el promedio de forma ascendente.

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



//----------------------------------------------------------------------------------------------------



//4. El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, 
// devuelva un arreglo que cumpla con esta condición



function promedioDeficiente(alumnos:Alumno[]):number[]{
  return alumnos.filter(alumnos => alumnos.promedio < 4 ).map(alumnos=> alumnos.promedio +2);
}

console.log(`Exercise Fourth`);
console.log(promedioDeficiente(alumnos));


//----------------------------------------------------------------------------------------------------




//5. Devuelva el promedio general de todos los alumnos 



function sumaPromedios(alumnos:Alumno[]):number{
  return alumnos.reduce((acc,item) => {
    return acc += item.promedio;
    
  },0);
}

const promedioGeneral:number = sumaPromedios(alumnos)/alumnos.length;
console.log(`fifth exercise`);
console.log(promedioGeneral.toFixed(2))


