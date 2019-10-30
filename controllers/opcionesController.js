exports.opcionesGrado = (req, res) => {
    res.render('tipoopciondegrado', {
        nombrePagina : 'Referencia Opciones de grado',
        barra:false
    });
} 

exports.opciones_articulo = (req, res) => {
    res.render('articulos', {
        nombrePagina : 'Referencia Opciones de grado',
        barra:false
    });
} 

exports.opciones_tesis = (req, res) => {
    res.render('tesis', {
        nombrePagina : 'Referencia Opciones de grado',
        barra:false
    });
} 

exports.opciones_seminario = (req, res) => {
    res.render('sminario', {
        nombrePagina : 'Referencia Opciones de grado',
        barra:false
    });
} 