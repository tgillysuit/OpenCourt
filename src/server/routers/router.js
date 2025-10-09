const express = require('express')
const controller = require('../controllers/controller')

// TODO: Add deconstructed controller functions
// const { getEvent, addEvent } = controller;

const router = express.Router();

// CRUD
// EVENT
router.get('/event', (req, res) => { res.send("GOT EVENT")})
router.post('/event', (req, res) => { res.send("ADDED EVENT")})

export default router;