// Dependencies
const events = require('express').Router()
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')

// Find all events
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['available_start_time', 'ASC ']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Event
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { Event_id: req.params.id }
        })
        if (foundEvent) {
            res.status(200).json(foundEvent)
        }
        res.status(404).json({
            message: "Event not Found"
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE Event
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE Event
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvent} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE Event
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Export
module.exports = events