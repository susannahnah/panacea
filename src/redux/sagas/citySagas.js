import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';


//GET specific city
function* selectCitySaga(action) {
    const getCity = yield axios.get(`/api/cities/${action.payload}`)
    yield put({ type: 'SET_INDIVIDUAL_CITY', payload: getCity.data })
    console.log('end of selectCitySaga');
  }

// POST new city function
// will post a new city object to the database 
// then will post each medication to the database with the newCityId
function* postCitySaga(action) {
    try {
        const cityResponse = yield axios.post('/api/cities', action.payload.city);
        yield all( action.payload.medications.map( med => {
            return (
                axios.post('/api/medications', {
                    city_id: cityResponse.data.id,
                    generic_name_us: med.generic_name_us,
                    brand_name_us: med.brand_name_us,
                    brand_name_translated: med.brand_name_translated,
                })
            ); // end axios post for one medication
        })); // end yield all
        yield put({ type: 'SEARCH_CITY' })
    } catch (error) {
        console.log('Error with postCitySaga:', error);
    }
}

//UPDATE specific city
function* editCitySaga(action) {
    yield axios.put(`/api/cities`, action.payload)
    yield put({ type: 'SEARCH_CITY'})
}

//DELETE specific city
function* deleteCitySaga(action) {
    console.log('deleteCitySaga hit')
    try {
      yield axios.delete(`/api/cities/${action.payload}`)
      yield put({type: 'SEARCH_CITY'})
    } catch (error) {
      console.log(error);
      alert('Unable to delete item');
    }
}


//ALL cities Sagas
function* citySagas() {
    yield takeEvery('SELECT_CITY', selectCitySaga)
    yield takeEvery('POST_CITY', postCitySaga)
    yield takeEvery('EDIT_CITY', editCitySaga)
    yield takeEvery('DELETE_CITY', deleteCitySaga)
}

export default citySagas;