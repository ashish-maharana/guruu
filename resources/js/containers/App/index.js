/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import Login from '../Login/Loadable';
import ForgotPassword from '../Login/forgotPassword';
import ResetPassword from '../Login/resetPassword';
import Users from '../Users/Users/Loadable';
import AddUser from '../Users/AddUser/Loadable'
import EditUser from "../Users/EditUser/Loadable";
import Roles from '../Roles/Roles/Loadable';
import AddRole from "../Roles/AddRole/Loadable";
import EditRole from "../Roles/EditRole/Loadable";
import Permissions from '../Permissions/Permissions/Loadable';
import AddPermission from '../Permissions/AddPermission/Loadable'
import EditPermission from "../Permissions/EditPermission/Loadable";
import Category from '../Category/Category/Loadable';
import AddCategory from '../Category/AddCategory/Loadable'
import EditCategory from "../Category/EditCategory/Loadable";
import TrackType from '../TrackTypes/TrackTypes/Loadable';
import AddTrackType from '../TrackTypes/AddTrackTypes/Loadable'
import EditTrackType from "../TrackTypes/EditTrackTypes/Loadable";
import About from "../About/Loadable";
import LcStorage from '../../utils/LcStorage'
import { ToastContainer, toast } from 'react-toastify';
import ResetPasswordConfirmation from '../Login/ResetPasswordConfirmation';
import Register from '../SignUp/studentRegistration';
import TeacherRegistration from '../SignUp/TeacherRegistration/TeacherRegistration';
import StudentRegistration from '../SignUp/StudentRegistration/studentRegistration';
import StudentSignup from '../SignUp/studentRegistration';
import TeacherSignup from '../SignUp/TeacherRegistration';
import MyAccount from '../MyAccount/Loadable';
import Dashboard from '../Dashboard/Loadable';
import SearchResult from '../SearchResult/Loadable';

const ProtectedRoute = ({component: Component, ...rest}) => {
   return <Route {...rest} render={props=> LcStorage.get('token')?<Component {...props} /> : <Redirect to={"/login"} />} />
}

const PublicRoute = ({component: Component, ...rest}) => <Route {...rest} render={props=> !LcStorage.get('token')?<Component {...props} /> : <Redirect to={"/login"} />} />


export default function App() {
  let authenticated = LcStorage.get('token');
  return (
      <div className="h-100">
          <ToastContainer autoClose={5000}  />
          <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/student-signup" component={StudentSignup} />
                <Route exact path="/teacher-signup" component={TeacherSignup} />
                <Route exact path="/student-register" component={StudentRegistration} />
                <Route exact path="/teacher-register" component={TeacherRegistration} />
                <Route exact path="/search-result" component={SearchResult} />
                <Route exact path={"/about"} component={About} />
                
                {/* Public Routes */}
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/register" component={Register} />
                <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
                <PublicRoute exact path="/:token/reset-password" component={ResetPassword} />
                <PublicRoute exact path="/reset-password-confirmation" component={ResetPasswordConfirmation} />
                
                {/* Protected Routes */}
                <ProtectedRoute exact path={"/users"} component={Users} />
                <ProtectedRoute exact path="/users/add" component={AddUser} />
                <ProtectedRoute exact path="/users/edit/:id" component={EditUser} />
                <ProtectedRoute exact path={"/roles"} component={Roles} />
                <ProtectedRoute exact path="/roles/add" component={AddRole} />
                <ProtectedRoute exact path="/roles/edit/:id" component={EditRole} />
                <ProtectedRoute exact path={"/permissions"} component={Permissions } />
                <ProtectedRoute exact path="/permissions/add" component={AddPermission} />
                <ProtectedRoute exact path="/permissions/edit/:id" component={EditPermission } />
                <ProtectedRoute exact path={"/category"} component={Category} />
                <ProtectedRoute exact path="/category/add" component={AddCategory} />
                <ProtectedRoute exact path="/category/edit/:id" component={EditCategory} />
                <ProtectedRoute exact path={"/tracktypes"} component={TrackType} />
                <ProtectedRoute exact path="/tracktypes/add" component={AddTrackType} />
                <ProtectedRoute exact path="/tracktypes/edit/:id" component={EditTrackType } />
                <ProtectedRoute exact path="/myaccount" component={MyAccount} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <Route path="*" component={NotFoundPage} />
          </Switch>
      </div>
  );
}
