import React, { Fragment, useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import history from "../../../utils/history";
import GoogleMap from "../maps";
import "react-datepicker/dist/react-datepicker.css";
import { confirmAlert } from "react-confirm-alert";

const initialValues = {
  image_path: "",
  dob: "",
  gender: "",
  about: "",
};

const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step,
}) => (
  <div className="mt-4">
    {step < totalSteps ? (
      <button className="btn btn-primary btn-block" onClick={nextStep}>
        Next
      </button>
    ) : (
      <button className="btn btn-success btn-block" onClick={nextStep}>
        Finish
      </button>
    )}
  </div>
);

export default function StepFourth(props) {
  const nextStep = () => {
    props.nextStep();
  };
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
                history.push("/teacher-signup#step2");
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // dispatch(actions.profilePage(values));
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
          <div className="clearfix px-4">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-12">
                <h2 className="modal-heading text-center mb-4">
                  Sign Up as a Teacher
                </h2>
                <h3 className="modal-subheading text-center mb-4">
                  Your Location
                </h3>
                <Form className="mt-5">
                  <div className="form-group">
                    <GoogleMap />
                    <Field type="hidden" />
                    <Field type="hidden" />
                    <ErrorMessage
                      name="about"
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
                        className="btn btn-primary btn-block w-100"
                        onClick={nextStep}
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="step-pagination text-center pt-5">
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className=""></span>
                    <span className="active"></span>
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
