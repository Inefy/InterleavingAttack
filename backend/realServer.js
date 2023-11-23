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


// Start the server
app.listen(port, () => {
  console.log(`Real Server running on http://localhost:${port}`);
});
