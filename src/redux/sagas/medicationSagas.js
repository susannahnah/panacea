// src/redux/sagas/medicationSagas.js
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newMedicationSaga(action) {
    try {
        yield axios.post('/api/medications', action.payload);
        const getMedications = yield axios.get(`/api/medications/${action.payload.city_id}`);
        yield put({ type: 'SET_CITY_MEDICATIONS', payload: getMedications.data });
    } catch (error) {
        console.log(`Error with newMedicationSaga:`, error);
    }
}

function* deleteMedicationSaga(action) {
    try {
        console.log(action.payload)
        const deleteResponse = yield axios.delete(`/api/medications/${action.payload}`);
        console.log(deleteResponse.data)
        const getMedications = yield axios.get(`/api/medications/${deleteResponse.data.city_id}`);
        yield put({ type: 'SET_CITY_MEDICATIONS', payload: getMedications.data });
    } catch (error) {
        console.log(`Error with deleteMedicationSaga:`, error);
    }
}

function* medicationSagas() {
    yield takeEvery('ADD_NEW_MEDICATION', newMedicationSaga);
    yield takeEvery('DELETE_MEDICATION', deleteMedicationSaga);
}

export default medicationSagas;