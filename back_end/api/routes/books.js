const pry = require('pryjs')

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('../models/book');
const User = require('../models/user');


router.get('/', (req, res, next) => {
    Book.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
})

router.post('/', (req, res, next) => {
    //  Book.findOne({where: {title: req.body.title, author: req.body.author, username: req.body.username}}) 
    //  .then(b => {console.log("jafoeijfpaewoifjaewpofijaewfpoij")})
    // //  {
    // //     console.log(Book.findOne({where: {title: req.body.title, author: req.body.author, username: req.body.username}}))
    // //     res.status(201).json({})
    // //     return
    // // }

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
        img_url: req.body.img_url,
        username: req.body.username,
        userId: req.body.userId,
        currentPage: req.body.currentPage,
        rating: req.body.rating
    });
    //add update user here
    // let user = User.findById(req.body.userId)
    
    // const updateOps = {
    //     title: req.body.title,
    //     author: req.body.author,
    //     img_url: req.body.img_url
    // }
    // let newBooks = [...user.books, updateOps]
    // // for (const key in req.body) {
    // //     updateOps[key] = req.body[key]
    // // }
    // User.updateOne({_id: req.body.userId}, { $set: {updateOps}})

    book.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /books",
            createdBook: result

        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

})

router.get('/:bookId', (req, res, next) => {
    
   
    const id = req.params.bookId;
    Book.findById(id)
        // .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc)
            } else {
                res.status(404).json({message: 'No valid entry for provided ID'});
            }
            
        })
        .catch(err => res.status(500).json({error: err.message}));
})

router.patch('/:bookId', (req, res, next) => {
   const id = req.params.bookId
//    const updateOps = {};
// //    eval(pry.it)
//    for (const ops in req.body) {
//        updateOps[ops] = req.body[ops]
//    }
    Book.updateOne({_id: id}, { $set: req.body
       
    })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err.message
        })
    })

})

router.delete('/:bookId', (req, res, next) => {
    
    const id = req.params.bookId;
    console.log(id)
    Book.deleteOne({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err.message
        })
    })

})

module.exports = router;