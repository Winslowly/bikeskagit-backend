const { application } = require('express');
const mongoose = require('mongoose');
const Routes = require('./models/todos.js');




// Bike Route Model

const activitySchema = new mongoose.Schema({
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
        type: Number,
        require: true
    },
    elevation:{
        type: Number,
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

})

const Routes = mongoose.model('Route', routeSchema);

module.exports = Route;