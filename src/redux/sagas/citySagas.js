import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//GET all cities function:
function* fetchCitiesSaga(action) {
    try {
        const cityResponse = yield axios.get('/api/cities')
        console.log('cool cities brah', cityResponse);
        yield put({ type: 'SET_CITIES', payload: cityResponse.data });
        console.log('end of fetchCitiesSaga');
    } catch (error) {
        console.log(error);
    }
};


//POST new city function:
function* postCitySaga(action) {
    console.log('hit!');
    try {
        console.log(action.payload);
        yield axios.post('/api/cities', action.payload);
        // yield put({ type: 'FETCH_CITIES' })
    }
    catch (error) {
        console.log('Error with POST', error);
    }
}

//ALL cities Sagas
function* citySagas() {
    yield takeEvery('POST_CITY', postCitySaga)
}

export default citySagas;