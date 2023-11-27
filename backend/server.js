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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
