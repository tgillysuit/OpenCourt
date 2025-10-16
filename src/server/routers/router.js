const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router();
const { getAllGames, addGame, getAllUsers, addUser, getAllLocations, addLocation, getAllGamesUsers } = controller;

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