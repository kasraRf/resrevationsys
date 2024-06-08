// server.js
const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
