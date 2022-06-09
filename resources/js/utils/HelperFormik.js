import React from "react";
import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker"
import PhoneInput from 'react-phone-number-input'



const MyTextArea = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className={
                meta.touched && meta.error ? "form-control form-control-user is-invalid" : "form-control form-control-user"
            } {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage name={props.name} component="span" className="invalid-feedback" />
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className={meta.touched && meta.error ? "form-control form-control-user is-invalid" : "form-control form-control-user"} {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage name={props.name} component="span" className="invalid-feedback" />
            ) : null}
        </>
    );
};

const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};

const Phone = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(props);
    return (
        <>
            <PhoneInput
                {...field}
                {...props}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
            />
            {meta.touched && meta.error ? (
                <ErrorMessage name={props.name} component="span" className="invalid-feedback" />
            ) : null}
        </>
    );
};

export {
    MyTextArea, MySelect, DatePickerField, Phone
}
