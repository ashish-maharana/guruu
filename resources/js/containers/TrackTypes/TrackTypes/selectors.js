import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectTrackTypes = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeTrackTypes = () =>
    createSelector(selectTrackTypes, (substate) => substate);
const makeSelectErrors = () => createSelector(selectTrackTypes, (state) => state.error);
const makeSelectSingleTrackType = () => createSelector(selectTrackTypes, (state) => state.singleTrackType);

export default makeTrackTypes;
export { selectTrackTypes, makeSelectErrors, makeSelectSingleTrackType };
