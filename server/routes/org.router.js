const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

//GET all orgs
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "organizations" ORDER BY "id"';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error completely SELECT org query', error)
            res.sendStatus(500)
        })
})


//GET selected orgs
router.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM "organizations" WHERE "id"=$1';
    console.log('here is your org ', req.params.id);

    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('Error completely SELECT org query', error)
            res.sendStatus(500)
        })
})


//POST new org
router.post('/', rejectUnauthenticated, (req, res) => {
    const newCity = req.body;
    const queryText = `INSERT INTO "organizations"(
    "name"=$1,
    "type"=$2,
    "recommended"=$3,
    "twentyfour"=$4,
    "hours"=$5,
    "homeopathic_remedies"=$6,
    "labor_delivery"=$7,
    "childrens"=$8,
    "childrens_surgery"=$9,
    "adult"=$10,
    "adult_surgery"=$11,
    "medical_translators"=$12,
    "comments"=$13,
    "phone_number"=$14,
    "website_url"=$15,
    "lat"=$16,
    "long"=$17,
    "google_maps_link"=418,
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,
             $12, $13, $14, $15, $16, $17, $18) 
    RETURNING "id"`;
    const queryValues = [
        newOrg.name,
        newOrg.overview,
        newOrg.health_risks,
        newOrg.ambulance,
        newOrg.fire,
        newOrg.police,
        newOrg.roadside_assistance,
        newOrg.wellness_resources,
        newOrg.local_health_remedies,
        newOrg.healthcare_tourism,
        newOrg.WHO_link,
        newOrg.CDC_link,
        newOrg.google_translate_link,
        newOrg.local_resources
    ];
    pool.query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(201);
            console.log(result);
        })
        .catch((error) => {
            console.log('Error completing POST city query', error);
            res.sendStatus(500);
        });
});


//UPDATE city
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('testtest', req.body);
    const updateCity = req.body;
    pool.query(`UPDATE "cities"
    SET 
    "name"=$1, 
    "overview"=$2, 
    "health_risks"=$3,
    "ambulance"=$4,
    "fire"=$5, 
    "police"=$6, 
    "roadside_assistance"=$7, 
    "wellness_resources"=$8, 
    "local_health_remedies"=$9, 
    "healthcare_tourism"=$10,
    "WHO_link"=$11,
    "CDC_link"=$12,
    "google_translate_link"=$13,
    "local_resources"=$14
    WHERE "id"=$15;`,
        [
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