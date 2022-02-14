const jwt = require('jsonwebtoken');
require('dotenv').config({path: './config.env'});

const key = process.env.secret_key;

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, key);
        req.userData = decoded;
        next();
    }
    catch{
        return res.status(401).json({
            message: 'Check Auth Failed'
        });
    }
}