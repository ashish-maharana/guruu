import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "../../locales";

export const initialState = {
  errors: null,
  user: "",
  mobileNumber: "",
  token: null,
  loading: false,
  data: [],
  teach:[],
  learn:[],
  profile:[]
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    systemSignup() {},
    systemSignupSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    systemSignupFailure(state, action) {
      state.errors = action.payload;
    },
    studentVerification() {},
    teacherVerification() {},
    studentProfilePage() {},
    teacherProfilePage() {},
    aboutPage() {},
    learn() {},
    teach() {},
    resendOTP() {},
    getUserPhoneNumber() {
    },
    logout() {},
    userPhoneNumberSuccess(state, action) {
      state.mobileNumber = action.payload.data;
    },
    getProfiledetails(){},
    userProfiledetailsSuccess(state, action){
      state.profile = action.payload;
    },
    getTeachingPreferences() {},
    getLearningPreferences(){},
    teachingPreferencesSuccess(state, action){
      state.teach = action.payload;
    },
    LearningPreferencesSuccess(state, action){
      state.learn = action.payload;
    },
    editStudentPhoneNumber() {
    },
    editTeacherPhoneNumber() {
    }
  },
});

export const { name, actions, reducer } = signupSlice;
