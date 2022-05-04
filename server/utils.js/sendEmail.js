const nodemailer = require('nodemailer');
require('dotenv').config({path: './config.env'});

// console.log(process.env.USEREMAIL)
// console.log("HELLO",process.env.PORT)

module.exports = async(name, email, subject, text) => {
    try{
        if(subject === "Verify your account"){
            htmlText = `Dear <b>${name}</b>&#44; <br><br> Welcome, We thank you for your registration at <b>The Event</b> website. <br><br>
            Your Email Address is <b>${email}</b> <br><br> Please Click on the Verify Account link to verify your email address: <a href=${text}>Verify Account</a> <br><br><br>Thanks & Regards<br>The Event Team`;
        }    
        else{
            htmlText = `Dear <b>${name}</b>&#44; <br><br> Please click on the Reset Password link to reset your passsword: 
            <a href=${text}>Reset Password</a> <br><br><br>Thanks & Regards<br>The Event Team`;
        }
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.PORT),
            secure: Boolean(process.env.SECURE), 
            auth: {
                user: process.env.USEREMAIL,
                pass: process.env.PASS
            }
        })  
        await transporter.sendMail({
            from: "The Event",
            to: email,
            subject: subject,
            html: htmlText,
            text: "The Event Team"
        })
        console.log('Email Sent Successfully nodejs');
    }
    catch(error){
        console.log('Email not sent nodejs', error);
    }
}