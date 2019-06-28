const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "users were fetched"
    })
})


router.post('/', (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    res.status(201).json({
        message: "user was created",
        createdUser: user
    })
})

router.get('/:userId', (req, res, next) => {
    res.status(200).json({
        message: "User details",
        userId: req.params.userId
    })
})

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: "User deleted",
        userId: req.params.userId
    })
})

module.exports = router;