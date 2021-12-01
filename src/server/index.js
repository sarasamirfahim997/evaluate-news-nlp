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
    axios.post(`https://api.meaningcloud.com/summarization-1.0?key=${API_KEY}&sentences=2&url=${url}`)
    .then(response=>{
        const {summary} = response.data
        res.send(summary)
    })
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})
