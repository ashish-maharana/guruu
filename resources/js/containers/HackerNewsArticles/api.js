/**
 *
 * API for HackerNewsArticles
 *
 */

import request from './../../utils/request';

export const fetch = async() => {
  const requestURL = `https://hacker-news.firebaseio.com/v0/user/zsajjad.json?print=pretty`;
    return await request.get(requestURL);
}
