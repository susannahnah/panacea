const orgDetails = {
    "id": 0,
    "name": '',
    "type": '',
    "recommended": '',
    "twentyfour": '',
    "hours": '',
    "homeopathic_remedies": '',
    "labor_delivery": '',
    "childrens": '',
    "childrens_surgery": '',
    "adult": '',
    "adult_surgery": '',
    "medical_translators": '',
    "comments": '',
    "phone_number": '',
    "website_url": '',
    "lat": '',
    "long": '',
    "google_maps_link": '',

}

const individualOrgReducer = (state = orgDetails, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_ORG':
            return action.payload;
        default:
            return state;
    }
}

export default individualOrgReducer;
