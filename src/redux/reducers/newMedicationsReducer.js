// src/redux/reducers/newMedicationsReducer.js
const newMedicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_MEDICATION':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default newMedicationsReducer;