//For server configuration
const http = require('http');
const app = require('./app');
const dotenv = require('dotenv'); // loads environment variable from .env file to process.env file
const mongoose = require('mongoose');

//Config Path
dotenv.config({path: './config.env'});
const port = process.env.PORT || 3333; 
// console.log(process.env.USER)
// Connecting to DB via mongoose
const url = process.env.MONGO_URI;
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
connect.then(()=>{
    console.log('DB Connection Successful.')
}).catch((err) => console.log('Error: '+ err));

const server = http.createServer(app);
server.listen(port);

console.log('Server is running at: 127.0.0.1:'+ port);
