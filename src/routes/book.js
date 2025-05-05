const bookControllers = require('../controllers/bookController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

router.get('/books', bookControllers.getAllBook);
router.get('/books/:id', bookControllers.getBookById);
router.post('/books',
    [
        body('titulo').notEmpty().withMessage('El campo titulo es necesario'),
        body('genero').notEmpty().withMessage('El campo genero es necesario'),
        body('publicacion').notEmpty().withMessage('El campo publicacion es necesario'),
        body('disponible').notEmpty().withMessage('El campo disponible es obligatorio')
    ],
     bookControllers.createBook);
router.put('/book/:id', bookControllers.updateBook);
router.delete('/book/:id', bookControllers.deleteBook);

module.exports = router;