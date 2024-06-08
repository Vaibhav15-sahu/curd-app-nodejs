const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    age : {
        type: Number,
        required: true
    },
    post : {
        type : String,
        enum : ['user', 'admin', 'owner'],
        default : 'user'
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;