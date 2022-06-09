import * as Yup from 'yup';

const validate = Yup.object().shape({
    name: Yup.string().required("Permission name is required"),
});

export default validate;
