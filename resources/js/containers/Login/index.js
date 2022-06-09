import React, {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Button} from "reactstrap";
import validate from "./validate";
import { name, reducer, actions } from "./slice";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import {useDispatch, useSelector} from "react-redux";
import makeSelectLogin from "./selectors";
import Layout from "../Layout";
import saga from './saga'
import {Link} from "react-router-dom";


const initialValues = {
    email: "",
    password: ""
};

const Login = () => {
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });

    const dispatch = useDispatch();
    const loginState = useSelector(makeSelectLogin());

    return(
        <Layout>
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(values) => {
                dispatch(actions.systemLogin(values))
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, setFieldTouched, setFieldError } = formik;
                return (
                    <div className="login-page py-5">
                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-12 col-md-9">
                                    <div className="card shadow-lg login-card">
                                        <div className="card-body p-0">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: `url('images/Welcome-rafiki.png')`}}></div>
                                                <div className="col-lg-6">
                                                    <div className="p-5">
                                                        <div className="text-center">
                                                            <h1 className="h4 text-gray-900 mb-5">Welcome Back!</h1>
                                                        </div>
                                                        <Form className="mt-4">
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email</label>
                                                                <Field
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    className={
                                                                        errors.email && touched.email ? "form-control form-control-user is-invalid" : "form-control form-control-user"
                                                                    }
                                                                />
                                                                <ErrorMessage name="email" component="span" className="invalid-feedback" />
                                                            </div>

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

                                                            <div className="clearfix">
                                                                <button
                                                                    type="submit"
                                                                    className={!(dirty && isValid) ? "btn btn-primary btn-user btn-block disabled-btn w-100" : "btn btn-primary btn-user btn-block w-100"}
                                                                    disabled={!(dirty && isValid)}
                                                                >
                                                                    Sign In
                                                                </button>
                                                                <div className="text-center mt-3">
                                                                    <Link className="small forget-pass" to="/forgot-password">Forgot
                                                                        Password?</Link>
                                                                </div>
                                                            </div>

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

export default Login;
