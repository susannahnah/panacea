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
        yield put({ type: 'SEARCH_ORGANIZATION' })
    }
    catch (error) {
        console.log('Error with POST', error);
    }
}

// POST new org function
// will post a new org object to the database
// get new org by id
// set the individual org to the new org that was just created
function* postNewOrgSaga(action) {
    try {
        const newOrgIdResponse = yield axios.post('/api/organizations', action.payload);
        const newOrgObjResponse = yield axios.get(`/api/organizations/${newOrgIdResponse.data.id}`);
        yield put({ type: 'SET_INDIVIDUAL_ORG', payload: newOrgObjResponse.data });
    } catch (error) {
        console.log(`Error with postNewOrgSaga:`, error);
    }
}

//UPDATE specific org
function* editOrgSaga(action) {
    yield axios.put(`/api/organizations`, action.payload)
    yield put({ type: 'SEARCH_ORGANIZATION'})
    console.log('org updated')
}

//DELTE specific org
function* deleteOrgSaga(action) {
    console.log('deleteOrgSaga hit')
    try {
      yield axios.delete(`/api/organizations/${action.payload}`)
      yield put({type: 'SEARCH_ORGANIZATION'})
    } catch (error) {
      console.log(error);
      alert('Unable to delete item');
    }
}


//ALL org Sagas
function* orgSagas() {
    yield takeEvery('SELECT_ORG', selectOrgSaga)
    yield takeEvery('POST_ORG', postOrgSaga)
    yield takeEvery('EDIT_ORG', editOrgSaga)
    yield takeEvery('DELETE_ORG', deleteOrgSaga)
    yield takeEvery('NEW_ORG', postNewOrgSaga);
}



export default orgSagas;