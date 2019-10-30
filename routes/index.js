const express = require('express');
const router = express.Router();
const opcionesController = require('../controllers/opcionesController');
const acuerdoController = require('../controllers/acuerdoController');
const cronogramaController = require('../controllers/cronogramaController');
const sugerenciasController = require('../controllers/sugerenciasController');
const ayudaController = require('../controllers/ayudaController');

const inicioController = require('../controllers/inicioController');



module.exports = () => {
    router.get('/', inicioController.inicio);
    router.get('/opciones', opcionesController.opcionesGrado);
    router.get('/articulos', opcionesController.opciones_articulo);
    router.get('/tesis', opcionesController.opciones_tesis);
    router.get('/seminario', opcionesController.opciones_seminario);

    router.get('/bancosugerencias',sugerenciasController.banco_de_sugerencias);
    router.post('/agregarcomentario',sugerenciasController.agregarComentario);

    router.get('/cronograma', cronogramaController.historial_de_actividades);
    router.get('/nuevoproyecto', cronogramaController.formulario_proyecto);
    router.post('/nuevoproyecto', cronogramaController.agregar_nuevo_proyecto);
    router.get('/acuerdos', acuerdoController.acuerdos);
    
    return router;
}