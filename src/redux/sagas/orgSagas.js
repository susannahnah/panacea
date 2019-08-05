import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//GET specific org
function* selectOrgSaga(action) {
    const getOrg = yield axios.get(`/api/organizations/${action.payload}`)
    yield put({ type: 'SET_INDIVIDUAL_CITY', payload: getOrg.data })
    console.log('end of selectOrgSaga');
  }

//POST new org function:
function* postOrgSaga(action) {
    console.log('hit!');
    try {
        console.log(action.payload);
        yield axios.post('/api/organizations', action.payload);
        yield put({ type: 'SET_ORGANIZATION_SEARCH_RESULT' })
    }
    catch (error) {
        console.log('Error with POST', error);
    }
}

//UPDATE specific org
function* editOrgSaga(action) {
    yield axios.put(`/api/organizations`, action.payload)
    yield put({ type: 'SET_ORGANIZATION_SEARCH_RESULT'})
    console.log('org updated')
}

//DELTE specific org
function* deleteOrgSaga(action) {
    console.log('deleteOrgSaga hit')
    try {
      yield axios.delete(`/api/organizations/${action.payload}`)
      yield put({type: 'SET_ORGANIZATION_SEARCH_RESULT'})
    } catch (error) {
      console.log(error);
      alert('Unable to delete item');
    }
}


//ALL org Sagas
function* citySagas() {
    yield takeEvery('SELECT_ORG', selectOrgSaga)
    yield takeEvery('POST_ORG', postOrgSaga)
    yield takeEvery('EDIT_ORG', editOrgSaga)
    yield takeEvery('DELETE_ORG', deleteOrgSaga)
}



export default orgSagas;