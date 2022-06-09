import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectTrackDomain = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeSelectTrack = () =>  createSelector(selectTrackDomain, (substate) => substate);

const makeSelectErrors = () =>  createSelector(selectTrackDomain, (errors) => errors);

export default makeSelectTrack;
export { selectTrackDomain, makeSelectErrors};
