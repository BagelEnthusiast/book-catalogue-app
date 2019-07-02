const http = require('http')
const app = require('./app')

// const morgan = require('morgan')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const express = require('express')

//server setup
const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port)

// //App setup
// const app = express()
// const server = app.listen(3003, () => {
//     console.log("server is up and listening on 3003...")
// })

// //static files
// app.use(express.static('../Front-End/public'))
// app.use(cors())

// //Body Parser
// app.use(bodyParser.json())