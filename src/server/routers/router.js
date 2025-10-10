const express = require('express')
const controller = require('../controllers/controller')

// TODO: Add deconstructed controller functions
// const { getEvent, addEvent } = controller;

const router = express.Router();

// CRUD
// EVENT
router.get('/games', controller.getAllGames)
router.post('/games', (req, res) => { res.send("ADDED EVENT")})

module.exports = router;