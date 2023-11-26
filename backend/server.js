// Import necessary libraries
const express = require('express');
const cors = require('cors');

// Initialize express application
const app = express();

// Enable JSON body parsing
app.use(express.json());

// Enable CORS for cross-origin requests (necessary if your client and server are on different domains/ports)
app.use(cors());

// In-memory store for login data
let loginData = {};

// POST endpoint to receive login data from Site 2
app.post('/login-data', (req, res) => {
  const { username, password } = req.body;
  
  // Basic validation
  if (!username || !password) {
    return res.status(400).send('Invalid data');
  }

  // Store the received data
  loginData = { username, password };
  
  // Send a response indicating successful data receipt
  res.send('Login data received');
});

// GET endpoint for Site 1 to retrieve the login data
app.get('/login-data', (req, res) => {
  res.json(loginData);
});

// Choose a port for your server
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
