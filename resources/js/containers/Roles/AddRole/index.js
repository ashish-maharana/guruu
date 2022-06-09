import React, {useEffect} from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { name, reducer, actions } from "../Roles/slice";
import validate from "./validate";
import {useInjectReducer, useInjectSaga} from "redux-injectors";
import messages from './messages';
import saga from '../Roles/saga'
import Layout from "../../Layout";
import makeSelectLogin from "../../Login/selectors";
import {makeSelectErrors} from "../Roles/selectors";

export default function AddRole() {
    const dispatch = useDispatch();
    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });
    const customErrors = useSelector(makeSelectErrors());

    return (
        <Layout>
            <Formik
                initialValues={{
                    name: "",
                }}
                onSubmit={(values) => {
                    dispatch(
                        actions.saveRoles({
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

                    return (
                        <div className="pg-inner py-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-6">
                                        <Form className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-4"><FormattedMessage {...messages.header} /></h4>
                                                <div className="row">
                                                    <div className="form-group col-lg-12">
                                                        <label htmlFor="email">
                                                            Role Name
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
                                                            Add Role
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
                    );
                }}
            </Formik>
        </Layout>
    );
}
