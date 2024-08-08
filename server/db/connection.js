const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE;

console.log('Connecting to:', DB);  // Log the connection string

mongoose.set('strictQuery', false);
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.error('Connection error:', err);
    });
