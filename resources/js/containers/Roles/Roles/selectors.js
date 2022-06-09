import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectRoles = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeRoles = () =>
    createSelector(selectRoles, (substate) => substate);
const makeSelectErrors = () => createSelector(selectRoles, (state) => state.error);
const makeSelectSingleRole = () => createSelector(selectRoles, (state) => state.singleRole);

export default makeRoles;
export { selectRoles, makeSelectErrors, makeSelectSingleRole };
