interface Producto{
    nombre:string,
    precio:number,
}

const telefono:Producto={
    nombre:'Iphone 15',
    precio:20000,
}
const consola:Producto={
    nombre:'Xbox',
    precio:5000,
}

function calcularISV(productos:Producto[]):number{
    let total=0;
    for (let producto of productos){
        total+=producto.precio
    }
    return total*0.15
}

const articulos=[telefono,consola]
const isv=calcularISV(articulos)
console.log('ISV: ', isv);

function calcularISV2(productos:Producto[]):[number,number]{
    let total=0;
    for (let producto of productos){
        total+=producto.precio
    }
    return [total,total*0.15]
}

const [total,isv2]=calcularISV2(articulos)
console.log('Total:',total);
console.log('ISV 2',isv2);
