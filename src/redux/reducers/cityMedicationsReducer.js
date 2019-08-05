// src/redux/reducers/cityMedicationsReducer.js
const cityMedicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CITY_MEDICATIONS':
            return action.payload;
        case 'CLEAR_MEDICATIONS':
            return [];
        default:
            return state;
    }
}

export default cityMedicationsReducer;