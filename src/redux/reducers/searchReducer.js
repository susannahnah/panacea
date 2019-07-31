import { combineReducers } from 'redux';

const searchCityReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CITY_SEARCH_RESULT':
            return action.payload;
        default:
            return state;
    }
}

const searchOrganizationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORGANIZATION_SEARCH_RESULT':
            return action.payload;
        default:
            return state;
    }
}

const searchReducer = combineReducers({
    searchCityReducer,
    searchOrganizationReducer,
});

export default searchReducer;