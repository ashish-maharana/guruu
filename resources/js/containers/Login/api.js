import request from './../../utils/request';
import {BASE_URL} from "../../utils/constants";
import Cookie from "js-cookie";


export const getCookie = async() => {
    return await request.get("/sanctum/csrf-cookie");
}

export const login = async(data) => {
    const requestURL = `api/login`;
    return await request.post(requestURL, data);
}

export const forgotPassword = async(data) => {
    const requestURL = `api/forgot-password`;
    return await request.post(requestURL, data);
}

export const resetPassword = async(data) => {
    const requestURL = `/api/reset-password`;
    return await request.post(requestURL, data);
}
