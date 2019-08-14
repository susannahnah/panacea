// src/redux/sagas/countrySaga.js
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// make an axios GET request to retrieve array of countries from server
// set countries reducer to response data
function* fetchCountriesSaga() {
    try {
        const { data } = yield axios.get('/api/countries');
        yield put({ type: 'SET_COUNTRIES', payload: data });
    } catch (err) {
    }
}

function* countrySaga() {
    yield takeLatest('FETCH_COUNTRIES', fetchCountriesSaga);
}

export default countrySaga;