/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Layout from "../Layout";

export default function NotFound() {
  return (
      <Layout>
          <div className="not-found">
              <div className="container">
                  <div className="not-found-pg-content pt-5 pb-4">
                      <figure className="my-3">
                          <img alt="404 image" src='images/404-img.png' />
                      </figure>
                      <h1>
                          <FormattedMessage {...messages.header} />
                      </h1>
                      <a href={'/'} className="back-to-home">Back to Home</a>
                  </div>
              </div>
          </div>
      </Layout>
  );
}
