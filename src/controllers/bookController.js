const express = require('express');
const { validationResult } = require('express-validator');
const Book = require('../models/Book');

exports.getAllBook = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book) return res.status(404).json({message: 'Libro no encontrado'});
    res.json(book);
};

exports.createBook = async (req, res) => {
    const errores = await validationResult(req.params);
    if(!errores.isEmpty()) return res.status(400).json({message: errores.array()});
    const newBook = new Book(req.params);
    newBook.save();
    res.status(201).json({message: 'Libro creado correctamente'});
};

exports.updateBook = async (req, res) => {
    const book = await Book.findById(req.params.id, req.body, {new: true});
    res.json(book);
};

exports.deleteBook = async (req, res) => {
    try{
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message: 'Autor no encontrado'});
        return res.json({message: 'Autor eliminado correctamente'});
    }catch(error){
        return res.status(500).json({message: 'Error en el servidor'});
    }
};