const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/city', async(req, res)=>{ // async is just another way of writing promises like .then
    try {
        const { city_name } = req.query; // destructuring the query object only looking for the city name
        const searchQuery = `
        SELECT "cities"."id", "created_at", "country_id", "name", "overview", 
        "health_risks", "ambulance", "fire", "police", "roadside_assistance", 
        "wellness_resources", "local_health_remedies", "healthcare_tourism", 
        "WHO_link", "CDC_link", "google_translate_link", "local_resources", 
        "lat", "long", "countries"."value" as "country_name"
        FROM "public"."cities"
        JOIN "countries" 
        ON "countries"."id"="cities"."country_id"
        WHERE "cities"."name" ILIKE $1;`;
        const { rows } = await pool.query(searchQuery, [city_name]); // destructuring the result only looking for the rows
        res.send(rows);
    } catch (error) {
        throw error;
    }
});

router.get('/organization', async(req, res) => {
    try {
        const { organization_name } = req.query; 
        const searchQuery = 'SELECT * FROM "organizations" WHERE "name" ILIKE $1';
        const { rows } = await pool.query(searchQuery, [organization_name]); 
        res.send(rows);
    } catch (error) {
        throw error;
    }
});

module.exports = router;