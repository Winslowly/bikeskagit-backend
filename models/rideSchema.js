const mongoose = require('mongoose')


const Schema = mongoose.Schema

// Bike Route Model

const activitySchema = new Schema({
    date: {
        type: String,
        require: true
    },
    startloc: {
        type: String,
        require: true
    },
    endloc:{
        type: String,
        require: true
    },
    mileage:{
        type: String,
        require: true
    },
    elevation:{
        type: String,
        require: true
    },
    notes:{
        type: String,
        require: true
    },
    restpin:{
        type: String,
        require: true
    }
}, {timestamps: true })


module.exports = mongoose.model('Ride', activitySchema)
