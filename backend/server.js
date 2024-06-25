const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (using krishi database)
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
