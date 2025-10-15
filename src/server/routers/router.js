const express = require('express')
const controller = require('../controllers/controller')

// TODO: Add deconstructed controller functions
// const { getEvent, addEvent } = controller;

const router = express.Router();
const { getAllGames, addGame, getAllUsers, addUser, getAllLocations, addLocation, getAllGamesUsers } = controller;

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
- a game_user (to be added)
*/

// games
router.get('/games', getAllGames)
router.post('/games', addGame)

// users
router.get('/users', getAllUsers)
router.post('/users', addUser)

// locations
router.get('/locations', getAllLocations)
router.post('/locations', addLocation)

// games_users
router.get('/games-users', getAllGamesUsers)

module.exports = router;