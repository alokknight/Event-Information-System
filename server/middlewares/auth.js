const jwt = require('jsonwebtoken');
require('dotenv').config({path: './config.env'});

const key = process.env.secret_key;

// module.exports = (req, res, next) => {
//     try{
//         const token = req.headers.authorization.split(" ")[1];
//         const decoded = jwt.verify(token, key);
//         req.userData = decoded;
//         next();
//     }
//     catch{
//         return res.status(401).json({
//             message: 'Check Auth Failed'
//         });
//     }
// }
module.exports ={
    vat: (req,res, next)=>{
        if(req.headers["authorization"]){
            console.log(req.headers)
            const authHeader = req.headers["authorization"]
            const token = authHeader.split(' ')[1]
            console.log("token",token)
            try{
                const decoded = jwt.verify(token, key);
                console.log(decoded)
                req.user = decoded;
                next();
            }
            catch(err){
                console.log(err)
                return res.status(401).json({
                    message: 'Invalid Token'
                })
            }

        }
        else{
            console.log('Token not verified')
            return res.status(401).json({
                message: 'Check Auth Failed'
            });
        }

    }
}