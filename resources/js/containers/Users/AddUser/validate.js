import * as Yup from 'yup';

const rules = `At least 8 characters,
  At least one uppercase letter (A-Z),
  At least one lowercase letter (a-z),
  At least one number digit (0-9),
  At least one special character from following options: #?!@$%^&*-`;

const validate = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required")
            .min(8, rules)
            .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
    mobile_number: Yup.mixed().nullable(),
});

export default validate;
