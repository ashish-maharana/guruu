/**
 *
 * Saga for HackerNewsArticles
 *
 */

import { takeEvery, call, put } from "redux-saga/effects";
import { actions } from "./slice";
import * as api from "./api";
import {toast} from "react-toastify";
import history from "../../../utils/history";

export function* getUsers({ payload }) {
    try {
        const data = yield call(api.getUsers, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
        toast.error('We are facing issues! Please try after some time')
    }
}

export function* saveUsers({ payload }) {
    try {
        const data = yield call(api.saveUsers, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/users/verify-mobile-number');
        toast.success('User has been added successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

export function* findOneUser({ payload }) {
    try {
        const data = yield call(api.findOneUser, payload);
        yield put(actions.fetchSingleUserSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
        toast.error('We are facing issues! Please try after some time')
    }
}

export function* updateUser({ payload }) {
    try {
        const data = yield call(api.updateUser, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/users');
        toast.success('User has been updated successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
        toast.error('We are facing issues! Please try after some time')
    }
}

export function* deleteUsers({ payload }) {
    try {
        const data = yield call(api.deleteUsers, payload);
        const response = yield call(api.getUsers, payload);
        yield put(actions.fetchSuccess({ data: response.data }));
        history.push('/users');
        toast.success('User has been deleted successfully')
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

// Individual exports for testing
export default function* usersSaga() {
    yield takeEvery(actions.fetch.type, getUsers);
    yield takeEvery(actions.saveUsers.type, saveUsers);
    yield takeEvery(actions.singleUser.type, findOneUser);
    yield takeEvery(actions.updateUser.type, updateUser);
    yield takeEvery(actions.deleteUsers.type, deleteUsers);

}
