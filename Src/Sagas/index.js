import * as types from '../Actions/actionTypes';
import {fork, call, put, takeEvery, takeLatest,take } from 'redux-saga/effects';
import {fetchUserLogin,fetchnewuser} from './loginSaga'

export default function* rootSaga() {

    yield takeEvery(types.NLOGIN_FETCH_REQUESTED,fetchnewuser);

    //yield fork(takeEvery, types.LOGIN_FETCH_REQUESTED, fetchUserLogin);

} 
