import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchCitySaga(action) {
    try {
        const { data } = yield axios.get(`/api/search/city?city_name=%${action.payload}%`);
        yield put({ type: 'SET_CITY_SEARCH_RESULT', payload: data });
    } catch (error) {
    }
}

// Action.payload is the country name from cities page
function* searchCityByCountrySaga(action) {
    try {
        const { data } = yield axios.get(`/api/search/country?country_name=%${action.payload}%`);
        yield put({ type: 'SET_CITY_SEARCH_RESULT', payload: data }); // data from response.data
    } catch (error) {
    }
}

function* searchOrganizationSaga(action) {
    try {
        const { data } = yield axios.get(`/api/search/organization?organization_name=%${action.payload}%`);
        yield put({ type: 'SET_ORGANIZATION_SEARCH_RESULT', payload: data });
    } catch (error) {
    }
}

function* searchSaga() {
    yield takeEvery('SEARCH_ORGANIZATION', searchOrganizationSaga);
    yield takeEvery('SEARCH_CITY', searchCitySaga);
    yield takeEvery('SEARCH_CITY_BY_COUNTRY', searchCityByCountrySaga);
}

export default searchSaga;