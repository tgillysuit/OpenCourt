const db = require('../model/db')

// GAMES 

const getAllGames = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM games');
        res.json(data).status(201);
    } catch (err) {
        console.error('DB error in getAllGames:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addGame = async (req, res) => {
    try {
        const { game_name, location_id } = req.body;
        // TODO: Add validation
        console.log(game_name, location_id)
        const [result] = await db.query('INSERT INTO games (game_name, location_id) VALUES (?, ?)', [game_name, location_id]);
        res.status(201).json({ id: result.insertId })
    } catch (err) {
        console.error('DB error in addGame:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

// Users
const getAllUsers = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM users');
        res.json(data).status(201);
    } catch (err) {
        console.error('DB error in getAllUsers:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addUser = async (req, res) => {
    try {
        const { user_name } = req.body;
        // TODO: Add validation
        const [result] = await db.query('INSERT INTO users (user_name) VALUES (?)', [user_name]);
        res.status(201).json({ id: result.insertId })
    } catch (err) {
        console.error('DB error in addUser:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

// Locations
const getAllLocations = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM locations');
        res.json(data).status(201);
    } catch (err) {
        console.error('DB error in getAllLocations:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const addLocation = async (req, res) => {
    console.log("Address is: ", req.body.address)
    try {
        const { location_name, address } = req.body;
        // TODO: Add validation
        const [result] = await db.query('INSERT INTO locations (location_name, address) VALUES (?, ?)', [location_name], [address]);
        res.status(201).json({ id: result.insertId })
    } catch (err) {
        console.error('DB error in addLocation:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getAllGamesUsers = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM games_users');
        res.json(data).status(201);
    } catch (err) {
        console.error('DB error in getAllGamesUsers:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {getAllGames, addGame, getAllUsers, addUser, getAllLocations, addLocation, getAllGamesUsers };