CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "countries" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR
);

CREATE TABLE "cities" (
	"id" SERIAL PRIMARY KEY,
	"created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
	"country_id" INT REFERENCES "countries" NOT NULL,
	"name" VARCHAR NOT NULL,
	"overview" VARCHAR,
	"health_risks" VARCHAR,
	"ambulance" VARCHAR,
	"fire" VARCHAR,
	"police" VARCHAR,
	"roadside_assistance" VARCHAR,
	"wellness_resources" VARCHAR,
	"local_health_remedies" VARCHAR,
	"healthcare_tourism" VARCHAR,
	"WHO_link" VARCHAR,
	"CDC_link" VARCHAR,
	"google_translate_link" VARCHAR,
	"local_resources" VARCHAR,
);

CREATE TABLE "organizations" (
  "id" SERIAL PRIMARY KEY,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "city_id" INT REFERENCES "cities" NOT NULL,
  "name" VARCHAR NOT NULL,
  "type" VARCHAR NOT NULL,
  "recommended" BOOLEAN DEFAULT FALSE,
  "24_hour" BOOLEAN DEFAULT FALSE,
  "homeopathic_remedies" VARCHAR,
  "labor_delivery" BOOLEAN,
  "childrens" BOOLEAN,
  "childrens_surgical" BOOLEAN,
  "adult" BOOLEAN,
  "adult_surgical" BOOLEAN,
  "medical_translators" BOOLEAN,
  "pros" VARCHAR,
  "cons" VARCHAR,
  "coordinates" VARCHAR,
  "google_maps_link" VARCHAR
);

CREATE TABLE "medications" (
	"id" SERIAL PRIMARY KEY,
	"city_id" INT REFERENCES "cities" NOT NULL,
	"generic_name_us" VARCHAR,
	"brand_name_us" VARCHAR,
	"brand_name_translated" VARCHAR
);