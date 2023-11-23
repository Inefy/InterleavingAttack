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


// Start the server
app.listen(port, () => {
  console.log(`Shell Server running on http://localhost:${port}`);
});
