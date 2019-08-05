// src/redux/reducers/countriesReducer.js
const emptyArray = [{
    "id": '',
    "value": ''
}]

// will hold array of countries from database
const countriesReducer = (state = emptyArray, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return action.payload;
        default:
            return state;
    }
}

export default countriesReducer;