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
import saga from "../saga";
import DropZoneEx from "../dropZone";
import { DatePickerField } from "../../../utils/HelperFormik";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const initialValues = {
  image_path: "",
  dob: "",
  gender: "",
  about: "",
};

export default function StepTwo(props) {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  const year = new Date().getFullYear();
  const maxDate = new Date(moment().subtract(18, "years"));
  const minDate = new Date(year - 100, 1, 1);
  const dispatch = useDispatch();
  const SignupState = useSelector(makeSelectSignup());
  const userProfileDetails = SignupState.profile.data;

  useEffect(() => {
    dispatch(actions.getProfiledetails({}));
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileValidate}
      onSubmit={(values) => {
        dispatch(actions.teacherProfilePage(values));
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
          values,
        } = formik;

        useEffect(() => {
          if (userProfileDetails) {
            setFieldValue(
              "dob",
              userProfileDetails.dob ? userProfileDetails.dob : "",
              false
            );
            setFieldValue(
              "gender",
              userProfileDetails.gender ? userProfileDetails.gender : "",
              false
            );
          }
        }, [userProfileDetails]);

        return (
          <div className="clearfix">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <h2 className="modal-heading text-center mb-4">
                  Sign Up as a Teacher
                </h2>
                <h3 className="modal-subheading text-center mb-4">
                  Your Professional Profile Picture
                </h3>
                <Form className="clearfox">
                  <div className="form-group pt-2">
                    <DropZoneEx setFieldValue={setFieldValue} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dob">
                      Date of birth<span className={"text-danger"}>*</span>
                    </label>
                    <DatePickerField
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="dob"
                      maxDate={maxDate}
                      minDate={minDate}
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={15}
                      autocomplete="off"
                    />
                    <ErrorMessage
                      name="dob"
                      component="span"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group pt-2 pb-4">
                    <label htmlFor="gender">
                      Select your Gender<span className={"text-danger"}>*</span>
                    </label>
                    <div className="row row-2">
                      <div className="col-12 col-sm-6 mb-2">
                        <label
                          htmlFor="male"
                          className="btn-radio w-100 btn-rdo-img mb-0"
                        >
                          <Field
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="form-check-input"
                          />
                          <div className="btn-rdo-wrap d-flex justify-content-between align-items-center">
                            <span className="text">Male</span>
                            <div
                              className="radio-img"
                              style={{
                                backgroundImage: `url('images/male.png')`,
                              }}
                            ></div>
                          </div>
                        </label>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <label
                          htmlFor="female"
                          className="btn-radio w-100 btn-rdo-img mb-0"
                        >
                          <Field
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="form-check-input"
                          />
                          <div className="btn-rdo-wrap d-flex justify-content-between align-items-center">
                            <span className="text">Female</span>
                            <div
                              className="radio-img"
                              style={{
                                backgroundImage: `url('images/female.png')`,
                              }}
                            ></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={
                      !(dirty && isValid)
                        ? "btn btn-primary btn-user btn-block disabled-btn w-100"
                        : "btn btn-primary btn-user btn-block w-100"
                    }
                    disabled={!(dirty && isValid)}
                  >
                    Next
                  </button>
                </Form>
                <div className="step-pagination text-center pt-5">
                  <span className=""></span>
                  <span className=""></span>
                  <span className="active"></span>
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
