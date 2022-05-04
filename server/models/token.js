const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Token = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique: true
    },
    token:{
        type: String,
        default: ''
    }
},{timestamps: true})

module.exports = mongoose.model('Token', Token);