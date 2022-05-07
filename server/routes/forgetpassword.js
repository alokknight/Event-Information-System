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
        if(!user || !user.verified){
            return res.status(401).json({  // Unauthorized access - lacks valid authentication
                message: 'No User Found'
            })
        }
        else{
            Token.findOne({userID: user._id})
            .then(async(userToken)=>{
                if(userToken){
                    console.log('already have token', userToken)
                    return res.status(409).json({
                        error: 'Email already sent'
                    })
                }
                else{
                    console.log('token creation')
                    const userToken = new Token({
                        userID: user._id,
                        token: crypto.randomBytes(32).toString("hex")
                    })  
                    userToken.save()
                    console.log('token- ', userToken)
                    const url = `${process.env.BASE_URL}password/reset/${user._id}/${userToken.token}`;
                    sendEmail(user.firstName, user.email, 'Reset Your Password', url)
                    .then(()=>{
                        console.log('email sent')
                        return res.status(201).json({
                            message: 'Email has been sent to reset the password'
                        })
                    })
                    .catch(err=>{
                        console.log('email not seent')
                        return res.status(500).json({error: "Internal Server Error"})
                    })
                }
            })
            .catch(err=>{
                console.log('token error')
                return res.status(500).json({error: "Internal Server Error"})
            })
        }
    })
    .catch(err=>{
        // console.log('Error: ', err);
        return res.status(400).json({
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
        bcrypt.hash(req.body.confPassword,10, (err,hash)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error: 'Internal Server Error'}); // Internal Server Error
            }
            else{
                User.updateOne({_id: req.params.id}, {$set:{password: hash}})
                Token.deleteOne({userID: req.params.id})
                .then(result=>{
                    console.log('Password changed')
                    return res.status(200).json({
                        message: 'Password changed successfully'
                    })
                })
                .catch(err=>{
                    return res.status(200).json({
                        error: 'Password does not changed'
                    })
                })
            }
        })
    })
    .catch(err => {
        return res.status(400).json({
            error: 'Invalid Request'
        })
    })

})

module.exports = router