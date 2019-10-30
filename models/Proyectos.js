const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

const ProyectosSchema =  new mongoose.Schema({
    titulo: {
        type: String, 
        required: 'El nombre del proyecto es importante',
        trim : true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    url : {
        type: String,
        lowercase:true
    }
});
// middleware en antes de guarfar a la db
ProyectosSchema.pre('save', function(next) {

    // crear la url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;

    next();
})

// Crear un indice
ProyectosSchema.index({ titulo : 'text' });


module.exports = mongoose.model('Proyectos', ProyectosSchema);