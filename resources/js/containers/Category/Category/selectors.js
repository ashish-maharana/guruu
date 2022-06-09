import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the hackerNewsArticles state domain
 */

const selectCategory = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HackerNewsArticles
 */

const makeCategory = () => createSelector(selectCategory, (substate) => substate);
const makeSelectErrors = () => createSelector(selectCategory, (state) => state.error);
const makeSelectSingleCategory = () => createSelector(selectCategory, (state) => state.singleCategory);

export default makeCategory;
export { selectCategory, makeSelectErrors, makeSelectSingleCategory };
