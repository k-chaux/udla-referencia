const mongoose = require('mongoose');
const Proyecto = mongoose.model('Proyectos');


exports.historial_de_actividades = (req, res) => {
    res.render('cronograma', {
        nombrePagina: 'Referencia Opciones de grado',
        barra: false
    });
}

exports.formulario_proyecto = (req, res) => {
    res.render('nuevoproyecto', {
        nombrePagina: 'Referencia Opciones de grado',
        barra: false
    }); 
}

exports.agregar_nuevo_proyecto = (req, res) => {


    //const proyecto = new Proyecto(req.body);

    
} 