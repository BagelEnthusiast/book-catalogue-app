const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    reviews: [{
        text: String,
        bookTitle: String
    }],
    books: [{
        title: String,
        author: String,
        img_url: String
    }]
    
})

module.exports = mongoose.model('User', userSchema);
