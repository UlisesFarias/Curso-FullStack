const arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primerNumero, ,tercerNumero, ,quintoNumero, ...restoDeNumeros]= arrayNumero

//console.log(primerNumero);
//console.log(tercerNumero);
//console.log(quintoNumero);
//console.log(restoDeNumeros);

const mascota = {
     nombre:"Yuli",
     tipoDeMascota: "perra",
    color : "blanco",
    raza : "caniche"
}
const {nombre,tipoDeMascota,color,raza}=mascota
console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es una hermosa ${tipoDeMascota}, de
color: ${color} y su raza es: ${raza}.`);