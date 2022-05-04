const express = require('express');
const User = require('../models/users');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Mongoose  = require('mongoose');
const sendEmail = require('../utils.js/sendEmail')
const crypto = require('crypto')
const Token = require('../models/token')
require('dotenv').config({path: './config.env'});


router.post('/', async(req, res, next) => {
    await User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length>=1){
           return res.status(409).json({  // 409 - request conflict with the current state of the target resource.
                message: 'User Already Exist'
            });
        }
        else{
            // Create a new User
         bcrypt.hash(req.body.password, 10, async(err, hash) => {
                if(err){
                    console.log(err);
                    return res.status(500).json({error: err}); // Internal Server Error
                }
                else{
                    const user = new User({
                        _id: new Mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        verified: false,
                        role: 'user'
                    });
                    user.save()
                    .then(result => {
                        // console.log(result);
                        res.status(201).json({ // Created- indicates request has succeeded
                            message: 'An email sent to your account please verify nodejs'
                        })
                    })
                    const token = new Token({
                        userID: user._id,
                        token:crypto.randomBytes(32).toString("hex")
                    });
                    token.save()
                    console.log(token.token)
                    const url = `${process.env.BASE_URL}signup/${user._id}/verify/${token.token}`;
                    await sendEmail(user.firstName, user.email, "Verify your account", url)
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

// Verify user route
router.get("/:id/verify/:token", async(req,res)=>{
    try{
        const user = await User.findOne({_id: req.params.id})
        if(!user) return res.status(400).send({message: 'Invalid Link'})
        console.log("USer N-", user)
        const token = await Token.findOne({
            userID: user._id,
            token: req.params.token
        }) 
        if(!token) 
            return res.status(400).send({ 
                message: 'Invalid Link'
            })
        console.log("token -", token.token)
        await User.updateOne({_id: user._id},{$set:{ verified: true}})
        await Token.deleteOne({userID: user._id})
        res.status(200).send({
            message: "Email verified successfully"
        })
    }
    catch(err){
        res.status(200).send({
            error: "Internal Server Error"
        })
    }
})

module.exports = router;