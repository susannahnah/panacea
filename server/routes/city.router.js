const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


//POST new city
router.post('/', rejectUnauthenticated, (req, res) => {
    const newCity = req.body;
    const queryText = `INSERT INTO "cities"(
        "name", 
        "overview", 
        "health_risks",
        "ambulance",
        "fire", 
        "police", 
        "roadside_assistance", 
        "wellness_resources", 
        "local_health_remedies", 
        "healthcare_tourism",
        "WHO_link",
        "CDC_link"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
    RETURNING "id"`;
    const queryValues = [
        newCity.name,
        newCity.overview,
        newCity.health_risks,
        newCity.ambulance,
        newCity.fire, 
        newCity.police,
        newCity.roadside_assistance,
        
    ]

})





module.exports = router;