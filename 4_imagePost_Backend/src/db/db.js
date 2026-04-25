const mongoose = require('mongoose');
require('dotenv').config();
async function connectDB(){
    await mongoose.connect(process.env.db_URL);
    console.log("Database Connected");
}

module.exports = connectDB;