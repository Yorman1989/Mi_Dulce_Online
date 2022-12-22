var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarreraSchema = Schema({
    Nombre: String,
    Escuela: String,
    Universidad: String
});
const Carrera = mongoose.model('carrera', CarreraSchema);

module.exports = Carrera;