const express = require('express');
const router = express.Router();
const Token = require('../models/token');
const User = require('../models/users');
const crypto = require('crypto');
const bcrypt = require('bcryptjs')
const sendEmail = require('../utils.js/sendEmail');
require('dotenv').config({path: './config.env'})
 
router.post('/forget', async(req,res)=>{
    console.log(req.body)
    User.findOne({email: req.body.email})
    .then(async(user)=>{
        if(!user){
            return res.status(401).json({  // Unauthorized access - lacks valid authentication
                message: 'No User Found'
            })
        }
        const token = new Token({
            userID: user._id,
            token: crypto.randomBytes(32).toString("hex")
        })  
        token.save()
        .then(()=>{
            res.status(201).json({
                message: 'Email has been sent to reset the password'
            })
        })
        const url = `${process.env.BASE_URL}password/reset/${user._id}/${token.token}`;
        await sendEmail(user.firstName, user.email, 'Reset Your Password', url)

    })
    .catch(err=>{
        // console.log('Error: ', err);
        res.status(400).json({
            error: 'Reset Password Link error'
        })
    })
})

// Route for Reset Password
router.put('/reset/:id/:token', async(req,res)=>{
    if(req.body.confPassword !== req.body.newPassword)
        return res.status(400).json({
            message: 'Password does not match'
        })
    Token.findOne({UserID: req.params.id})
    .then(async(user) => {
        if(!user){
            return res.status(401).json({  // Unauthorized access - lacks valid authentication
                message: 'No User Found'
            })
        }
        if(!user.token || user.token !== req.params.token ) return res.status(400).json({message: 'No Token Found'})
        bcrypt.hash(req.body.confPassword,10, async(err,hash)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error: 'Internal Server Error'}); // Internal Server Error
            }
            await User.updateOne({_id: req.params.id}, {$set:{password: hash}})
            await Token.deleteOne({userID: req.params.id})
            .then(result=>{
                console.log('Password changed')
                return res.status(200).json({
                    message: 'Password changed successfully'
                })
            })
            .catch(err=>{
                return res.status(200).json({
                    error: 'Password does not changed successfully'
                })
            })
        })
    })
    .catch(err => {
        return res.status(200).json({
            error: 'Invalid Request'
        })
    })

})

module.exports = router