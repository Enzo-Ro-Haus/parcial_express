const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/book');
const authorRoutes = require('./routes/author');

const app = express();
dotenv.config();

app.use(cors({origin: 'http:/localhost:'}));
app.use(express.json());

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log('Conectado a mongo db');
    app.listen(process.env.PORT, () => {
        console.log(`Servidor en el puerto ${process.env.PORT}`)
    });
}).catch((err) => console.error('Error en la conexión', err));