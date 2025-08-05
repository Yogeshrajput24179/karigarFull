const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const config = require('./config');
const PORT = config.port || 8000

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); 
app.get('/', (req, res) => {
  res.send('Welcome to the Karigar API');
});




mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log('🚀 Server running on {PORT} ');
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });
