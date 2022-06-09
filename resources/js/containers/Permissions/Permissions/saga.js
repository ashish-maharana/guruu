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

export function* getPermissions({ payload }) {
    try {
        const data = yield call(api.getPermissions, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* savePermissions({ payload }) {
    try {
        const data = yield call(api.savePermissions, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/permissions');
        toast.success('Permission has been created successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

export function* findOnePermission({ payload }) {
    try {
        const data = yield call(api.findOnePermission, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* updatePermission({ payload }) {
    try {
        const data = yield call(api.updatePermission, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/permissions');
        toast.success('Permission has been updated successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* deletePermissions({ payload }) {
    try {
        const data = yield call(api.deletePermissions, payload);
        const response = yield call(api.getPermissions, payload);
        yield put(actions.fetchSuccess({ data: response.data }));
        history.push('/permissions');
        toast.success('Permission has been daleted successfully')
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

// Individual exports for testing
export default function* permissionSaga() {
    yield takeEvery(actions.fetch.type, getPermissions);
    yield takeEvery(actions.savePermissions.type, savePermissions);
    yield takeEvery(actions.singlePermission.type, findOnePermission);
    yield takeEvery(actions.updatePermission.type, updatePermission);
    yield takeEvery(actions.deletePermissions.type, deletePermissions);
}
