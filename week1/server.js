const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')


//middleware
app.use(express.json())
app.use(morgan('dev'))



//connecting to DB -- this is a connection string
mongoose.connect('mongodb://localhost:27017/InventorySchema',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

//routes
app.use('/InventorySchema', require('./routes/toryRouter'))

app.listen(9000, () => {
    console.log("The App is listening on port 9000")
})