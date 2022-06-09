import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectSignupDomain = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeSelectSignup = () =>  createSelector(selectSignupDomain, (substate) => substate);

const makeSelectErrors = () =>  createSelector(selectSignupDomain, (errors) => errors);

export default makeSelectSignup;
export { selectSignupDomain, makeSelectErrors};
