import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchCitySaga(action) {
    try {
        const { data } = yield axios.get(`/api/search/city?city_name=%${action.payload}%`);
        yield put({ type: 'SET_CITY_SEARCH_RESULT', payload: data });
    } catch (error) {
        console.log('Error with search city saga:', error);
    }
}

function* searchOrganizationSaga(action) {
    try {
        const { data } = yield axios.get(`/api/search/organization?organization_name=%${action.payload}%`);
        yield put({ type: 'SET_ORGANIZATION_SEARCH_RESULT', payload: data });
    } catch (error) {
        console.log('Error with search org saga:', error);
    }
}

function* searchSaga() {
    yield takeEvery('SEARCH_ORGANIZATION', searchOrganizationSaga);
    yield takeEvery('SEARCH_CITY', searchCitySaga);
}

export default searchSaga;