const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Routes = require('.models/routes.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3000, ()=>{
    console.log('listening...');
});

// Create Create Route

app.post('/route', (req,res) =>{
    Route.create(req.body, (err, createdRoute)=>{
        res.json(createdRoute);
    });
});

// Index Route

app.get('/route', (req, res)=>{
    Route.find({}, (err, foundRoute)=>{
        res.json(foundRoute);
    });
});

// Delete Route
 
app.delete('/routes/:id', (req, res)=>{
    Route.findByIdAndRemove(req.params.id, (err, deletedRoute)=>{
        res.json(deletedRoute);
    });
});

// Update Route

app.put('/route/:id', (req, res)=>{
    Route.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRoute)=>{
        res.json(updatedRoute);
    });
});


app.use(cors());
mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

