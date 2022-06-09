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

export function* getTrackTypes({ payload }) {
    try {
        const data = yield call(api.getTrackTypes, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* saveTrackTypes({ payload }) {
    try {
        const data = yield call(api.saveTrackTypes, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/tracktypes');
        toast.success('Track Types has been saved successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

export function* findOneTrackType({ payload }) {
    try {
        const data = yield call(api.findOneTrackType, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* updateTrackType({ payload }) {
    try {
        const data = yield call(api.updateTrackType, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/tracktypes');
        toast.success('Track Types has been Updated successfully')
        setTimeout(() => location.reload(), 1500);
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* deleteTrackTypes({ payload }) {
    try {
        const data = yield call(api.deleteTrackTypes, payload);
        const response = yield call(api.getTrackTypes, payload);
        yield put(actions.fetchSuccess({ data: response.data }));
        history.push('/tracktypes');
        toast.success('Track Types has been deleted successfully')
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

// Individual exports for testing
export default function* trackTypesSaga() {
    yield takeEvery(actions.fetch.type, getTrackTypes);
    yield takeEvery(actions.saveTrackTypes.type, saveTrackTypes);
    yield takeEvery(actions.singleTrackType.type, findOneTrackType);
    yield takeEvery(actions.updateTrackType.type, updateTrackType);
    yield takeEvery(actions.deleteTrackTypes.type, deleteTrackTypes);
}
