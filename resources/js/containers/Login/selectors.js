import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectLoginDomain = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeSelectLogin = () =>  createSelector(selectLoginDomain, (substate) => substate);

const makeSelectErrors = () =>  createSelector(selectLoginDomain, (errors) => errors);

export default makeSelectLogin;
export { selectLoginDomain };
