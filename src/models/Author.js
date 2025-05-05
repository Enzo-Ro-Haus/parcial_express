const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    bio: String,
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    nacionalidad: {
        type: String,
        required: true,
    },
    libros: {
        type: [mongoose.Schema.type.ObjectId, ref='libro'],
        requiered: true,
    }
});

module.exports = mongoose.model('Author', authorSchema);