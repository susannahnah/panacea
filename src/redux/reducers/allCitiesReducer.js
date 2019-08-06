const allCitiesReducer = (state = [{name:''}], action) => {
    switch (action.type) {
        case 'SET_CITIES':
            return action.payload;
        default:
            return state;
    }
}


export default allCitiesReducer;