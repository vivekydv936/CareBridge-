// index.js - Vercel Serverless Entry Point
require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

// Connect to MongoDB
// Note: In serverless environments, this will run on cold start.
connectDB().catch(console.dir);

// Export the Express API
module.exports = app;
