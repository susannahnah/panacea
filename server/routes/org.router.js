const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

//GET all orgs
// router.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "organizations" ORDER BY "id"';
//     pool.query(queryText)
//         .then((result) => {
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log('Error completely SELECT org query', error)
//             res.sendStatus(500)
//         })
// })


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
    "google_maps_link"=$18,
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,
             $12, $13, $14, $15, $16, $17, $18) 
    RETURNING "id"`;
    const queryValues = [
        newOrg.name,
        newOrg.type,
        newOrg.recommend,
        newOrg.twentyfour,
        newOrg.hours,
        newOrg.homeopathic_remedies,
        newOrg.labor_delivery,
        newOrg.childrens,
        newOrg.childrens_surgery,
        newOrg.adult,
        newOrg.adult_surgery,
        newOrg.medical_translators,
        newOrg.comments,
        newOrg.phone_number,
        newOrg.website_url,
        newOrg.lat,
        newOrg.long,
        newOrg.google_maps_link
    ];
    pool.query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(201);
            console.log(result);
        })
        .catch((error) => {
            console.log('Error completing POST org query', error);
            res.sendStatus(500);
        });
});


//UPDATE org
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('testtest', req.body);
    const updateCity = req.body;
    pool.query(`UPDATE "organizations"
    SET 
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
    "google_maps_link"=$18,
    WHERE "id"=$19;`,
        [
            updatedOrg.name,
            updatedOrg.type,
            updatedOrg.recommend,
            updatedOrg.twentyfour,
            updatedOrg.hours,
            updatedOrg.homeopathic_remedies,
            updatedOrg.labor_delivery,
            updatedOrg.childrens,
            updatedOrg.childrens_surgery,
            updatedOrg.adult,
            updatedOrg.adult_surgery,
            updatedOrg.medical_translators,
            updatedOrg.comments,
            updatedOrg.phone_number,
            updatedOrg.website_url,
            updatedOrg.lat,
            updatedOrg.long,
            updatedOrg.google_maps_link
        ]
    )
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('ERROR completing UPDATE of org', error);
            res.sendStatus(500)
        });
});


//DELETE org 
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM "organizations" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE org query', err);
            res.sendStatus(500);
        });
});

module.exports = router;