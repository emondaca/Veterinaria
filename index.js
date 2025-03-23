const argumentos = process.argv.slice(2);
const { registrar, leer, vaciar_citas} = require('./operaciones');

operacion = argumentos[0];

if(operacion === "registrar"){
    if (argumentos.length < 6) {
        console.log("faltan valores para realizar el registro, recuerde ue esto son, en el mismo orden: nombre, edad, animal, color, enfermedad")
    }
    else {
        if (argumentos.length > 6) {
        console.log("Se han indicado argumentos en exceso, recuerde que los valores que se requieren para el registro son, en ese orden: nombre, edad, animal, color, enfermedad")
        }
        else {
        registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]);
        console.log("Se ha registrado una nueva cita");
        }
    } 
}

else {
    if (operacion === "leer"){
    leer();
    }
    else {
        if (operacion === "vaciar_citas") {
            vaciar_citas();
            console.log("Se ha vaciado el archivo de citas")
        }
        else {
            console.log("operación desconocida")
        }
    
    }
}
