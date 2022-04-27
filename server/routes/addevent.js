const express = require('express');
const router = express.Router();
const User = require('../models/users')
const Event = require('../models/event');
const Mongoose  = require('mongoose');


// Show Event Route
router.get('/:eName', (req,res)=>{
    Event.findOne({eName: req.params.eName})
    // .populate('event')
    .then(data => {
        console.log(data)
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
router.post('/add', (req,res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then( user => {
        if(user.length<1){
            return res.status(409).json({
                message: 'Invalid User'
            })
        }
        else{
            console.log(req.body)
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
                email: req.body.email
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



module.exports = router;