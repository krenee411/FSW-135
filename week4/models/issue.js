
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  comment: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("issue", issueSchema)