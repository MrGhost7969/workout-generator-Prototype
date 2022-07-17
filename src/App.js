require('dotenv').config()
const express = require('express')
const PORT = 3001;
const app = express()

// Idk how to use express lmao
app.use('/api/', require('./components/Workouts'))

app.get('/api/workouts', (req, res) => {
    res.json({message:'Hello World'})
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));

