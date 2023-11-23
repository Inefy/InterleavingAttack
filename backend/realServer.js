// backend/realServer.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002; // Port for the real server

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Real Server is running');
});

// Example POST route for 2FA (two-factor authentication)
app.post('/2fa', (req, res) => {
  const { code } = req.body;
  console.log('2FA Code:', code);
  // Add your 2FA verification logic here
  res.status(200).json({ message: '2FA successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Real Server running on http://localhost:${port}`);
});
