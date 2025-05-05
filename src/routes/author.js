const authorControllers = require('../controllers/authorController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

router.get('/authors', authorControllers.getAllAuthors);
router.get('/authors/:id', authorControllers.getAuthorById);
router.post('/author',
    [
        body('nombre').notEmpty().withMessage('El campo nombre es necesario'),
        body('fachaNacimiento').notEmpty().withMessage('El campo fecha de nacimiento es necesaria'),
        body('nacionalidad').notEmpty().withMessage('El campo nacionalidad es necesario'),
    ],
     authorControllers.createAuthor);

router.put('/authors/:id', authorControllers.updateAuthor);
router.delete('/authors/:id', authorControllers.deleteAuthor);

module.exports = router;