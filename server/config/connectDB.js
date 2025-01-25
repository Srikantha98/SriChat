const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });

        connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });
        
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error);
        process.exit(1); // Exit the process with a failure status
    }
}

module.exports = connectDB;
