const express = require('express');
const router = express.Router();
const Token = require('../models/token');
const User = require('../models/users');
const crypto = require('crypto');
const bcrypt = require('bcryptjs')
const sendEmail = require('../utils.js/sendEmail');
require('dotenv').config({path: './config.env'})
 
router.post('/forgot', async(req,res)=>{
    console.log(req.body)
    User.findOne({email: req.body.email})
    .then(async(user)=>{
        if(!user){
            res.status(401).send({  // Unauthorized access - lacks valid authentication
                message: 'No User Found'
            })
        }
        else{
            Token.findOne({userID: user._id})
            .then(async(userToken)=>{
                if(!userToken){
                    const userToken = new Token({
                        userID: user._id,
                        token: crypto.randomBytes(32).toString("hex")
                    })  
                    userToken.save()
                }
                const url = `${process.env.BASE_URL}password/reset/${user._id}/${userToken.token}`;
                await sendEmail(user.firstName, user.email, 'Reset Your Password', url)
                .then(()=>{
                    res.status(201).send({
                        message: 'Email has been sent to reset the password'
                    })
                })
                .catch(err=>{
                    res.status(500).send({error: "Internal Server Error"})
                })
            })
            .catch(err=>{
                res.status(500).send({error: "Internal Server Error"})
            })
        }
    })
    .catch(err=>{
        // console.log('Error: ', err);
        res.status(400).send({
            error: 'Reset Password Link error'
        })
    })
})

// Route for Reset Password
router.put('/reset/:id/:token', async(req,res)=>{
    if(req.body.confPassword !== req.body.newPassword)
        res.status(400).send({
            message: 'Password does not match'
        })
    Token.findOne({UserID: req.params.id})
    .then(async(user) => {
        if(!user){
            res.status(401).send({  // Unauthorized access - lacks valid authentication
                message: 'No User Found'
            })
        }
        if(!user.token || user.token !== req.params.token ) return res.status(400).send({message: 'No Token Found'})
        bcrypt.hash(req.body.confPassword,10, async(err,hash)=>{
            if(err){
                console.log(err);
                res.status(500).send({error: 'Internal Server Error'}); // Internal Server Error
            }
            await User.updateOne({_id: req.params.id}, {$set:{password: hash}})
            await Token.deleteOne({userID: req.params.id})
            .then(result=>{
                console.log('Password changed')
                res.status(200).send({
                    message: 'Password changed successfully'
                })
            })
            .catch(err=>{
                res.status(200).send({
                    error: 'Password does not changed successfully'
                })
            })
        })
    })
    .catch(err => {
        res.status(200).send({
            error: 'Invalid Request'
        })
    })

})

module.exports = router