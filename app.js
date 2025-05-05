const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bookRoutes = require('./src/routes/book');
const authorRoutes = require('./src/routes/author');

const app = express();
dotenv.config();

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Conectado a mongo db');
    app.listen(process.env.PORT, () => {
        console.log(`Servidor en el puerto ${process.env.PORT}`)
    });
}).catch((err) => console.error('Error en la conexión', err));