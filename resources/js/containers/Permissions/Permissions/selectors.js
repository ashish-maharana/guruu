import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectPermissions = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makePermissions = () =>
    createSelector(selectPermissions, (substate) => substate);
const makeSelectErrors = () => createSelector(selectPermissions, (state) => state.error);
const makeSelectSinglePermission = () => createSelector(selectPermissions, (state) => state.singlePermission);

export default makePermissions;
export { selectPermissions, makeSelectErrors, makeSelectSinglePermission };
