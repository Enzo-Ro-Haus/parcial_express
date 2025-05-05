const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/book');
const authorRoutes = require('./routes/author');

const app = express();
dotenv.config();

app.use(cors({origin: ''}));