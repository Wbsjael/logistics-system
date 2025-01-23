// server.js or your main backend file
const mongoose = require('mongoose');
require('dotenv').config(); // This loads the environment variables

// Make sure your MONGO_URI environment variable is set correctly
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error: ", err));

