import * as Yup from "yup";

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

// const phoneRegExp = RegExp(/^[6-9]\d{9}\d{10})$/);

const validate = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, rules)
    .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
  mobile_number: Yup.string()
    .required("Please enter your mobile number")
    .matches(/^([6-9]\d{9})$/, "Phone number is not valid, Please enter 10 digit mobile number without country code")
    .min(10, "to short")
    .max(10, "to long"),
  roles: Yup.mixed().required("Please select any one"),
});

const validateEmail = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

const resetPassword = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, rules)
    .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password")
    .min(8, rules)
    .matches(/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})$/, rules),
});

const profileValidate = Yup.object({
  dob: Yup.mixed().required("Please enter Date of birth"),
  gender: Yup.mixed().required("Gender is required"),
});

const trackValidateStep1 = Yup.object({
  title: Yup.mixed().required("Track Title is required"),
  track_type_id: Yup.mixed().required("Track Type is required"),
});

const trackValidateStep2 = Yup.object({
  track_frequency: Yup.mixed().required("Please select frequency"),
  duration_in_mins: Yup.mixed().required("Please select duration"),
  start_date: Yup.mixed().required("Please select start date"),
  student_capacity: Yup.mixed().required("Student Capacity is required"),
});

const trackValidateStep3 = Yup.object({
  medium_of_instruction: Yup.mixed().required("Medium of Instruction is required"),
  delivery_method: Yup.mixed().required("Delivery Method is required"),
});

const learnValidate = Yup.object({
    learn: Yup.boolean().oneOf([true]).required("Please choose any one type")
});

const teachValidate = Yup.object({
    teach: Yup.boolean().oneOf([true]).required("Please choose any one type"),
})

export default validate;
export { validateEmail, resetPassword, profileValidate, trackValidateStep1, trackValidateStep2, trackValidateStep3, learnValidate, teachValidate };
