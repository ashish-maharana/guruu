import React, { useState, useEffect, useRef } from "react";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { trackValidateStep3 } from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectTrack from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";

export default function StepThree(props) {
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
    const trackStep3 = TrackState.trackStep3;
    console.log('Track Data Third', TrackState.trackStep3);

    return (
        <Formik
            initialValues={{
                medium_of_instruction: "",
                delivery_method: "",
            }}
            validationSchema={trackValidateStep3}
            onSubmit={(values) => {
                console.log('Initial Data Third', values);
                dispatch(actions.trackValuesThird(values));
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
                    if (trackStep3) {
                        setFieldValue("medium_of_instruction", trackStep3.medium_of_instruction ? trackStep3.medium_of_instruction : "",false);
                        setFieldValue("delivery_method",trackStep3.delivery_method ? trackStep3.delivery_method : "",false);
                    }
                }, [trackStep3]);
    
                return (
                    <div className="clearfix">
                        <h3 className='modal-subheading text-center mb-5'>Select a Class Type</h3>
                        <Form className="mt-4">
                            <div className="form-group">
                                <label htmlFor="medium_of_instruction">Medium Of Instruction</label>
                                    <Field
                                        type="text"
                                        name="medium_of_instruction"
                                        id="medium_of_instruction"
                                        value={values.medium_of_instruction}
                                        placeholder='E.g: English OR English,Hindi,Sanskrit'
                                        className={
                                            errors.medium_of_instruction && touched.medium_of_instruction
                                                ? "form-control form-control-user is-invalid"
                                                : "form-control form-control-user"
                                        }
                                    />
                                    <ErrorMessage
                                        name="medium_of_instruction"
                                        component="span"
                                        className="invalid-feedback"
                                    />
                            </div>

                            <div className="clearfix form-group">
                                <label>Delivery Method</label>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="delivery_online" className="btn-radio btn-rdo-lg w-100">
                                            <input type="radio" id="delivery_online" value="Online" onChange={handleChange} name="delivery_method"/>
                                            <div className="btn-rdo-wrap">
                                                <span className="text">Online</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label htmlFor="delivery_offline" className="btn-radio btn-rdo-lg w-100">
                                            <input type="radio" id="delivery_offline" value="Offline" onChange={handleChange} name="delivery_method"/>
                                            <div className="btn-rdo-wrap">
                                                <span className="text">Offline</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <ErrorMessage
                                        name="delivery_method"
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
                                     className="btn btn-primary btn-block w-100 { !(dirty && isValid) ? disabled-btn : }"
                                     disabled={!(dirty && isValid)}
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
                            <span className="active"></span>
                            <span className=""></span>
                        </div>
                    </div>
                );
        }}
        </Formik>
    );
}


    

