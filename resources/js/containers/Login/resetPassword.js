import React, {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Button} from "reactstrap";
import {validate,validateEmail,resetPassword} from "./validate";
import { name, reducer, actions } from "./slice";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import {useDispatch, useSelector} from "react-redux";
import makeSelectLogin from "./selectors";
import Layout from "../Layout";
import saga from './saga';
import {Link, useParams} from "react-router-dom";
import Navbar from "../Navbar";


const initialValues = {
    password: "",
    password_confirmation:"",
};

const ResetPassword = () => {
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });

    const dispatch = useDispatch();
    const loginState = useSelector(makeSelectLogin());

    const { token } = useParams();

    return(
        <Layout>
        <Formik
            initialValues={initialValues}
            validationSchema={resetPassword}
            onSubmit={(values) => {
                dispatch(actions.resetPassword({...values, token:token}))
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, setFieldTouched, setFieldError } = formik;
                return (
<div className="reset-pass-page py-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-12 col-md-9">
                                    <div className="card o-hidden border-0 shadow-lg my-5">
                                        <div className="card-body p-0">
                                            <div className="row align-items-center">
                                            <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: `url('images/man-thinking.png')`}}>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="p-5">
                                                        <div className="text-center">
                                                            <h1 className="h4 text-gray-900 mb-4">Reset Password</h1>
                                                        </div>
                                                        <Form>
                                                            <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <Field
                                                                    type="password"
                                                                    name="password"
                                                                    id="password"
                                                                    className={
                                                                        errors.password && touched.password ? "form-control form-control-user is-invalid" : "form-control form-control-user"
                                                                    }
                                                                />
                                                                <ErrorMessage
                                                                    name="password"
                                                                    component="span"
                                                                    className="invalid-feedback"
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="confirm-password">Confirm Password</label>
                                                                <Field
                                                                    type="password"
                                                                    name="password_confirmation"
                                                                    id="password_confirmation"
                                                                    className={
                                                                        errors.password_confirmation && touched.password_confirmation ? "form-control form-control-user is-invalid" : "form-control form-control-user"
                                                                    }
                                                                />
                                                                <ErrorMessage
                                                                    name="password_confirmation"
                                                                    component="span"
                                                                    className="invalid-feedback"
                                                                />
                                                            </div>

                                                            <button
                                                                type="submit"
                                                                className={!(dirty && isValid) ? "btn btn-primary btn-user btn-block disabled-btn w-100" : "btn btn-primary btn-user btn-block w-100"}
                                                                disabled={!(dirty && isValid)}
                                                            >
                                                                Submit
                                                            </button>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
        </Layout>
    )
}

export default ResetPassword;