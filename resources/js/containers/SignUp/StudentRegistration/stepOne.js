import { useInjectReducer, useInjectSaga } from "redux-injectors";
import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validate from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectSignup from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";

export default function StepOne(props) {
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });

  const dispatch = useDispatch();
  const SignupState = useSelector(makeSelectSignup());
  const SignupError = useSelector(makeSelectErrors());
  const showErrors = SignupError.errors;

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        dispatch(actions.systemSignup(values));
      }}
    >
      {(formik) => {
        const {
          errors,
          touched,
          isValid,
          dirty,
          setFieldTouched,
          setFieldError,
          handleChange,
        } = formik;
        useEffect(() => {
          if (showErrors) {
            for (const property in showErrors) {
              setFieldTouched(property, true, false);
              setFieldError(property, `${showErrors[property]}`);
            }
          }
        }, [showErrors]);
        return (
          <div className="clearfix">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <h2 className="modal-heading text-center mb-5">Sign Up</h2>
                <Form className="mt-4">
                  <div className="clearfix form-group">
                    <div className="row row-2">
                      <div className="col-12 col-sm-6 mb-2">
                        <label
                          htmlFor="teacher"
                          className="btn-radio w-100 btn-rdo-img mb-0"
                        >
                          <Field
                            type="radio"
                            value="Teacher"
                            name="roles"
                            className="form-check-input"
                            id="teacher"
                          />
                          <div className="btn-rdo-wrap d-flex justify-content-between align-items-center">
                            <span className="text">Teacher</span>
                            <div
                              className="radio-img"
                              style={{
                                backgroundImage: `url('images/teacher.png')`,
                              }}
                            ></div>
                          </div>
                        </label>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <label
                          htmlFor="student"
                          className="btn-radio w-100 btn-rdo-img mb-0"
                        >
                          <Field
                            type="radio"
                            value="Student"
                            name="roles"
                            className="form-check-input"
                            id="student"
                          />
                          <div className="btn-rdo-wrap d-flex justify-content-between align-items-center">
                            <span className="text">Student</span>
                            <div
                              className="radio-img"
                              style={{
                                backgroundImage: `url('images/graduated.png')`,
                              }}
                            ></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group py-2">
                    <Field
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="First Name"
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

                  <div className="form-group py-2">
                    <Field
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Last Name"
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
                  <div className="form-group py-2">
                    {/* <label htmlFor="email">Email</label> */}
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className={
                        errors.email && touched.email
                          ? "form-control form-control-user is-invalid"
                          : "form-control form-control-user"
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group py-2">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className={
                        errors.password && touched.password
                          ? "form-control form-control-user is-invalid"
                          : "form-control form-control-user"
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group py-2">
                    <Field
                      type="text"
                      name="mobile_number"
                      id="mobile_number"
                      placeholder="Enter 10 digit Mobile Number"
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

                  <div className="w-100 d-inline-block py-3">
                    <button
                      type="submit"
                      className={
                        !(dirty && isValid)
                          ? "btn btn-primary btn-user btn-block disabled-btn w-100"
                          : "btn btn-primary btn-user btn-block w-100"
                      }
                      disabled={!(dirty && isValid)}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="already-account text-center pt-3">
                    Already have an account?{" "}
                    <a href={"/login"} className="color-primary">
                      Sign In
                    </a>
                  </div>
                  <div className="step-pagination text-center pt-5">
                    <span className="active"></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
