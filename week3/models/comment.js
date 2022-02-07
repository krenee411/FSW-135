const mongoose = require('mongoose')
const Schema = mongoose.Schema

//comment schema
const commentSchema = new Schema({
    commentName: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("comment", commentSchema)
