const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

const ArticulosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true
    },
    clasificacion: {
        type: String,
        trim: true,
    },
    autor: {
        type: String,
        lowercase: true
    },
    idioma: {
        type: String,
        trim: true,
    },
    ano: {
        type: String,
        lowercase: true
    }
});
// middleware en antes de guarfar a la db
ArticulosSchema.pre('save', function (next) {

    // crear la url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;

    next();
})

// Crear un indice
ArticulosSchema.index({ titulo: 'text' });


module.exports = mongoose.model('Articulos', ArticulosSchema);