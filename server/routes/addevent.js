const express = require('express');
const router = express.Router();
const User = require('../models/users')
const Event = require('../models/event');

router.post('/add', (req,res, next) => {
    User.find({email: req.body.email})
    .then( event => {
        Event.create(req.body);
        res.redirect('/');
    })
    .catch( err => {
        console.log(err);
        res.status(422).json({
            error: err
        })
    })
})

module.exports = router;