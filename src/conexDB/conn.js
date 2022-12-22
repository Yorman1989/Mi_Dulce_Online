const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/Colegio", {

    },(err, res) => {
        if(err){
            throw err;
        } else{
            console.log('La Conexion A La Base De Datos Fue Correcta...')
        }
    });

    module.exports = mongoose;