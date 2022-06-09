/* eslint-disable no-param-reassign */
/*
 * HackerNewsArticles Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { createSlice } from "@reduxjs/toolkit";

// The initial state of the ReposManager container
export const initialState = {
    data: [],
    loading: false,
    error: false,
    singleTrackType: [],
};

const trackTypesSlice = createSlice({
    name: "trackTypes",
    initialState,
    reducers: {
        fetch(state) {
            state.loading = true;
            state.error = false;
            state.data = [];
        },
        fetchSuccess(state, action) {
            state.data = action.payload.data;
            state.loading = false;
        },
        saveTrackTypes() {},
        deleteTrackTypes(state, action) {
            const idData = action.payload;
        },
        singleTrackType(state, action) {
        },
        updateTrackType() {},
        fetchFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        fetchSingleTrackTypeSuccess(state, action) {
            state.singleTrackType = action.payload.data;
            state.loading = false;
        },
    },
});

export const { name, actions, reducer } = trackTypesSlice;