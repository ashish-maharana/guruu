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

export function* getRoles({ payload }) {
    try {
        const data = yield call(api.getRoles, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* saveRoles({ payload }) {
    try {
        const data = yield call(api.saveRoles, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/roles');
        toast.success('Role has been created successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

export function* findOneRole({ payload }) {
    try {
        const data = yield call(api.findOneRole, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* updateRole({ payload }) {
    try {
        const data = yield call(api.updateRole, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/roles');
        toast.success('Role has been updated successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* deleteRoles({ payload }) {
    try {
        const data = yield call(api.deleteRoles, payload);
        const response = yield call(api.getRoles, payload);
        yield put(actions.fetchSuccess({ data: response.data }));
        history.push('/roles');
        toast.success('Role has been deleted successfully')
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

// Individual exports for testing
export default function* rolesSaga() {
    yield takeEvery(actions.fetch.type, getRoles);
    yield takeEvery(actions.saveRoles.type, saveRoles);
    yield takeEvery(actions.singleRole.type, findOneRole);
    yield takeEvery(actions.updateRole.type, updateRole);
    yield takeEvery(actions.deleteRoles.type, deleteRoles);
}
