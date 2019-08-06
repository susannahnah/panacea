// server/routes/medication.router.js
const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "medications" WHERE "city_id"=$1`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error retrieving medications from database:`, error);
        res.sendStatus(500);
    })
})

// POST route to add a new medication to the database
router.post('/', rejectUnauthenticated, (req, res) => {
    const newMed = req.body;
    const queryText = `INSERT INTO "medications"(
        "city_id",
        "generic_name_us",
        "brand_name_us",
        "brand_name_translated"
    ) VALUES ($1, $2, $3, $4);`;
    const queryValues = [
        newMed.city_id,
        newMed.generic_name_us,
        newMed.brand_name_us,
        newMed.brand_name_translated
    ];
    pool.query(queryText, queryValues)
    .then((result) => {
            res.sendStatus(201);
            console.log(result);
        })
        .catch((error) => {
            console.log('Error posting new medication to the database:', error);
            res.sendStatus(500);
        });
})

module.exports = router;