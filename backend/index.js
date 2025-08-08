const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const config = require('./config');
const path = require('path');
const upload = require('./middleware/Upload');

dotenv.config();
const app = express();
const PORT = config.port || 8000;

// Middleware
app.use(cors());
app.use(express.json());

/// Middleware
app.use(cors()); // if frontend is running on a different port
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Karigar API');
});

// DB Connection + Server Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });
  