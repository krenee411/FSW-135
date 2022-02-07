const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')


//middleware
app.use(express.json())
app.use(morgan('dev'))




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/ClimateAction'); console.log("Connected to DB")
}



app.use('/ClimateAction', require('./routes/ActionRouter.js'))

app.listen(9000, () => {
    console.log("The App is listening on port 9000")
})