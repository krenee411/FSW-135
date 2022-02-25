
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  discription: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
})

module.exports = mongoose.model("issue", issueSchema)