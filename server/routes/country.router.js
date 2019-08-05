// server/routes/country.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve array of countries from the database
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "countries" ORDER BY "value";`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log(`Error completing the SELECT query to retrieve countries:`, err);
            res.sendStatus(500);
        }); // end query
}); // end get

module.exports = router;