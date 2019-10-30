const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

const Banco_de_comentariosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: 'El titulo del comentario es importante',
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        lowercase: true
    }
});
// middleware en antes de guarfar a la db
Banco_de_comentariosSchema.pre('save', function (next) {

    // crear la url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;

    next();
})

// Crear un indice
Banco_de_comentariosSchema.index({ titulo: 'text' });


module.exports = mongoose.model('Banco_de_comentarios', Banco_de_comentariosSchema);