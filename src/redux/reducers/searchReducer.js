const searchOrganizationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORGANIZATION_SEARCH_RESULT':
            return action.payload;
        default:
            return state;
    }
}

export default searchOrganizationReducer;