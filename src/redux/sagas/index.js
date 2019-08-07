// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import userSaga from './userSaga';
import searchSaga from './searchSaga'
import citySagas from './citySagas';
import countrySaga from './countrySaga';
import orgSagas from './orgSagas';
import medicationSagas from './medicationSagas';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        userSaga(),
        searchSaga(),
        citySagas(),
        countrySaga(),
        orgSagas(),
        medicationSagas(),
    ]);
}