const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

const ActividadesSchema =  new mongoose.Schema({
    titulo: {
        type: String, 
        trim : true
    },
    url : {
        type: String,
        lowercase:true
    }
});
// middleware en antes de guarfar a la db
ActividadesSchema.pre('save', function(next) {

    // crear la url
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;

    next();
})

// Crear un indice
ActividadesSchema.index({ titulo : 'text' });


module.exports = mongoose.model('Actividades', ActividadesSchema);