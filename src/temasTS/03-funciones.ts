function sumar(a:number, b:number): number {
    return a+b 
}
console.log(sumar(23,65))

const sumarFlecha = (a:number, b:number): number => a + b
console.log(sumarFlecha(3,65))

function multiplicar(n1:number, n2?:number, base:number=2){
    return n1*base
}
console.log(multiplicar(23,65))
console.log(multiplicar(2, undefined, 5))
console.log(multiplicar(5))

interface Mascota{
    nombre:string,
    edad:number,
    tipo:string,
    mostrarEdad:()=>void
}

function crearMascota(mascotas:Mascota,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}

const mascota1:Mascota={
    nombre:'Luna',
    edad:0,
    tipo:'gato',
    mostrarEdad(){
        return `La edad de ${this.nombre} es ${this.edad} años`
    }
}
crearMascota(mascota1,2)
