const Ride = require('../models/rideSchema')
const mongoose = require('mongoose')

// get all rides    
const getRides = async (req,res) => {
    const rides = await Ride.find({}).sort({createdAt: -1})

    res.status(200).json(rides)
}

// get single ride
const getRide = async (req, res) => {
    const {id}= req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ride'})
    }

    const ride = await Ride.findById(id)
    
    if (!ride) {
        return res.status(404).json({error: 'No such ride'})
    }

    res.status(200).json(ride)
}

// create new ride
const createRide = async (req, res) => {
    const {date, startloc, endloc, mileage, elevation, notes, restpin} = req.body
    
    //add doc to db
    try{
        const ride = await Ride.create({date, startloc, endloc, mileage, elevation, notes, restpin})
        res.status(200).json(ride)
    }   catch (error) {
        res.status(400).json({error:error.message})
    }
}
//  delete a ride
const deleteRide = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ride'})
    }

    const ride = await Ride.findOneAndDelete({_id: id})

    if (!ride) {
        return res.status(400).json({error: 'No such ride'})
    }

    res.status(200).json(ride)
}

// update a ride
const updateRide = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ride'})
    }
    const ride = await Ride.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!ride) {
        return res.status(400).json({error: 'No such ride'})
    }

    res.status(200).json(ride)
}


module.exports = {
    getRides,
    getRide,
    createRide,
    deleteRide,
    updateRide
}