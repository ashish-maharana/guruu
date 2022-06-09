import { takeEvery, call, put } from "redux-saga/effects";
import { actions } from "./slice";
import * as api from "./api";
import { toast } from "react-toastify";
import LcStorage from "../../utils/LcStorage";
import history from "../../utils/history";


export function* trackValuesFirst({ payload }) {
    try {
        const data = payload;
        console.log('TrackValues Saga First', data); 
        yield put(actions.fetchSuccessFirst({ data: data }));
    } catch (error) {
        yield put(actions.fetchFailureFirst({ error }));
    }
}

export function* trackValuesSecond({ payload }) {
  try {
      const data = payload;
      console.log('TrackValues Saga Second', data); 
      yield put(actions.fetchSuccessSecond({ data: data }));
    } catch (error) {
      yield put(actions.fetchFailureSecond({ error }));
  }
}

export function* trackValuesThird({ payload }) {
  try {
      const data = payload;
      console.log('TrackValues Saga Third', data); 
      yield put(actions.fetchSuccessThird({ data: data }));
    } catch (error) {
      yield put(actions.fetchFailureThird({ error }));
  }
}

export function* trackValuesFourth({ payload }) {
    try {
        const data = payload;
        console.log('TrackValues Saga Fourth', data); 
        yield put(actions.fetchSuccessFourth({ data: data }));
    } catch (error) {
        yield put(actions.fetchFailureFourth({ error }));
    }
}

export function* trackValuesFinal({ payload }) {
    try {
        const data = yield call(api.insertTracks, payload);
        yield put(actions.fetchSuccessFinal({ data: data }));
        toast.success("Tracks saved successfully");
        history.push("/dashboard");
        setTimeout(() => location.reload(), 1000);
    } catch (error) {
        yield put(actions.fetchFailureFinal({ error }));
        toast.error("We are facing issues! Please try after some time");
        history.push("/dashboard");
        setTimeout(() => location.reload(), 1000);
    }
}

// Individual exports for testing
export default function* trackSaga() {
  yield takeEvery(actions.trackValuesFirst.type, trackValuesFirst);
  yield takeEvery(actions.trackValuesSecond.type, trackValuesSecond);
  yield takeEvery(actions.trackValuesThird.type, trackValuesThird);
  yield takeEvery(actions.trackValuesFourth.type, trackValuesFourth);
  yield takeEvery(actions.trackValuesFinal.type, trackValuesFinal);
}
