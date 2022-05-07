const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils.js/sendEmail')
const crypto = require('crypto')
const Token = require('../models/token')
require('dotenv').config({path: './config.env'});

const key = process.env.secret_key;

const User = require('../models/users');

router.post('/', (req,res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length<1){
            // No user found
            return res.status(401).json({  // Unauthorized access - lacks valid authentication
                message: 'No user found'
            })
        }
        else{
            bcrypt.compare(req.body.password, user[0].password, (err,result) => {
                if(err){
                    return res.status(403).json({
                        message: 'Forbidden: Auth Failed'
                    });
                }
                // Resend Verification link if not verified
                else if(!user[0].verified){
                    Token.findOne({userID: user[0]._id})
                    .then((userToken) => {
                        // console.log(userToken)
                        if(!userToken){
                            const token = new Token({
                                userID: user[0]._id,
                                token:crypto.randomBytes(32).toString("hex")
                            });
                            token.save()
                        }
                        const url = `${process.env.BASE_URL}signup/${user[0]._id}/verify/${userToken.token}`;
                        sendEmail(user[0].firstName, user[0].email, "Verify your account", url)
                        .then(()=>{
                            return res.status(201).json({
                                message: 'An Email has been sent to verify the account'
                            })
                        })
                        .catch(err=>{
                            return res.status(500).json({error: "Internal Server Error"})
                        })
                    })
                    .catch(err=>{
                        console.log("Internal Server Error", err);
                        return res.status(500).json({
                            error: 'Internal Server Error'
                        })
                    })
                }
                else if(result) {
                    const token = jwt.sign({
                        userId: user[0]._id,
                        firstName: user[0].firstName,
                        lastName: user[0].lastName,
                        email: user[0].email, 
                        role: user[0].role
                    }, key, { expiresIn: '48h'});
                    return res.status(200).json({
                        message: 'Auth Successful',
                        token: token,
                    })
                }
                else{
                    return res.status(403).json({
                        message: 'Auth Failed'
                    })
                }
            })
        }
        
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({
            error: err
        })
    })
})

module.exports = router;