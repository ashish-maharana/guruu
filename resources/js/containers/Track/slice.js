import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "../../locales";

export const initialState = {
  error: null,
  user: "",
  mobileNumber: "",
  token: null,
  loading: false,
  data: [],
  teach: [],
  trackStep1: [],
  trackStep2: [],
  trackStep3: [],
  trackStep4: [],
  trackStepFinal: []
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    // Step 1
    trackValuesFirst() { console.log('trackValuesFirst Reducer'); },
    fetchSuccessFirst(state, action) {
      console.log('Payloads-Data First',action.payload.data);
      state.trackStep1 = action.payload.data;
      state.loading = false;
    },
    fetchFailureFirst(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
    
    // Step 2
    trackValuesSecond() { console.log('trackValuesSecond Reducer');},
    fetchSuccessSecond(state, action) {
      console.log('Payloads-Data Second',action.payload.data);
      state.trackStep2 = action.payload.data;
      state.loading = false;
    },
    fetchFailureSecond(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
    
    // Step 3
    trackValuesThird() { console.log('trackValuesThird Reducer'); },
    fetchSuccessThird(state, action) {
      console.log('Payloads-Data Third',action.payload.data);
      state.trackStep3 = action.payload.data;
      state.loading = false;
    },
    fetchFailureThird(state, action) {
        state.error = action.payload;
        state.loading = false;
    },

    trackValuesFourth() { console.log('trackValuesFourth Reducer'); },
    fetchSuccessFourth(state, action) {
      console.log('Payloads-Data Fourth',action.payload.data);
      state.trackStep4 = action.payload.data;
      state.loading = false;
    },
    fetchFailureFourth(state, action) {
        state.error = action.payload;
        state.loading = false;
    },

    trackValuesFinal(){ console.log('trackValuesFinal Reducer') },
    fetchSuccessFinal(state, action) {
      console.log('Payloads-Data Final',action.payload.data);
      state.trackStepFinal = action.payload.data;
      state.loading = false;
    },
    fetchFailureFinal(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
  },
});
export const { name, actions, reducer } = trackSlice;
