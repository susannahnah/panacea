// src/redux/sagas/citySagas.js
import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';

 // // Get all cities:
 function* fetchCitiesSaga(action) {
    try {
      const cityResponse = yield axios.get('/api/cities')
      console.log('hey cities!', cityResponse);
      
      yield put({ type: 'SET_CITIES', payload: cityResponse.data });
      console.log('end of fetchCitiesSaga')
    } catch (error) {
      console.log(error);
    }
  };

//GET specific city
function* selectCityByIdSaga(action) {
    try {
        const getCity = yield axios.get(`/api/cities/${action.payload}`)
        yield put({ type: 'SET_INDIVIDUAL_CITY', payload: getCity.data })
    } catch (error) {
        console.log(`Error with selectCityByIdSaga:`, error);
    }
}

function* selectCityByNameSaga(action) {
    try {
        const getCity = yield axios.get(`/api/cities/city/${action.payload}`);
        const getMedications = yield axios.get(`/api/medications/${getCity.data.id}`);
        yield put({ type: 'SET_CITY_MEDICATIONS', payload: getMedications.data });
        yield put({ type: 'SET_INDIVIDUAL_CITY', payload: getCity.data });
    } catch (error) {
        console.log(`Error with selectCityByNameSaga:`, error);
    }
}


// POST new city function
// will post a new city object to the database
// get new city by id
// set the individual city to the new city that was just created
function* postNewCitySaga(action) {
    try {
        const newCityIdResponse = yield axios.post('/api/cities', action.payload.city);
        const newCityObjResponse = yield axios.get(`/api/cities/${newCityIdResponse.data.id}`);
        yield put({ type: 'SET_INDIVIDUAL_CITY', payload: newCityObjResponse.data });
    } catch (error) {
        console.log(`Error with postNewCitySaga:`, error);
    }
}


// UPDATE specific city
// refresh individual city
function* editCitySaga(action) {
    console.log(action.payload)
    yield axios.put(`/api/cities`, action.payload);
    const updatedCityResponse = yield axios.get(`/api/cities/${action.payload.id}`);
    yield put({ type: 'SET_INDIVIDUAL_CITY', payload: updatedCityResponse.data });
    // yield put({ type: 'SEARCH_CITY'})
}

// DELETE specific city
function* deleteCitySaga(action) {
    try {
      yield axios.delete(`/api/cities/${action.payload}`)
      yield put({type: 'SEARCH_CITY', payload: "" });
    } catch (error) {
      console.log(`Error with deleteCitySaga:`, error);
      alert('There was a problem deleting the city from the database.');
    }
}


//ALL cities Sagas
function* citySagas() {
    yield takeEvery('SELECT_CITY', selectCityByIdSaga)
    yield takeEvery('SELECT_CITY_BY_NAME', selectCityByNameSaga)
    yield takeEvery('FETCH_CITIES', fetchCitiesSaga)
    yield takeEvery('EDIT_CITY', editCitySaga)
    yield takeEvery('DELETE_CITY', deleteCitySaga)
    yield takeEvery('NEW_CITY', postNewCitySaga)
}

export default citySagas;