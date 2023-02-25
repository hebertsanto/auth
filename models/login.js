const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    password:{
        type: Number,
        required: true
    },
    email: {
      type: String,
      required: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    }
  });
  const User = mongoose.model('User', userSchema);
module.exports = User;