// src/redux/sagas/medicationSagas.js
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newMedicationSaga(action) {
    try {
        yield axios.post('/api/medications', action.payload);
        yield put({ type: 'FETCH_CITY_MEDICATIONS', payload:action.payload })
    } catch (error) {
        console.log(`Error with newMedicationSaga:`, error);
    }
}

function* deleteMedicationSaga(action) {
    try {
        console.log(action.payload)
        const deleteResponse = yield axios.delete(`/api/medications/${action.payload}`);
        console.log(deleteResponse.data)
        yield put({ type: 'FETCH_CITY_MEDICATIONS', payload: deleteResponse.data })
        
    } catch (error) {
        console.log(`Error with deleteMedicationSaga:`, error);
    }
}

function* getCityMedications (action) {
    try {
        const getMedications = yield axios.get(`/api/medications/${action.payload.city_id}`);
        yield put({ type: 'SET_CITY_MEDICATIONS', payload: getMedications.data });
    } catch (error) {
        console.log(`Error with fetching city medications:`, error);
    }
}

function* medicationSagas() {
    yield takeEvery('ADD_NEW_MEDICATION', newMedicationSaga);
    yield takeEvery('DELETE_MEDICATION', deleteMedicationSaga);
    yield takeEvery('FETCH_CITY_MEDICATIONS', getCityMedications);
}

export default medicationSagas;