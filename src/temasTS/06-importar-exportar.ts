import { calcularISV2, type Producto } from "./05-desestructura-funciones";
 
//importar y exportar
const carrito:Producto[]=[
    {nombre:"Bicicleta",precio:500},
    {nombre:"Monitor 20 pulgadas",precio:300},
    {nombre:"TV 50 pulgadas",precio:700},
];//arreglo de productos
 
const [isv,total]=calcularISV2(carrito);
console.log("ISV: "+isv);
console.log("Total: "+total);
 