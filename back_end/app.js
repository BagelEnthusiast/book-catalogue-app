const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const bookRoutes = require('./api/routes/books');
const userRoutes = require('./api/routes/users');
const reviewRoutes = require('./api/routes/reviews');

mongoose.connect(
    'mongodb+srv://Nathan:' + 
        process.env.MONGO_ATLAS_PW + 
        '@mod-5-project-7v5yr.mongodb.net/test?retryWrites=true&w=majority',
    {
    useNewUrlParser: true
    }
)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
})

//routes which should handle requests
//middleware forwards requests to the routes
app.use('/books', bookRoutes)
app.use('/users', userRoutes)
app.use('/reviews', reviewRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;