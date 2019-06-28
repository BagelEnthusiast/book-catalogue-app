const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('../models/book');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /books'
    })
})

router.post('/', (req, res, next) => {
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
        img_url: req.body.img_url
    });
    book.save().then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /books',
        createdBook: book
    })
})

router.get('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
        // .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => res.status(500).json({error: err.message}));
})

router.patch('/:bookId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated book'
    });

})

router.delete('/:bookId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted book'
    });

})

module.exports = router;