const db = require('../model/db')

const getAllGames = async (req, res) => {
    db.query('SELECT * FROM games', (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    })
}

module.exports = {getAllGames};