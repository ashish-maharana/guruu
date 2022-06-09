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
import { name, reducer, actions } from "../Permissions/slice";
import validate from "./validate";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import messages from './messages';
import saga from '../Permissions/saga'
import Layout from "../../Layout";
import makeSelectLogin from "../../Login/selectors";
import {makeSelectErrors, makeSelectSinglePermission} from "../Permissions/selectors";
import makePermissions from "../Permissions/selectors";


export default function EditPermission() {
    const dispatch = useDispatch();
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });
    const customErrors = useSelector(makeSelectErrors());
    const permissionData = useSelector(makePermissions());

    const { id } = useParams();

    useEffect(() => {
        dispatch(actions.singlePermission(id));
    }, []);



    return (
        <Layout>
            <Formik
                initialValues={{
                    name: "",
                }}
                onSubmit={(values) => {
                    dispatch(
                        actions.updatePermission({
                            ...values, id: id
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
                        if (permissionData) {
                            setFieldValue("name", permissionData.data.name, false);
                        }
                    }, [permissionData]);


                    return (
                        <div className="py-5 inner-pg">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-6">
                                        <div className="clearfix">
                                            <Form className="card">
                                                <div className="card-body">
                                                    <h4 class="card-title mb-4"><FormattedMessage {...messages.header} /></h4>
                                                    <div className="row">
                                                        <div className="form-group col-lg-12">
                                                            <label htmlFor="email">
                                                            Permission Name
                                                                <span className={"text-danger"}>*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                value={values.name}
                                                                className={
                                                                    errors.name && touched.name
                                                                        ? "form-control form-control-user is-invalid"
                                                                        : "form-control form-control-user"
                                                                }
                                                            />
                                                            <ErrorMessage
                                                                name="name"
                                                                component="span"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                        <div className="col-md-12 text-end mt-5">
                                                            <button
                                                                type="submit"
                                                                className={
                                                                    !(dirty && isValid)
                                                                        ? "btn btn-primary disabled-btn m-1"
                                                                        : "btn btn-primary m-1"
                                                                }
                                                                disabled={!(dirty && isValid)}
                                                            >
                                                                Update Permission
                                                            </button>
                                                            <Link
                                                                to="/"
                                                                className="btn btn-secondary m-1"
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
