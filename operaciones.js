const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas_json = fs.readFileSync('citas.json');
    const citas = JSON.parse(citas_json);
    const nueva_cita = {
        "nombre": nombre,
        "edad"  : edad,
        "animal": animal,
        "color" : color,
        "enfermedad" : enfermedad
    };
    citas.push(nueva_cita);
    
    fs.writeFileSync('citas.json', JSON.stringify(citas));
}

const leer = () => {
    const citas_json = fs.readFileSync('citas.json');
    const citas = JSON.parse(citas_json);
    console.log(citas);
}

const vaciar_citas = () => {
    fs.writeFileSync('citas.json', '[]');

}
module.exports = { registrar, leer, vaciar_citas};