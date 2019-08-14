// src/redux/sagas/orgSagas.js
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// GET specific org by id
function* selectOrgSaga(action) {
    const getOrg = yield axios.get(`/api/organizations/${action.payload}`)
    yield put({ type: 'SET_INDIVIDUAL_ORG', payload: getOrg.data })
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
    }
}

// UPDATE specific org
function* editOrgSaga(action) {
    try {
        yield axios.put(`/api/organizations`, action.payload);
        const updatedOrgResponse = yield axios.get(`/api/organizations/${action.payload.id}`);
        yield put({ type: 'SET_INDIVIDUAL_ORG', payload: updatedOrgResponse.data }); 
    } catch (error) {
    } 
}

// DELETE specific org
function* deleteOrgSaga(action) {
    try {
        yield axios.delete(`/api/organizations/${action.payload}`);
        yield put({ type: 'SEARCH_ORGANIZATION', payload: '' });
    } catch (error) {
        console.log(error);
        alert('There was a problem deleting the organization from the database.');
    }
}

// ALL org Sagas
function* orgSagas() {
    yield takeEvery('SELECT_ORG', selectOrgSaga);
    yield takeEvery('EDIT_ORG', editOrgSaga);
    yield takeEvery('DELETE_ORG', deleteOrgSaga);
    yield takeEvery('NEW_ORG', postNewOrgSaga);
}

export default orgSagas;