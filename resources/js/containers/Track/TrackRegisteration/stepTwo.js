import React, { useState, useEffect, useRef } from "react";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { trackValidateStep2 } from "../validate";
import { name, reducer, actions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import makeSelectTrack from "../selectors";
import makeSelectErrors from "../selectors";
import saga from "../saga";
import moment from 'moment';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default function StepTwo(props) {
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
    const showErrors = TrackError.errors;
    const trackStep2 = TrackState.trackStep2;
    console.log('Track Data Second', TrackState.trackStep2);

    return (
        <Formik
            initialValues={{
                track_frequency: "",
                duration_in_mins: "",
                skip_weekends: false,
                start_date: "",
                end_date: "",
                has_end_date: false,
                student_capacity: "",
            }}
            validationSchema={trackValidateStep2}
            onSubmit={(values) => {
                console.log('Initial Data Second', values);
                dispatch(actions.trackValuesSecond(values));
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
                handleBlur,
                setFieldTouched,
                setFieldError,
                setFieldValue,
                } = formik;

                useEffect(() => {
                    if (trackStep2) {
                        setFieldValue("track_frequency", trackStep2.track_frequency ? trackStep2.track_frequency : "", false);
                        setFieldValue("duration_in_mins", trackStep2.duration_in_mins ? trackStep2.duration_in_mins : "", false);
                        setFieldValue("skip_weekends", trackStep2.skip_weekends ? trackStep2.skip_weekends : false, false);
                        setFieldValue("start_date", trackStep2.start_date ? trackStep2.start_date : "", false);
                        setFieldValue("end_date", trackStep2.end_date ? trackStep2.end_date : "", false);
                        setFieldValue("has_end_date", trackStep2.has_end_date ? trackStep2.has_end_date : false, false);
                        setFieldValue("student_capacity", trackStep2.student_capacity ? trackStep2.student_capacity : "", false);
                    }
                }, [trackStep2]);

                const skip_weekends = [1,2,3,4,5];
                const daily = [0,1,2,3,4,5,6];
                const [skipvisible, setSkipVisible] = useState(false);
                const [dailytrigger, setDailytrigger] = useState(false);
                const [weeklytrigger, setWeeklytrigger] = useState(false);
                const [weeklyarray, setWeeklyarray] = useState([]);
                const [disableenddate, setDisableenddate] = useState(false);
                const [startdate, setStartDate] = useState('');
                const [enddate, setEndDate] = useState('');

                
                const handleFrequency = (e) => {
                    if(e.target.value === 'Daily'){
                        handleChange(e);
                        setDailytrigger(true);
                        setWeeklytrigger(false);
                        setSkipVisible(false);
                        setWeeklyarray([]);
                    }else if(e.target.value === 'Weekly'){
                        handleChange(e);
                        setWeeklytrigger(true);
                        setDailytrigger(false);
                        setSkipVisible(false);
                        setFieldValue("skip_weekends", false);
                    }else{
                        handleChange(e);
                        setDailytrigger(false);
                        setWeeklytrigger(false);
                        setSkipVisible(false);
                        setWeeklyarray([]);
                    }
                };
                
                const enabledaily = (date) => {
                    if(skipvisible){
                        return skip_weekends.includes(date.getDay());
                    }else if(dailytrigger){
                        return daily.includes(date.getDay());
                    }else if(weeklytrigger){
                        return weeklyarray.includes(date.getDay());
                    }
                };

                const addMon_Click = (e) => {
                    if(e.target.checked){ 
                        setWeeklyarray([...weeklyarray, 1]); 
                    }else{ 
                        setWeeklyarray(weeklyarray.filter(item => item !== 1)); 
                    }
                };

                const addTue_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 2]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 2));
                    }
                };

                const addWed_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 3]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 3));
                    }
                };

                const addThu_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 4]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 4));
                    }
                };

                const addFri_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 5]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 5));
                    }
                };

                const addSat_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 6]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 6));
                    }
                };

                const addSun_Click = (e) => {
                    if(e.target.checked){
                        setWeeklyarray([...weeklyarray, 0]);
                    }else{
                        setWeeklyarray(weeklyarray.filter(item => item !== 0));
                    }
                };

                const startdateTrigger = (date) => {
                    handleChange(date);
                    const startdate = moment(date).format('YYYY-MM-DD');
                    setStartDate(startdate);
                };

                const enddateTrigger = (date) => {
                    handleChange(date);
                    const enddate = moment(date).format('YYYY-MM-DD');
                    setEndDate(enddate);
                };

                const disableEndDateInput = () => {
                    setDisableenddate(!disableenddate);
                    if(disableenddate == true){
                        setFieldValue("end_date", enddate);
                    }else{
                        setFieldValue("end_date", "");
                        // setVal()
                    }
                };

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
                    <div>
                        <Form className="mt-4">
                            <div className="clearfix">
                                <h3 className='modal-subheading text-center mb-5'>How frequently do you want to take classes?</h3>
                                <div className="row modal-two-column-form">
                                    <div className="col-12 col-md-7">
                                        <div className="row">
                                            <div className="col-12 col-md-6 form-group">
                                                <label htmlFor="selectFrequency">Frequency of Track</label>
                                                <select 
                                                    name="track_frequency"
                                                    value={values.track_frequency}
                                                    onChange={handleFrequency}
                                                    className={
                                                        errors.tracktype && touched.tracktype
                                                            ? "form-control form-control-user is-invalid"
                                                            : "form-control form-control-user"
                                                    } 
                                                >
                                                    <option>Select Frequency</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="Weekly">Weekly</option>
                                                </select>
                                                <ErrorMessage
                                                    name="track_frequency"
                                                    component="span"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 form-group">
                                                <label htmlFor="selectDuration">Select Duration</label>
                                                <select
                                                    id="selectDuration"
                                                    name="duration_in_mins"
                                                    onChange={handleChange}
                                                    className={
                                                        errors.tracktype && touched.tracktype
                                                            ? "form-control form-control-user is-invalid"
                                                            : "form-control form-control-user"
                                                    } 
                                                >
                                                    <option label="Select Duration"/>
                                                    <option value="60" label="60 Minutes" />
                                                    <option value="120" label="120 Minutes" />
                                                    <option value="180" label="180 Minutes" />
                                                </select>
                                                <ErrorMessage
                                                    name="duration_in_mins"
                                                    component="span"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                        </div>
                                        { weeklytrigger ?  
                                        <div className="row">
                                            <div className="col-12 col-md-12 form-group">
                                                <div className="week-days">
                                                    <label className="check-weekday">
                                                        <input type="checkbox" id="week-mon" value="monday" name="monday" onClick={addMon_Click}/>
                                                        <span>Mon</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                        <input type="checkbox" id="week-tue" value="tuesday" name="tuesday" onClick={addTue_Click}/>
                                                        <span>Tue</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                        <input type="checkbox" id="week-wed" value="wednesday" name="wednesday" onClick={addWed_Click}/>
                                                        <span>Wed</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                        <input type="checkbox" id="week-thu" value="thursday" name="thursday" onClick={addThu_Click}/>
                                                        <span>Thu</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                    <input type="checkbox" id="week-fri" value="firday" name="firday" onClick={addFri_Click}/>
                                                    <span>Fri</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                    <input type="checkbox" id="week-sat" value="saturday" name="saturday" onClick={addSat_Click}/>
                                                    <span>Sat</span>
                                                    </label>
                                                    <label className="check-weekday">
                                                        <input type="checkbox" id="week-sun" value="sunday" name="sunday" onClick={addSun_Click}/>
                                                        <span>Sun</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        : null }
                                        
                                        { dailytrigger ?  
                                        <div className="form-group">
                                            <div className="square-radio">
                                                <Field type="checkbox" name="skip_weekends" id="skip_weekends" checked={skipvisible} onClick={() => setSkipVisible(!skipvisible)} />
                                                <span className="text">Skip Weekends</span>
                                            </div>
                                        </div>
                                        : null }
                                        
                                        <div className="row pt-3">
                                            <div className="col-12 col-md-6 form-group">
                                                <label>Starts On</label>
                                                <div className="field-icon">
                                                    <i className="bi bi-calendar"></i>
                                                    <input type="date" name="start_date" id="start_date" className="form-control dates-track" min={disable_Date_Pastdates()}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        startdateTrigger(e.target.value);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="start_date"
                                                    component="span"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                            
                                            <div className="col-12 col-md-6 form-group">
                                                <label>Ends On</label>
                                                <div className="field-icon">
                                                    <i className="bi bi-calendar"></i>
                                                    <input type="date" name="end_date" id="end_date" className="form-control dates-track" min={disable_Date_Pastdates()}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        enddateTrigger(e.target.value);
                                                    }}
                                                    onKeyDown={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    disabled={disableenddate}
                                                    value=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="square-radio">
                                                <Field type="checkbox" name="has_end_date" id="has_end_date" onClick={disableEndDateInput} />
                                                <span className="text">This track does not have End Date</span>
                                            </div>
                                        </div>

                                        <div className="form-group pt-3">
                                            <label>Student Capacity</label>
                                            <Field
                                                type="number"
                                                name="student_capacity"
                                                id="student_capacity"
                                                value={values.student_capacity}
                                                placeholder='Student Capacity'
                                                className={
                                                    errors.student_capacity && touched.student_capacity
                                                        ? "form-control form-control-user is-invalid"
                                                        : "form-control form-control-user"
                                                }
                                            />
                                            <ErrorMessage
                                                name="student_capacity"
                                                component="span"
                                                className="invalid-feedback"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <Flatpickr
                                            options={{ 
                                                inline: true,
                                                mode: "multiple",
                                                dateFormat: "Y-m-d",
                                                enable: [ 
                                                    enabledaily ? enabledaily : ''
                                                ],
                                                minDate: startdate ? startdate : "today",
                                                maxDate:  disableenddate ? "" : (enddate ? enddate : ""),
                                                locale: {
                                                    "firstDayOfWeek": 1 // start week on Monday
                                                }
                                            }}
                                        /> 
                                    </div>
                                </div>
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
                            <span className="active"></span>
                            <span className=""></span>
                            <span className=""></span>
                        </div>
                    </div>
                );
        }}
        </Formik>
    );
}


    

