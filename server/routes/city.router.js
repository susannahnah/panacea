const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

//GET all cities
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "cities" ORDER BY "id"';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error completely SELECT city query', error)
            res.sendStatus(500)
        })
})

router.get('/city/:cityName', )

//GET selected cities
router.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM "cities" WHERE "id"=$1';
    console.log('here is your city ', req.params.id);

    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('Error completely SELECT city query', error)
            res.sendStatus(500)
        })
})


//POST new city
router.post('/', rejectUnauthenticated, (req, res) => {
    
    let newCity = req.body;

    if(newCity.country_id === ''){
        newCity.country_id = null;
    }

    const queryText = `INSERT INTO "cities"(
        "country_id",
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
        "CDC_link",
        "google_translate_link",
        "local_resources"
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
    RETURNING "id"`;
    const queryValues = [
        newCity.country_id,
        newCity.name,
        newCity.overview,
        newCity.health_risks,
        newCity.ambulance,
        newCity.fire,
        newCity.police,
        newCity.roadside_assistance,
        newCity.wellness_resources,
        newCity.local_health_remedies,
        newCity.healthcare_tourism,
        newCity.WHO_link,
        newCity.CDC_link,
        newCity.google_translate_link,
        newCity.local_resources
    ];
    pool.query(queryText, queryValues)
        .then((result) => {
            res.send(result.rows[0]);
            console.log('this is result.rows from city.router:', result.rows);
        })
        .catch((error) => {
            console.log('Error completing POST city query', error);
            res.sendStatus(500);
        });
});


//UPDATE city
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)

    let updatedCity = req.body;

    if (updatedCity.country_id === '') {
        updatedCity.country_id = null;
    }

    pool.query(`UPDATE "cities"
    SET 
    "country_id"=$1,
    "name"=$2, 
    "overview"=$3, 
    "health_risks"=$4,
    "ambulance"=$5,
    "fire"=$6, 
    "police"=$7, 
    "roadside_assistance"=$8, 
    "wellness_resources"=$9, 
    "local_health_remedies"=$10, 
    "healthcare_tourism"=$11,
    "WHO_link"=$12,
    "CDC_link"=$13,
    "google_translate_link"=$14,
    "local_resources"=$15
    WHERE "id"=$16;`,
        [
            updatedCity.country_id,
            updatedCity.name,
            updatedCity.overview,
            updatedCity.health_risks,
            updatedCity.ambulance,
            updatedCity.fire,
            updatedCity.police,
            updatedCity.roadside_assistance,
            updatedCity.wellness_resources,
            updatedCity.local_health_remedies,
            updatedCity.healthcare_tourism,
            updatedCity.WHO_link,
            updatedCity.CDC_link,
            updatedCity.google_translate_link,
            updatedCity.local_resources,
            updatedCity.id
        ]
    )
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('ERROR completing UPDATE of city', error);
            res.sendStatus(500)
        });
});


//DELETE city 
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM "cities" WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE city query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;