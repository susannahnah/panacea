const router = require('express').Router();
const pool = require('../modules/pool');

// USER ORGANIZATION GET ROUTE
router.get('/map', async (req, res, next) => {
    try {
        const selectQuery = `SELECT "id", "created_at", "city_id", "name", "type", "recommended", 
        "24_hour", "hours", "homeopathic_remedies", "labor_delivery", "childrens", "childrens_surgical", 
        "adult", "adult_surgical", "medical_translators", "comments", "phone_number", "website_url", 
        "lat", "long" as "lng", "google_maps_link" 
        FROM "public"."organizations"
        WHERE "city_id"=$1 AND "type"=$2`;
        const { city_id, orgTyp } = req.query;
        const { rows } = await pool.query(selectQuery, [city_id, orgType]);
        res.send(rows);
    } catch (error) {
        next(error);
    }
});

module.exports = router;