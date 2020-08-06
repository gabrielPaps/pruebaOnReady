// Creo la clase padre para los vehículos
class Vehiculo {
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

// Creo la subclase para los coches
class Auto extends Vehiculo {
    constructor(marca,modelo,puertas,precio){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
    // La funcion muestra por consola los datos del coche
    showCoche() { 
       return `Marca: ${this.marca} //  Modelo: ${this.modelo}  // Puertas: ${this.puertas} // Precio: $${this.precio}`;
    }
}

// Creo la subclase para las motos
class Moto extends Vehiculo {
    constructor(marca,modelo,cilindradas,precio){
        super(marca, modelo, precio);
        this.cilindradas = cilindradas;
    }
    // La funcion muestra por consola los datos de la moto
    showMoto(){ 
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindradas: ${this.cilindradas} // Precio: $${this.precio}`;
    }
}

// Creo los objetos a usar

const vehiculo1 = new Auto('Peugeot', '206', 4, 200000);
const vehiculo2 = new Moto('Honda','Titan','125c', 60000);
const vehiculo3 = new Auto('Peugeot', '208', 5, 250000);
const vehiculo4 = new Moto('Yamaha', 'YBR', '160c', 80500.50);


// Creo un array donde van a pushearse los nuevos objetos

const vehiculosDisponibles = [];

// Creo los objetos y los pusheo dentro del array
 
vehiculosDisponibles.push( vehiculo1);
vehiculosDisponibles.push( vehiculo2);
vehiculosDisponibles.push( vehiculo3);
vehiculosDisponibles.push( vehiculo4);

//Busco en el array el mas caro

function masCaro(a,b){
    return b.precio - a.precio;
}

vehiculosDisponibles.sort(masCaro);

let caro = vehiculosDisponibles[0].marca + ' ' + vehiculosDisponibles[0].modelo;

//Busco en el array el mas barato

function masBarato(a,b){
    return a.precio - b.precio;
}

vehiculosDisponibles.sort(masBarato);

let barato = vehiculosDisponibles[0].marca + ' ' + vehiculosDisponibles[0].modelo;

// Busco el vehículo con la letra Y

const busqueda = "Y";
const condicion = new RegExp(busqueda);

const resultado = vehiculosDisponibles.filter(function (el) {
    return condicion.test(el.modelo);
})

function vehiculoY(){
    for (i=0; i<resultado.length; i++){ 
        var respuesta = (resultado[i].marca + ' ' + resultado[i].modelo + ' ' + '$' + resultado[i].precio + '\n')
    } return respuesta
};

const vehiculoLetraY= vehiculoY();

// Muestro lo conseguido por consola
console.log(vehiculo1.showCoche() + '\n' + vehiculo2.showMoto() + '\n' + vehiculo3.showCoche() + '\n' + vehiculo4.showMoto() + '\n' + '==========================================================================' + '\n' + 'Vehículo más caro: ' + caro + '\n' + 'Vehículo más barato: ' + barato + '\n' + 'Vehículo que contiene en el modelo la letra ‘Y’: ' + vehiculoLetraY);
