// src/redux/sagas/medicationSagas.js
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newMedicationSaga(action) {
    try {
        yield axios.post('/api/medications', action.payload);
        yield put({ type: 'FETCH_CITY_MEDICATIONS', payload:action.payload })
    } catch (error) {
    }
}

function* deleteMedicationSaga(action) {
    try {
        const deleteResponse = yield axios.delete(`/api/medications/${action.payload}`);
        yield put({ type: 'FETCH_CITY_MEDICATIONS', payload: deleteResponse.data })
    } catch (error) {
    }
}

function* getCityMedications (action) {
    try {
        const getMedications = yield axios.get(`/api/medications/${action.payload.city_id}`);
        yield put({ type: 'SET_CITY_MEDICATIONS', payload: getMedications.data });
    } catch (error) {
    }
}

function* medicationSagas() {
    yield takeEvery('ADD_NEW_MEDICATION', newMedicationSaga);
    yield takeEvery('DELETE_MEDICATION', deleteMedicationSaga);
    yield takeEvery('FETCH_CITY_MEDICATIONS', getCityMedications);
}

export default medicationSagas;