// DEPENDENCIES
const express = require('express')
// const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// Controllers
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventController = require('./controllers/events_controller')
app.use('/events',  eventController)

const stageController = require('./controllers/stages_controller')
app.use('/stages', stageController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})