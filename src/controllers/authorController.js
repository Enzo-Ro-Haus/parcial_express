const express = require('express');
const { validationResult } = require('express-validator');
const Author = require('../models/Author');
const Book = require('../models/Book');

exports.getAllAuthors = async (req, res) => {
    const authors = await Authors.find().populate(Book);
    res.json(authors);
};

exports.getAuthorById = async (req, res) => {
    const author = await Author.findById(req.params.id).populate(Book);
    if(!author) return res.status(404).json({message: 'Autor no encontrado'});
    res.json(author);
};

exports.createAuthor = async (req, res) => {
    const errores = await validationResult(req.params);
    if(!errores.isEmpty()) return res.status(400).json({message: errores.array()});
    const newAutor = new Author(req.params);
    newAutor.save();
    res.status(201).json({message: 'Autor creado correctamente'});
};

exports.updateAuthor = async (req, res) => {
    const autor = await Author.findById(req.params.id, req.body, {new: true}).populate(Book);
    res.json(autor);
};

exports.deleteAuthor = async (req, res) => {
    try{
        const deleted = await Author.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message: 'Autor no encontrado'});
        return res.json({message: 'Autor eliminado correctamente'});
    }catch(error){
        return res.status(500).json({message: 'Error en el servidor'});
    }
};