const mongoose = require('mongoose')
const Schema = mongoose.Schema

// inventory schema
const torySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    itemNumber: {
        type: Number,
        required: true
    }
}) 


module.exports = mongoose.model("Inventory", torySchema)
