import StepWizard from "react-step-wizard";
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

export default function StepSix(props) {
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
                props.goToStep(1);
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
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });

  const dispatch = useDispatch();
  const SignupState = useSelector(makeSelectSignup());
  const SignupError = useSelector(makeSelectErrors());
  const showErrors = SignupError.errors;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateUpdatedPhoneNumber}
      onSubmit={(values) => {
        dispatch(actions.editTeacherPhoneNumber(values));
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
                <h2 className="modal-heading text-center mb-5">
                  Edit Phone Number
                </h2>
                <Form className="mt-4">
                  <div className="form-group py-2">
                    <Field
                      type="text"
                      name="mobile_number"
                      id="mobile_number"
                      placeholder="Enter new 10 digit Mobile Number"
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
                  <div className="row mt-4">
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
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="step-pagination text-center pt-5">
                    <span className=""></span>
                    <span className="active"></span>
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
