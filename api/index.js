const express = require('express');
const axios = require('axios');

const app = express();

require('dotenv').config();

app.get('/api/hello', async (req, res) => {
    const clientName = req.query.user_name || 'User';

    let clientIp = (req.ip != '::ffff:127.0.0.1') ? req.ip : '41.203.78.171';

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${clientIp}`;

    const response = await fetch(apiUrl, {
        mode: 'cors'
    });
    const data = await response.json();

    const location = data.location.name;
    const temp = data.current.temp_c;

    res.json({
        "client_ip": clientIp,
        "location": location,
        "greeting": `Hello, ${clientName}! the temperature is ${temp} degree Celsius in ${location}`
    });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
