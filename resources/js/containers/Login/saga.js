import { takeEvery, call, put } from "redux-saga/effects";
import { actions } from "./slice";
import * as api from "./api";
import { toast } from "react-toastify";
import { getCookie, login } from "./api";
import LcStorage from "../../utils/LcStorage";
import history from "../../utils/history";

export function* systemLogin({ payload }) {
  try {
    const responseCookie = yield call(api.getCookie);
    if (responseCookie.status === 204) {
      const response = yield call(api.login, payload);
      if (response.status === 200) {
        yield put(actions.systemLoginSuccess(response.data.data));
        yield call(LcStorage.set, "token", response.data.data.token, true);
        toast.success("Logged In successfully");
        history.push("/");
        //setTimeout(() => location.reload(), 1000);
      }
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      yield put(actions.systemLoginFailure(error.response.data.errors));
      toast.error("Please enter correct credentials");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* forgotPassword({ payload }) {
  try {
    yield call(api.getCookie);
    const response = yield call(api.forgotPassword, payload);
    if (response.status === 200) {
      yield put(actions.fetchSuccess(response.data.data));
      history.push("/login");
      setTimeout(() => location.reload(), 1500);
      toast.success(
        "Reset password link has been sent to your email. Please click on the link to reset your password "
      );
    } else {
      toast.success("Something went wrong please try after sometime ");
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      yield put(actions.systemLoginFailure(error.response.data.errors));
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* resetPassword({ payload }) {
  try {
    yield call(api.getCookie);
    const response = yield call(api.resetPassword, payload);
    if (response.status === 200) {
      toast.success("your password has been reset successfully");
      history.push("/login");
      setTimeout(() => location.reload(), 1500);
    } else {
      toast.success("Something went wrong please try after sometime ");
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      yield put(actions.systemLoginFailure(error.response.data.errors));
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

// Individual exports for testing
export default function* hackerNewsArticlesSaga() {
  yield takeEvery(actions.systemLogin.type, systemLogin);
  yield takeEvery(actions.forgotPassword.type, forgotPassword);
  yield takeEvery(actions.resetPassword.type, resetPassword);
}
