import * as Yup from 'yup';

// const rules = `At least 8 characters,
// At least one uppercase letter (A-Z),
// At least one lowercase letter (a-z),
// At least one number digit (0-9),
// At least one special character from following options: #?!@$%^&*-`;

const rules = `At least 8 characters,
At least one uppercase letter (A-Z),
At least one lowercase letter (a-z),
At least one number digit (0-9),
At least one special character from following options: #?!@$%^&*-`;

const validate = Yup.object({
    email: Yup.string()
        .email()
        .required('Please enter your email'),
    password: Yup.string().required('Please enter your password').min(4, "Password is too short - should be 4 chars min"),
});

const validateEmail = Yup.object({
    email: Yup.string()
        .email()
        .required('Please enter your email')
});

const resetPassword = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(8, rules)
        .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password')
        .min(8, rules)
        .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
});

export default validate;
export {validateEmail,resetPassword};

