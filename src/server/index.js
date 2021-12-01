const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8081

const API_KEY = process.env.API_KEY



app.post('/evaluate', (req, res)=>{
    const {url} = req.body
    axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`)
    .then(response=>{
        const {agreement, subjectivity, confidence, irony } = response.data
        res.send({agreement, subjectivity, confidence, irony })
    })
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})
