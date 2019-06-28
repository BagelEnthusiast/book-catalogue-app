const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    bookTitle: String,
    username: String
    
})

module.exports = mongoose.model('Review', reviewSchema);

