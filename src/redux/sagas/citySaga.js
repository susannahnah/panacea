import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//GET all cities function:



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