const mongoose = require('mongoose');
const Comentario = mongoose.model('Banco_de_comentarios');

exports.banco_de_sugerencias = (req, res) => {
    res.render('bancodesugerencias', {
        nombrePagina: 'Referencia Opciones de grado',
        barra: false
    });
}

exports.agregarComentario = async (req, res) => {
    const comentario = new Comentario(req.body);

    const nuevo_comentario = await comentario.save();

    console.log(comentario);
    res.redirect(`/bancosugerencias`);

    //res.redirect(`/bancosugerencias/${nuevo_comentario.url}`);
    
} 