/**
 * Asynchronously loads the component for HomePage
 */

import loadable from './../../../utils/loadable';
import {Spinner} from "reactstrap";
import React from "react";

export default loadable(() => import('./index'), {
    fallback: <Spinner color="primary">Loading...</Spinner>,
});
