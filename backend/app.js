const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mediaRoutes = require('./routes/mediaRoutes');

const app = express();

// Connect to database

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/media', mediaRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Frameo API is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
