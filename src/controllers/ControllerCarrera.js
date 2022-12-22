const { query } = require("express");
const { default: mongoose } = require("mongoose");
const Carrera = require("../models/carrera");

function prueba(req, res){
    res.status(200).send({
        message: 'Haciendo Una Prueba'
    });
}

function saveCarrera(req, res){
    var myCarrera = new Carrera(req.body);
    myCarrera.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function buscarData(req, res){
    var idCarrera = req.params.id;
    Carrera.findById(idCarrera).exec((err, result) => {
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
}

function listarTodo(req, res){
    var idCarrera = req.params.idb;
    if(!idCarrera){
        var result = Carrera.find({}).sort('Nombre');
    } else{
        var result = Carrera.find({carrera:idCarrera}).sort('Nombre');
    }

    result.exec(function(err, result){
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
    
}

function deleteCarrera(req, res){
    var idCarrera = req.params.id;
    Carrera.findByIdAndRemove(idCarrera).exec((err, carrera) => {
        if(err){
            res.status(500).send({message: 'Error Al Momento De Ejecutar La Consulta'});
        } else{
            if(!result){
                res.status(404).send({message: 'El registro No Se Encuentra'});
            } else{
                res.status(200).send({result});
            }
        }
    });
}

function updateCarrera(req, res){
    var id = req.params.id;
    Carrera.findByIdAndUpdate({_id: id}, req.body, {new: true},
        function(err, Carrera){
            if(err){
                res.send(err);
            }
            res.json(Carrera);
        });
}

module.exports = {
    prueba,
    saveCarrera,
    buscarData,
    listarTodo,
    deleteCarrera,
    updateCarrera
}