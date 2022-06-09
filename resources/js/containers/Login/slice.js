import { createSlice } from '@reduxjs/toolkit';
import {DEFAULT_LOCALE} from "../../locales";

export const initialState = {
    email: '',
    password:'',
    password_confirmation:'',
    errors:'',
    user:'',
    token:null,
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        systemLogin(){},
        systemLoginSuccess(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        systemLoginFailure(state, action) {
            state.errors = action.payload;
        },
        forgotPassword(){},
        fetchSuccess(state, action) {
            state.email = action.payload.email;
            state.loading = false;
        },
        resetPassword(){
        },
        fetchResetPasswordSuccess(state, action) {
            state.password = action.payload.password;
            state.password_confirmation = action.payload.password_confirmation;
            state.token = action.payload.token;
            state.loading = false;
        },
        
    },
});

export const { name, actions, reducer } = loginSlice;
