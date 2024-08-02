// Import required modules using CommonJS syntax
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { connect, connection, Schema, model } = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000; // Use a different port than your frontend

// Middleware
app.use(cors());
app.use(json());

// MongoDB Connection
connect('mongodb://localhost:27017/contact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Define MongoDB Schema
const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

// Use 'portfolio' collection
const Contact = model('portfolios', contactSchema); // Use 'portfolio' collection

// API Endpoint for Contact Form Submission
app.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    await newContact.save();

    // Response
    res.status(200).json({ code: 200, message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ code: 500, message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
