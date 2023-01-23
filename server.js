require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const rideRoutes = require('./routes/rides')

// Express app
const app = express()

// Middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// // Routes
app.use('/api/rides', rideRoutes)

// Connect to DB
mongoose.connect('mongodb+srv://bikeskagit:bikesbikesbikes@cluster0.ntlbuci.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{

// listen for requests
app.listen(4000, ()=>{
    console.log('connected to db listening...on port 4000')
})
})

    .catch((error) => {
        console.log(error)
    })


