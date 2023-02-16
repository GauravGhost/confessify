// Module
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
// Custom Module
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3500

connectDB()
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(cookieParser())

// Setting up static path
app.use('/', express.static(path.join(__dirname, '/public')))

// Routing Logic
app.use('/', require('./routes/root'))
app.use('/api', require('./routes/index'))

// Page Not found logic
app.all('*',(req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if(req,accepts('json')){
        res.json({message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

mongoose.connection.once('open', ()=>{
    console.log('Connected to mongoDB')
    app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err=>{
    console.log(err)
})