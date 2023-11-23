const mongoose = require('mongoose');

require('dotenv').config()

const MONGO_URL =process.env.MONGO_URL;

mongoose.connection.once('open',()=>{
    console.log("MongoDB Connection Ready...");
});

