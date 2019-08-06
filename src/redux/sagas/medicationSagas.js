// src/redux/sagas/medicationSagas.js
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newMedicationSaga(action) {
    try {
        yield axios.post('/api/medications', action.payload);
    } catch (error) {
        console.log(`Error with newMedicationSaga:`, error);
    }
}

function* medicationSagas() {
    yield takeEvery('ADD_NEW_MEDICATION', newMedicationSaga);
}

export default medicationSagas;