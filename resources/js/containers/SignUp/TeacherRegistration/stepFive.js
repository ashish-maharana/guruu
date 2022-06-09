import { useInjectReducer, useInjectSaga } from "redux-injectors";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  aboutValidate,
  profileValidate,
  teachValidate,
  validateUpdatedPhoneNumber,
} from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectSignup from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";
import "react-datepicker/dist/react-datepicker.css";
import { confirmAlert } from "react-confirm-alert";

const initialValues = {
  image_path: "",
  dob: "",
  gender: "",
  about: "",
};

export default function StepFive(props) {
  const previousStep = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to go back?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                props.previousStep();
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      },
    });
  };
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
      initialValues={initialValues}
      validator={aboutValidate}
      onSubmit={(values) => {
        dispatch(actions.aboutPage(values));
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
          setFieldValue,
        } = formik;
        return (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-12">
                <h2 className="modal-heading text-center mb-4">
                  Sign Up as a Teacher
                </h2>
                <h3 className="modal-subheading text-center mb-4">
                  Tell us a bit more about your self
                </h3>
                <Form className="mt-4">
                  <div className="form-group">
                    <label htmlFor="about">
                      About Me<span className={"text-danger"}>*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="about"
                      id="about"
                      placeholder="About Me"
                      className={
                        errors.about && touched.about
                          ? "form-control form-control-user is-invalid"
                          : "form-control form-control-user"
                      }
                    />
                    <ErrorMessage
                      name="about"
                      component="span"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className=" row mt-4">
                    <div className="col-12 col-sm-6">
                      <button
                        type="button"
                        className="btn btn-default w-100"
                        onClick={previousStep}
                      >
                        Previous
                      </button>
                    </div>
                    <div className="col-12 col-sm-6">
                      <button
                        type="submit"
                        className={
                          !(dirty && isValid)
                            ? "btn btn-primary btn-user btn-block disabled-btn w-100"
                            : "btn btn-primary btn-user btn-block w-100"
                        }
                        disabled={!(dirty && isValid)}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                  <div className="step-pagination text-center pt-5">
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className="active"></span>
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
