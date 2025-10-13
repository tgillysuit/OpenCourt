const db = require('../model/db')

// READ 

const getAllGames = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM games');
        res.json(data);
    } catch (err) {
        console.error('DB error in getAllGames:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM users');
        res.json(data);
    } catch (err) {
        console.error('DB error in getAllUsers:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getAllLocations = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM locations');
        res.json(data);
    } catch (err) {
        console.error('DB error in getAllLocations:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getAllGamesUsers = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM games_users');
        res.json(data);
    } catch (err) {
        console.error('DB error in getAllGamesUsers:', err);
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {getAllGames, getAllUsers, getAllLocations, getAllGamesUsers };