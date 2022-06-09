import StepWizard from "react-step-wizard";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validate from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectSignup from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";
import Countdown, { zeroPad } from "react-countdown";
import "react-datepicker/dist/react-datepicker.css";
import { confirmAlert } from "react-confirm-alert";

export default function StepOne(props) {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  const dispatch = useDispatch();
  const SignupState = useSelector(makeSelectSignup());
  const SignupError = useSelector(makeSelectErrors());
  const showErrors = SignupError.errors;
  const mobileNumber = SignupState.mobileNumber.data;
  const [show, setShow] = useState(false);
  const [resetTimer, setResetTimer] = useState(true);
  const startDate = React.useRef(Date.now());
  const Completionist = () => <span>00:00</span>;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setShow(true);
      setResetTimer(false);
      return <Completionist />;
    } else {
      return (
        <span>
          {zeroPad(minutes)}:{seconds}
        </span>
      );
    }
  };

  const editPhoneNumber = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to edit this phone number?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                props.goToStep(6);
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

  return (
    <Formik
      initialValues={{
        verification_code: "",
      }}
      validator={validate}
      onSubmit={(values) => {
        dispatch(
          actions.teacherVerification({
            ...values,
          })
        );
      }}
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

        useEffect(() => {
          dispatch(actions.getUserPhoneNumber({}));
        }, []);

        const resendOTP = () => {
          dispatch(actions.resendOTP({}));
          setTimeout(() => location.reload(), 5000);
        };

        return (
          <div className="clearfix">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <h2 className="modal-heading text-center mb-4">
                  Sign Up as a Teacher
                </h2>
                <h3 className="modal-subheading text-center mb-4">
                  OTP Verification
                </h3>
                <Form className="clearfix">
                  <div className="sent-code-contact text-center pt-2 pb-4">
                    We Sent an OTP verification code to{" "}
                    <strong>{mobileNumber}</strong>{" "}
                    <i
                      className="bx bx-edit text-primary"
                      title="Incorrect number? Click here"
                      onClick={editPhoneNumber}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Field
                      type="number"
                      name="verification_code"
                      id="verification_code"
                      placeholder="Enter OTP here"
                      value={values.verification_code}
                      className={
                        errors.verification_code && touched.verification_code
                          ? "form-control form-control-user is-invalid"
                          : "form-control form-control-user"
                      }
                    />
                    <ErrorMessage
                      name="verification_code"
                      component="span"
                      className="invalid-feedback"
                    />
                  </div>
                  {resetTimer === true ? (
                    <div className="otp-countdown text-center">
                      The OTP will expire in&nbsp;
                      <span className="color-primary text-center">
                        <Countdown
                          zeroPadTime
                          date={startDate.current + 120000}
                          renderer={renderer}
                        />
                      </span>{" "}
                      minutes.
                    </div>
                  ) : (
                    <div className="otp-countdown text-center">
                      Timeout, Please click on resend OTP below
                    </div>
                  )}
                  <div className="col-md-12 text-end mt-5">
                    <button
                      type="submit"
                      className={
                        !(dirty && isValid)
                          ? "btn btn-primary disabled-btn mx-1 w-100"
                          : "btn btn-primary mx-1 w-100"
                      }
                      disabled={!(dirty && isValid)}
                    >
                      Verify & Proceed
                    </button>
                  </div>
                </Form>
                {show === true ? (
                  <div className="otp-not-get text-center pt-5 pb-3">
                    Didn't receive the OTP ?
                  </div>
                ) : (
                  ""
                )}
                {show === true ? (
                  <div className="text-center w-100 d-inline-block">
                    <button
                      className="btn btn-outline-warning"
                      onClick={resendOTP}
                    >
                      Resend OTP
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <div className="step-pagination text-center pt-5">
                  <span className=""></span>
                  <span className="active"></span>
                  <span className=""></span>
                  <span className=""></span>
                  <span className=""></span>
                  <span className=""></span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
