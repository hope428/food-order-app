const mongoose = require("mongoose");
const { Schema } = mongoose;


const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)

module.exports = MenuItem