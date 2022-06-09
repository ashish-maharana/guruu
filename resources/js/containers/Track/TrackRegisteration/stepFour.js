import React, { useState, useEffect, useRef } from "react";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { trackValidateStep4 } from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectTrack from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";

export default function StepFour(props) {
    const nextStep = () => {
        props.nextStep();
    };
    
    const previousStep = () => {
        if (confirm("Are you sure you want to go back?")) {
            props.previousStep();
        }
    };

    useInjectReducer({ key: name, reducer });
    useInjectSaga({ key: name, saga });

    const dispatch = useDispatch();
    const TrackState = useSelector(makeSelectTrack());
    const TrackError = useSelector(makeSelectErrors());
    const trackStep4 = TrackState.trackStep4;
    console.log('Track Data Fourth', TrackState.trackStep4);
    return (
        <Formik
            initialValues={{
                rate_per_class: "",
                is_first_class_free: false,
                enrolment_start_date: "",
                enrolment_end_date: "",
            }}
            onSubmit={(values) => {
                console.log('Initial Data Fourth', values);
                dispatch(actions.trackValuesFourth(values));
                const trackFinal = {...TrackState.trackStep1,...TrackState.trackStep2,...TrackState.trackStep3, ...values};
                console.log('Track Final', trackFinal);
                dispatch(actions.trackValuesFinal(trackFinal));
            }}
        >
        {(formik) => {
                const {
                errors,
                touched,
                isValid,
                dirty,
                values,
                handleChange,
                setFieldTouched,
                setFieldError,
                setFieldValue,
                } = formik;

                useEffect(() => {
                    if (trackStep4) {
                        setFieldValue("rate_per_class", trackStep4.rate_per_class ? trackStep4.rate_per_class : "",false);
                        setFieldValue("is_first_class_free",trackStep4.is_first_class_free ? trackStep4.is_first_class_free : false,false);
                        setFieldValue("enrolment_start_date", trackStep4.enrolment_start_date ? trackStep4.enrolment_start_date : "",false);
                        setFieldValue("enrolment_end_date",trackStep4.enrolment_end_date ? trackStep4.enrolment_end_date : "",false);
                    }
                }, [trackStep4]);
                
                const disable_Datetimelocal_Pastdates = () => {
                    const today = new Date();
                    const dd = String(today.getDate()).padStart(2, "0");
                    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                    const yyyy = today.getFullYear();
                    return yyyy + "-" + mm + "-" + dd + "T00:00";
                };
                
                const disable_Date_Pastdates = () => {
                    const today = new Date();
                    const dd = String(today.getDate()).padStart(2, "0");
                    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                    const yyyy = today.getFullYear();
                    return yyyy + "-" + mm + "-" + dd;
                };
                
                return (
                        <div className="clearfix">
                            <h3 className='modal-subeading text-center mb-5'>What is your fee?</h3>
                            <Form className="mt-4">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-8">
                                        <div className="input-group mb-4">
                                            <input type="number" className="form-control" name="rate_per_class" onChange={handleChange} placeholder="Enter your rates per class" />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2"><i className="bx bx-rupee"></i> /hr</span>
                                            </div>
                                        </div>

                                        <div className="toggle-text-wrap d-flex mb-4">
                                            <div className="w-100">
                                                First Class for free
                                            </div>
                                            <div className="toggler">
                                                <label className="toggle">
                                                    <input type="checkbox" name="is_first_class_free" id="is_first_class_free" onChange={handleChange} />
                                                    <span className="slider"></span>
                                                    <span className="labels" data-on="ON" data-off="OFF"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>When students can Enroll (Optional)</label>
                                            <div className="col-12 px-0 mb-4">
                                                <label htmlFor="enroll_before" className="btn-radio btn-rdo-lg w-100">
                                                    <input type="radio" id="enroll_before" name="enroll_opt"/>
                                                    <div className="btn-rdo-wrap">
                                                    <span className="text">Student must enroll before <input type="date" name="enrolment_start_date" id="enrolment_start_date" onChange={handleChange} min={disable_Date_Pastdates()}  onKeyDown={(e) => { e.preventDefault(); }} className="radio-input" /></span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="col-12 px-0 mb-4">
                                                <label htmlFor="enroll_after" className="btn-radio btn-rdo-lg w-100">
                                                    <input type="radio" id="enroll_after" name="enroll_opt"/>
                                                    <div className="btn-rdo-wrap">
                                                        <span className="text">Student must enroll after <input type="date" name="enrolment_end_date" id="enrolment_start_date" onChange={handleChange} min={disable_Date_Pastdates()} onKeyDown={(e) => { e.preventDefault(); }} className="radio-input" /></span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
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
                                        // className="btn btn-primary btn-block w-100 { !(dirty && isValid) ? disabled-btn : }"
                                        className="btn btn-primary btn-block w-100"
                                        // disabled={!(dirty && isValid)}
                                        onClick={nextStep}
                                    >
                                        Next
                                    </button>
                                    </div>
                                </div>
                            </Form>
                            <div className="step-pagination text-center pt-5">
                                <span className=""></span>
                                <span className=""></span>
                                <span className=""></span>
                                <span className="active"></span>
                            </div>
                    </div>
                );
        }}
        </Formik>
    );
}


    

