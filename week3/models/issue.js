const mongoose = require('mongoose')
const Schema = mongoose.Schema

//issue schema
const issueSchema = new Schema({
    issueName: {
        type: String,
        required: true,
    }

})


module.exports = mongoose.model("issue", issueSchema)
