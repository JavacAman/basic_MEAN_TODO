const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env;
const cors = require('cors');
require('./config/dbConnection');

app.use(cors(
   {
      origin:'http://localhost:4200', // Adjust the origin as needed
   }
));
app.get('/', (req, res)=>{
   res.send('Aman Kumar');  
});

const users = require('./routes/users')

app.use('/api', users);
app.listen(PORT,()=>{
   console.log(`Server is running on port: ${PORT}`);
} );
