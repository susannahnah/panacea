import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


//GET specific city
function* selectCitySaga(action) {
    const getCity = yield axios.get(`/api/cities/${action.payload}`)
    yield put({ type: 'SET_INDIVIDUAL_CITY', payload: getCity.data })
    console.log('end of selectCitySaga');
  }

//POST new city function:
function* postCitySaga(action) {
    console.log('hit!');
    try {
        console.log(action.payload);
        yield axios.post('/api/cities', action.payload);
        yield put({ type: 'SET_CITY_SEARCH_RESULT' })
    }
    catch (error) {
        console.log('Error with POST', error);
    }
}

//UPDATE specific city
function* editCitySaga(action) {
    yield axios.put(`/api/cities`, action.payload)
    yield put({ type: 'SET_CITY_SEARCH_RESULT'})
}

//DELTE specific city
function* deleteCitySaga(action) {
    console.log('deleteCitySaga hit')
    try {
      yield axios.delete(`/api/cities/${action.payload}`)
      yield put({type: 'SET_CITY_SEARCH_RESULT'})
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