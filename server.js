const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("Error: MONGO_URI is not defined in .env file");
    process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error: ", err));

