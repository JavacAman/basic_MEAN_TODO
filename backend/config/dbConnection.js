const mongoose = require('mongoose');
const connectDB= mongoose.connect(process.env.CON_STR)
  .then(()=> console.log('MongoDb Connected'))
  .catch(err => console.log('MongoDb Connection Error:', err));

  module.exports= connectDB;
// This code connects to a MongoDB database using Mongoose.
// It connects to a database named 'test' on the local machine at port 27017.