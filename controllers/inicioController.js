exports.inicio = (req, res) => {
    res.render('index', {
        nombrePagina : 'Referencia Opciones de grado',
        barra:false
    });
} 