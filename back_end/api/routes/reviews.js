const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Review = require('../models/review');


router.get('/', (req, res, next) => {
    Review.find()
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
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        username: req.body.username
    });
    review.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /reviews",
            createdReview: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:reviewId', (req, res, next) => {
   const id = req.params.reviewId;
   Review.findById(id)
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


router.patch('/:reviewId', (req, res, next) => {
    const id = req.params.reviewId;
    const updateOps = {};
    // for (const ops of req.body) {
    //     updateOps[ops.propName] = ops.value
    // }

    for (const key in req.body) {
        updateOps[key] = req.body[key]
    }
    Review.updateOne({_id: id}, { $set: updateOps})
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

router.delete('/:reviewId', (req, res, next) => {
   const id = req.params.reviewId;
   Review.deleteOne({_id: id})
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