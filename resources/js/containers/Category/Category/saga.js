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

export function* getCategory({ payload }) {
    try {
        const data = yield call(api.getCategory, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        yield put(actions.fetchSingleCategorySuccess({ singleCategory: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* saveCategory({ payload }) {
    try {
        const data = yield call(api.saveCategory, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/category');
        toast.success('Category has been saved successfully')
    } catch (error) {
        if(error.response && error.response.data){
            yield put(actions.fetchFailure(error.response.data.data));
        }else{
            toast.error('We are facing issues! Please try after some time')
        }
    }
}

export function* singleCategory({ payload }) {
    try {
        const data = yield call(api.findOneCategory, payload);
        yield put(actions.fetchSingleCategorySuccess({ singleCategory: data.data }));
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* updateCategory({ payload }) {
    try {
        const data = yield call(api.updateCategory, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push("/category");
        toast.success('Category has been Updated successfully')
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

export function* deleteCategory({ payload }) {
    try {
        const data = yield call(api.deleteCategory, payload);
        yield put(actions.fetchSuccess({ data: data.data }));
        history.push('/Category');
        toast.success('Category has been deleted successfully')
    } catch (error) {
        yield put(actions.fetchFailure({ error }));
    }
}

// Individual exports for testing
export default function* Categoryaga() {
    yield takeEvery(actions.fetch.type, getCategory);
    yield takeEvery(actions.saveCategory.type, saveCategory);
    yield takeEvery(actions.singleCategory.type, singleCategory);
    yield takeEvery(actions.updateCategory.type, updateCategory);
    yield takeEvery(actions.deleteCategory.type, deleteCategory);
}
