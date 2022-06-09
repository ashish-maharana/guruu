import request from "./../../utils/request";
import { BASE_URL } from "../../utils/constants";
import Cookie from "js-cookie";

export const getCookie = async () => {
  return await request.get("/sanctum/csrf-cookie");
};

export const signup = async (data) => {
  const requestURL = `api/register`;
  return await request.post(requestURL, data);
};

export const getOTP = async (payload) => {
  const getOTP = `/api/verify-mobile-number`;
  return await request.post(getOTP, payload);
};

export const profilePage = async (payload) => {
  const profilePage = `/api/profile-page`;
  return await request.post(profilePage, payload);
};

export const aboutPage = async (payload) => {
  const aboutPage = `/api/about-step`;
  return await request.post(aboutPage, payload);
};

export const learn = async (payload) => {
    const learn = `/api/learn`;
    return await request.post(learn, payload);
};

export const teach = async (payload) => {
    const teach = `/api/teach`;
    return await request.post(teach, payload);
};

export const resendOTP = async (payload) => {
    const resendOTP = `/api/resendOTP`;
    return await request.post(resendOTP, payload);
};

export const getUserPhoneNumber = async () => {
  const getUserPhoneNumber = `/api/get-user-phone-number`;
  return await request.get(getUserPhoneNumber);
};

export const logout = async () => {
  const logout = `/api/logout`;
  return await request.get(logout);
};

export const getProfiledetails = async () => {
  const getProfiledetails = `/api/get-profile-details`;
  return await request.get(getProfiledetails);
};

export const getTeachingPreferences = async () => {
  const getTeachingPreferences = `/api/get-teaching-preferences`;
  return await request.get(getTeachingPreferences);
};

export const getLearningPreferences = async () => {
  const getLearningPreferences = `/api/get-learning-preferences`;
  return await request.get(getLearningPreferences);
};

export const editStudentPhoneNumber = async (payload) => {
  const editStudentPhoneNumber = `/api/edit-Student-PhoneNumber`;
  return await request.post(editStudentPhoneNumber, payload);
};

export const editTeacherPhoneNumber = async (payload) => {
  const editTeacherPhoneNumber = `/api/edit-Teacher-PhoneNumber`;
  return await request.post(editTeacherPhoneNumber, payload);
};