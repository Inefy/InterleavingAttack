// backend/shellServer.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Port for the shell server

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Support URL-encoded bodies

// Routes
app.get('/', (req, res) => {
  res.send('Shell Server is running');
});

// Example POST route for login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login Attempt:', email, password);
  // Add your authentication logic here
  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Shell Server running on http://localhost:${port}`);
});
