const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /reviews'
    })
})

router.post('/', (req, res, next) => {
    const review = {
        bookId: req.body.bookId,
        text: req.body.text
    }
    res.status(201).json({
        message: 'Review was created',
        review: review
    })
})

router.get('/:reviewId', (req, res, next) => {
    res.status(200).json({
        message: "Review Text",
        id: req.params.reviewId
    })
})


router.patch('/:reviewId', (req, res, next) => {
    res.status(201).json({
        message: 'Updated review'
    })
})

router.delete('/:reviewId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted review'
    })
})



module.exports = router;