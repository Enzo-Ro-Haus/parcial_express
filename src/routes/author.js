const authorControllers = require('../controllers/authorController');
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

router.get('/', authorControllers.getAllAuthors);
router.get('/:id', authorControllers.getAuthorById);
router.post('/',
    [
        body('nombre').notEmpty().withMessage('El campo nombre es necesario'),
        body('fachaNacimiento').notEmpty().withMessage('El campo fecha de nacimiento es necesaria'),
        body('nacionalidad').notEmpty().withMessage('El campo nacionalidad es necesario'),
    ],
     authorControllers.createAuthor);

router.put('/:id', authorControllers.updateAuthor);
router.delete('/:id', authorControllers.deleteAuthor);

module.exports = router;