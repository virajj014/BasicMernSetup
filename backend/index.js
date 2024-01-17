const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express()
const port = 8000

require('./db');
const allowedOrigins = ['http://localhost:3000']; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getuserdata', (req, res) => {
    res.json({
        name: 'Harshal Jain',
        email: 'virajj014@gmail.com',
        age: 21
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})