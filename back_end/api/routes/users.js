const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const User = require('../models/user')

router.get('/', (req, res, next) => {
    User.find()
    .exec()
    .then(data => {
        console.log(data);
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        reviews: req.body.reviews,
        books: req.body.books
    });
    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /users",
            createdUser: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:userId', (req, res, next) => {
   const id = req.params.userId;
   User.findById(id)
   .exec()
   .then(doc => {
       console.log(doc);
       if (doc) {
           res.status(200).json(doc)
       } else {
            res.status(404).json({message: "No valid entry for provided ID"})
       }
   })
   .catch(err => res.status(500).json({error: err.message}))
})


router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    // for (const ops of req.body) {
    //     updateOps[ops.propName] = ops.value
    // }

    for (const key in req.body) {
        updateOps[key] = req.body[key]
    }
    User.updateOne({_id: id}, { $set: updateOps})
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

router.delete('/:userId', (req, res, next) => {
   const id = req.params.userId;
   User.deleteOne({_id: id})
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