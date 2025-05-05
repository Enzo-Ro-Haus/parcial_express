const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    resumen: String,
    genero: {
        type: String,
        required: true,
    },
    publicacion: {
        type: Date,
        required: true,
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true,
    }
});

module.exports = mongoose.model('Book', bookSchema);