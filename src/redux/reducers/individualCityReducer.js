const cityDetails = {
    "id": 0,
    "name": '',
    "overview": '',
    "health_risks": '',
    "ambulance": '',
    "fire": '',
    "police": '',
    "roadside_assistance": '',
    "wellness_resources": '',
    "local_health_remedies": '',
    "healthcare_tourism": '',
    "WHO_link": '',
    "CDC_link": '',
    "google_translate_link": '',
    "local_resources": '',
}

const individualCityReducer = (state = cityDetails, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_CITY':
            return action.payload;
        case 'CLEAR_INDIVIDUAL_CITY':
            return cityDetails;
        default:
            return state;
    }
}

export default individualCityReducer;
