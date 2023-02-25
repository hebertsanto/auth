const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ProductSchema = new schema({
    title:{
        required: true,
        type: 'string',
    },
    content:{
        required: true,
        type:String
    },
    data:{
        required: true,
        type:Number,
    },
    provider:{
        required: true,
        type:String
    }

})

module.exports = mongoose.model('Product', ProductSchema);