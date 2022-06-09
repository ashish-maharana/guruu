/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useEffect} from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link, useParams} from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "../Users/slice";
import validate from "./validate";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import messages from './messages';
import saga from '../Users/saga'
import Layout from "../../Layout";
import makeSelectLogin from "../../Login/selectors";
import {makeSelectErrors, makeSelectSingleUser} from "../Users/selectors";

export default function EditUser() {
    const dispatch = useDispatch();
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });
    const customErrors = useSelector(makeSelectErrors());
    const userData = useSelector(makeSelectSingleUser());

    const { id } = useParams();

    useEffect(() => {
        dispatch(actions.singleUser(id));
    }, []);



    return (
        <Layout>
            <Formik
                initialValues={{
                    email: "",
                    first_name: "",
                    last_name: "",
                    mobile_number: "",
                }}
                onSubmit={(values) => {
                    dispatch(
                        actions.updateUser({
                            ...values,
                        })
                    );
                }}
                validator={validate}
            >
                {(formik) => {
                    const {
                        errors,
                        touched,
                        isValid,
                        dirty,
                        values,
                        setFieldValue,
                        handleChange,
                        setFieldTouched,
                        setFieldError,
                    } = formik;
                    useEffect(()=>{
                        if(customErrors){
                            for (const property in customErrors) {
                                setFieldTouched(property, true, false);
                                setFieldError(property, `${customErrors[property]}`);
                            }
                        }

                    },[customErrors])

                    useEffect(() => {
                        if (userData) {
                            setFieldValue("first_name", userData.first_name, false);
                            setFieldValue("last_name", userData.last_name, false);
                            setFieldValue("email", userData.email, false);
                            setFieldValue(
                                "mobile_number",
                                userData.mobile_number,
                                false
                            );
                        }
                    }, [userData]);


                    return (
                        <div className="py-5 inner-pg">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 col-xl-10">
                                        <div className="clearfix">
                                            <Form className="card">
                                                <div className="card-body">
                                                    <h4 class="card-title mb-4"><FormattedMessage {...messages.header} /></h4>
                                                    <div className="row">
                                                        <div className="form-group col-lg-6">
                                                            <label htmlFor="email">
                                                                First Name
                                                                <span className={"text-danger"}>*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                name="first_name"
                                                                id="first_name"
                                                                value={values.first_name}
                                                                className={
                                                                    errors.first_name && touched.first_name
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                            />
                                                            <ErrorMessage
                                                                name="first_name"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                        <div className="form-group col-lg-6">
                                                            <label htmlFor="email">
                                                                Last Name
                                                                <span className={"text-danger"}>*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                name="last_name"
                                                                id="last_name"
                                                                value={values.last_name}
                                                                className={
                                                                    errors.last_name && touched.last_name
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                            />
                                                            <ErrorMessage
                                                                name="last_name"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                        <div className="form-group col-lg-6">
                                                            <label htmlFor="email">
                                                                Email<span className={"text-danger"}>*</span>
                                                            </label>
                                                            <Field
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                value={values.email}
                                                                className={
                                                                    errors.email && touched.email
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                                data-lpignore="true"
                                                            />
                                                            <ErrorMessage
                                                                name="email"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                        <div className="form-group col-lg-6">
                                                            <label htmlFor="password">
                                                                Password
                                                            </label>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                value={values.password}
                                                                className={
                                                                    errors.password && touched.password
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                                data-lpignore="true"
                                                            />
                                                            <ErrorMessage
                                                                name="password"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                        <div className="form-group col-lg-6">
                                                            <label htmlFor="email">
                                                                Phone number
                                                                <span className={"text-danger"}>*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                name="mobile_number"
                                                                id="mobile_number"
                                                                value={values.mobile_number}
                                                                className={
                                                                    errors.mobile_number && touched.mobile_number
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                            />
                                                            <ErrorMessage
                                                                name="mobile_number"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>
                                                        <div className="col-md-12 text-end pt-5">
                                                            <button
                                                                type="submit"
                                                                className={
                                                                    !(dirty && isValid)
                                                                        ? "btn btn-primary disabled-btn mx-1"
                                                                        : "btn btn-primary mx-1"
                                                                }
                                                                disabled={!(dirty && isValid)}
                                                            >
                                                                Update User
                                                            </button>
                                                            <Link
                                                                to="/"
                                                                className="btn btn-secondary mx-1"
                                                            >
                                                                Cancel
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </Layout>
    );
}
