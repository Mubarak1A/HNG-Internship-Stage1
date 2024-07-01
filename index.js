const express = require('express')
const axios = require('axios')

const app = express()

require('dotenv').config()

app.get('/api/hello', (req, res) => {
    res.send(req.ip)
})


app.listen(3000, () => {
    console.log('Server running at port 3000')
})