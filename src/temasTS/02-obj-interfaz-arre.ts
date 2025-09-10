interface Alumno{
    nombre: string,
    edad: number,
    activo: boolean,
    email?:string, //el signo indica q es opcional
    nota: number | string
}


const alumno:Alumno={
    nombre: "Juan",
    edad: 23,
    activo: true,
    email:"juan@gmail.com",
    nota: 9.5
}

console.table(alumno)

let mascotas:string[]=['perro','gato','conejo']
mascotas.push('tortuga')
console.log(mascotas)
mascotas[1]='pez'
console.log(mascotas)

let edades:(number|string)[]=[23,45,67,'89']
edades.push(57)
edades.push('24')
console.log(edades)
edades[2]='55'
console.log(edades)
