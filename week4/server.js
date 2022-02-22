
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
//const jwt = require('jwt-express');
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));
//app.use(jwt.init('secret'))



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/ClimateSchema');
  console.log("Connected to MongoDB");
}

//Routes
app.use('/auth', require('./routes/authRouter')); //??
//app.use('/api', require({secret: process.env.SECRET, algorithms: ['RS256']})); //??
app.use('/issueSchema', require('./routes/issueRouter'));
app.use('/commentSchema', require('./routes/commentRouter'));
app.use('/userSchema', require('./routes/userRouter'))



app.listen(9000, () => {
  console.log(`The App is listening in port 9000`);
})