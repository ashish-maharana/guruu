import { takeEvery, call, put } from "redux-saga/effects";
import { actions } from "./slice";
import * as api from "./api";
import { toast } from "react-toastify";
import LcStorage from "../../utils/LcStorage";
import history from "../../utils/history";

export function* systemSignup({ payload }) {
  try {
    yield call(api.getCookie);
    const data = yield call(api.signup, payload);
    yield put(actions.systemSignupSuccess(data.data.data));
    yield call(LcStorage.set, "token", data.data.data.token, true);
    if (data.status === 200) {
      toast.success("User has been added successfully");
      history.push("/student-signup#step2");
    }
    if (data.status === 201) {
      toast.success("User has been added successfully");
      history.push("/teacher-signup");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* studentVerification({ payload }) {
  try {
    const data = yield call(api.getOTP, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data.data }));
      toast.success("Mobile Number Verified successfully");
      history.push("/student-register");
    }
    if (data.status === 201) {
        yield put(actions.systemSignupSuccess({ data: data.data.data }));
        toast.success("Your mobile number is already verified");
        history.push("/student-register");
    }
  } catch (error) {
    if (error.data && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("We are facing issues! Please try after some time");
    } else {
      toast.error("Please enter correct OTP");
    }
  }
}

export function* teacherVerification({ payload }) {
  try {
    const data = yield call(api.getOTP, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("Mobile Number Verified successfully");
      history.push("/teacher-register");
    }
    if (data.status === 201) {
        yield put(actions.systemSignupSuccess({ data: data.data }));
        toast.success("Your mobile number is already verified");
        history.push("/teacher-register");
    }
  } catch (error) {
    if (error.data && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("We are facing issues! Please try after some time");
    } else {
      toast.error("Please enter correct OTP");
    }
  }
}

export function* studentProfilePage({ payload }) {
  try {
    const data = yield call(api.profilePage, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("profile added successfully");
      history.push("/student-signup#step3");
    }
    if (data.status === 201) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("profile updated successfully");
      history.push("/student-signup#step3");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please enter correct data");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* teacherProfilePage({ payload }) {
  try {
    const data = yield call(api.profilePage, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("profile added successfully");
      history.push("/teacher-signup#step2");
    }
    if (data.status === 201) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("profile updated successfully");
      history.push("/teacher-signup#step2");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please enter correct data");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* aboutPage({ payload }) {
  try {
    const data = yield call(api.aboutPage, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("About added successfully");
      history.push("/");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please enter correct data");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* learn({ payload }) {
  try {
    const data = yield call(api.learn, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("Your preferences have been saved successfully");
      history.push("/");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please select atleast one");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* teach({ payload }) {
  try {
    const data = yield call(api.teach, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess({ data: data.data }));
      toast.success("Your preferences have been saved successfully");
      history.push("/teacher-register#step2");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please select atleast one");
    } else {
      toast.error("We are facing issues! Please try after some time");
    }
  }
}

export function* resendOTP({ payload }) {
    try {
      const data = yield call(api.resendOTP, payload);
      if (data.status === 200) {
        yield put(actions.systemSignupSuccess({ data: data.data }));
        toast.success("OTP has been resent to your number");
      }
      if (data.status === 201) {
        yield put(actions.systemSignupSuccess({ data: data.data }));
        toast.success("Your mobile number is already verified");
      }
    } catch (error) {
      if (error.response.data.message === 'otp_expired') {
        toast.error("Your OTP expired");
        history.push("/student-register#step3");
      }
      else if (error.response.data.message === 'OTP retry count maxed out') {
        toast.error("OTP can be resent only 3 times");
        history.push("/student-register#step3");
      }
      else if (error.response && error.response.data) {
        yield put(actions.systemSignupFailure(error.response.data.data));
        toast.error("Please try after some time");
      } else {
        toast.error("Please try after some time");
      }
    }
  }

export function* getUserPhoneNumber({ }) {
  try {
    const data = yield call(api.getUserPhoneNumber);
    yield put(actions.userPhoneNumberSuccess({ data: data.data }));
  } catch (error) {
    yield put(actions.systemSignupFailure({ error }));
  }
}

export function* logout({ }) {
  try {
    const data = yield call(api.logout);
    if (data.status === 200) {
      yield call(LcStorage.clear, 'token')
      toast.success("logged out successfully");
      history.push("/");
      setTimeout(() => location.reload(), 1500);
    }
  } catch (error) {
    toast.error("We are facing issues! Please try after some time");
    yield put(actions.systemSignupFailure({ error }));
  }
}

export function* getProfiledetails({ payload }) {
  try {
    const data = yield call(api.getProfiledetails, payload);
    if (data.status === 200) {
      yield put(actions.userProfiledetailsSuccess({ data: data.data.data }));
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
    }else {
      toast.error("We are facing issues! Please try after some time123");
    }
  }
}

export function* getTeachingPreferences({ payload }) {
  try {
    const data = yield call(api.getTeachingPreferences, payload);
    if (data.status === 200) {
      yield put(actions.teachingPreferencesSuccess({ data: data.data.data }));
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
    }else {
      toast.error("We are facing issues! Please try after some time123");
    }
  }
}

export function* getLearningPreferences({ payload }) {
  try {
    const data = yield call(api.getLearningPreferences, payload);
    if (data.status === 200) {
      yield put(actions.LearningPreferencesSuccess({ data: data.data.data }));
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
    }else {
      toast.error("We are facing issues! Please try after some time123");
    }
  }
}

export function* editStudentPhoneNumber({ payload }) {
  try {
    const data = yield call(api.editStudentPhoneNumber, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess(data.data.data));
      toast.success("Mobile Number updated successfully");
      history.push("/student-signup#step2");
      setTimeout(() => location.reload(), 1000);
    }
    if (data.status === 201) {
        yield put(actions.systemSignupSuccess({ data: data.data.data }));
        toast.success("Please register first");
    }
  }catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please try after some time");
    } else {
      toast.error("Please try after some time");
    }
  }
}

export function* editTeacherPhoneNumber({ payload }) {
  try {
    const data = yield call(api.editTeacherPhoneNumber, payload);
    if (data.status === 200) {
      yield put(actions.systemSignupSuccess(data.data.data));
      toast.success("Mobile Number updated successfully");
      history.push("/teacher-signup");
      setTimeout(() => location.reload(), 1000);
    }
    if (data.status === 201) {
        yield put(actions.systemSignupSuccess(data.data.data));
        toast.success("Please register first");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(actions.systemSignupFailure(error.response.data.data));
      toast.error("Please try after some time");
    } else {
      toast.error("Please try after some time");
    }
  }
}

// Individual exports for testing
export default function* hackerNewsArticlesSaga() {
  yield takeEvery(actions.systemSignup.type, systemSignup);
  yield takeEvery(actions.studentVerification.type, studentVerification);
  yield takeEvery(actions.teacherVerification.type, teacherVerification);
  yield takeEvery(actions.studentProfilePage.type, studentProfilePage);
  yield takeEvery(actions.teacherProfilePage.type, teacherProfilePage);
  yield takeEvery(actions.aboutPage.type, aboutPage);
  yield takeEvery(actions.learn.type, learn);
  yield takeEvery(actions.teach.type, teach);
  yield takeEvery(actions.resendOTP.type, resendOTP);
  yield takeEvery(actions.getUserPhoneNumber.type, getUserPhoneNumber);
  yield takeEvery(actions.logout.type, logout);
  yield takeEvery(actions.getProfiledetails.type, getProfiledetails);
  yield takeEvery(actions.getTeachingPreferences.type, getTeachingPreferences);
  yield takeEvery(actions.getLearningPreferences.type, getLearningPreferences);
  yield takeEvery(actions.editStudentPhoneNumber.type, editStudentPhoneNumber);
  yield takeEvery(actions.editTeacherPhoneNumber.type, editTeacherPhoneNumber);
}
