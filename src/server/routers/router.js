const express = require('express')
const controller = require('../controllers/controller')

// TODO: Add deconstructed controller functions
// const { getEvent, addEvent } = controller;

const router = express.Router();

// CRUD
// Routes:
/* 
GET
- all games
- all users
- all locations
- all games_users
POST
- a game
- a user
- a location
- a game_user
*/
router.get('/games', controller.getAllGames)
router.post('/games', (req, res) => { res.send("ADDED EVENT")})

module.exports = router;