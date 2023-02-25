const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    name: {
        type: String,
        required: true
        
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type:Number,
        require:true
    },
    setPassword:{
        type:Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    }
})

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;