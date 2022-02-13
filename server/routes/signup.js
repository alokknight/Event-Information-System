const express = require('express');
const User = require('../models/users');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose  = require('mongoose');

router.post('/', (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length>=1){
           return res.status(409).json({  // 409 - request conflict with the current state of the target resource.
               message: 'User Already Exist'
           }); 
        }
        else{
            // Create a new User
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    console.log(err);
                    return res.status(500).json({error: err}); // Internal Server Error
                }
                else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash
                    });
                    user.save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({ // Created- indicates request has succeeded
                            message: 'User Created'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error:err
                        })
                    });
                }
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(422).json({ // Unable to process the request entity
            error:err
        })
    })
});

module.exports = router;