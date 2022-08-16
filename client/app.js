require('dotenv').config()
const express = require('express')
const PORT = 3001;
const app = express()

app.get('/api', (req, res) => {
    res.json({message:'Hello World'})
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));