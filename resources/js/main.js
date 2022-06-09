/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ConnectedRouter } from 'connected-react-router'
import "regenerator-runtime/runtime"



import {
    isMultiColorActive,
    defaultColor,
    isDarkSwitchActive,
} from './utils/constants';
import { getCurrentColor, setCurrentColor } from './utils/common';

import history from "./utils/history";


// Import root app
import App from './containers/App'

// Import Language Provider
import LanguageProvider from './containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
/*import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';*/
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = (messages) => {
    let persist = persistStore(store);
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <PersistGate loading={null} persistor={persist}>
                    <LanguageProvider messages={messages}>
                        <App />
                    </LanguageProvider>
                </PersistGate>
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE,
    );
};

if (module.hot) {
    // Hot reloadable React components and translation json files
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept(['./i18n', './containers/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render(translationMessages);
    });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
    new Promise((resolve) => {
        resolve(import('intl'));
    })
        .then(() => render(translationMessages))
        .catch((err) => {
            throw err;
        });
} else {
    render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}