const mongoose = require('mongoose')
const Schema = mongoose.Schema

//user schema
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model("user", userSchema)
