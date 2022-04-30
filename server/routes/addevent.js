const express = require('express');
const router = express.Router();
const User = require('../models/users')
const Event = require('../models/event');
const Mongoose  = require('mongoose');
const jwt =require('jsonwebtoken')
const {vat} = require('../middlewares/auth')

// Show All Event of a User
router.get('/', vat, (req, res, next)=>{
    User.find({userEmail: req.userData.email})
    .then((user) => {
        if(user.length<1){
            return res.status(409).json({
                message: 'Invalid User'
            })
        }
        else{
            Event.find({userEmail: req.userData.email})
            .then(data => {
                // console.log(data)
                // console.log('events fetched')
                res.send(data)
            })
            .catch(err => {
                console.log("err",err)
                res.status(404).json({
                    message: 'No events for this user'
                })
            })
            
        }
    })
    .catch(err => console.log(err))
})

// Show Event Route
router.get('/:eName', (req,res)=>{
    Event.findOne({eName: req.params.eName})
    // .populate('event')
    .then(data => {
        // console.log(data)
        res.send(data)
    })
    .catch(err =>{
        console.log(err);
        return res.status(404).json({
            message: 'No Event found'
        })
    })
})

// Add Event Route
router.post('/add', vat, (req,res, next) => {
    User.find({email: req.userData.email})
    .exec()
    .then( user => {
        if(user.length<1){
            return res.status(409).json({
                message: 'Invalid User'
            })
        }
        else{
            // console.log(req.body)
            // console.log(req.headers)
            const event = new Event({
                _id: new Mongoose.Types.ObjectId,
                eTitle: req.body.eTitle,
                eName: req.body.eName,
                eBody: req.body.eBody,
                eDate: req.body.eDate,
                eVenue: req.body.eVenue,
                address: req.body.address,
                pinCode: req.body.pinCode,
                city: req.body.city,
                country: req.body.country,
                code: req.body.code,
                mobNo: req.body.mobNo,
                email: req.body.email,
                userEmail: req.userData.email
            })
            event.save()
            .then(result =>{
                console.log(result);
                return res.status(201).json({
                    message: 'Event Added'
                })
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        }
    })
    .catch( err => {
        console.log(err);
        res.status(422).json({ 
            error: err
        })
    })
})

// Update Event Route
router.put('/:eName', vat, async (req,res,next) => {
    try{
        const result = await Event.findOneAndUpdate({userEmail: req.userData.email,  eName: req.params.eName}, req.body)
        .then(result=> {
            if(!result){
                return res.status(403).json({
                    message: 'Forbidden'
                })
            }
            return res.status(200).json({
                message: 'Event Updated'
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(403).json({
                message: 'Forbidden'
            })
        })
    }
    catch(err){
        console.log(err)
        return res.status(403).json({
            message: 'Forbidden'
        })
    }
})

// Delete Event Route 
router.delete('/:eName', vat, async (req,res,next)=>{
    try{
        const result = await Event.deleteOne({userEmail: req.userData.email,  eName: req.params.eName}, req.body)
        .then(result=> {
            return res.status(200).json({
                message: 'Event Deleted'
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(403).json({
                message: 'Forbidden'
            })
        })
    }
    catch(err){
        console.log(err)
        return res.status(403).json({
            message: 'Forbidden'
        })
    }
})

module.exports = router;