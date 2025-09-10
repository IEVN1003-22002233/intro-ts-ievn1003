interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:34,
    cancion:'Mess',
    detalles:{
    autor:'Ed Sheeran',
    anio:2012
}
}

console.log('El volumen actual es de: ', reproductor.volumen)
console.log('El segundo actual es de: ', reproductor.segundo)
console.log('La cancion actual es de: ', reproductor.cancion)
console.log('El autor es: ', reproductor.detalles.autor)
console.log('El año es: ', reproductor.detalles.anio)

const {volumen,segundo,cancion,detalles}=reproductor
const {autor,anio}=detalles
console.log('El volumen actual es de: ',volumen)
console.log('El segundo actual es de: ',segundo)
console.log('La cancion actual es de: ',cancion)
console.log('El autor es: ',autor)
console.log('El año es: ',anio)

const shlss:string[]=['Fiona', 'Carl', 'Ian']
console.log('Personaje 1: ', shlss[0]);
console.log('Personaje 2: ', shlss[1]);
console.log('Personaje 3: ', shlss[2]);

const [p1,p2,p3]=shlss
console.log('Personaje 1: ',p1);
console.log('Personaje 2: ',p2);
console.log('Personaje 3: ',p3);