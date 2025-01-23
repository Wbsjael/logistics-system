require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
if (!uri) {
    console.error('Error: MONGO_URI is not defined in .env file');
    process.exit(1);  // Exit the application if the URI is missing
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


