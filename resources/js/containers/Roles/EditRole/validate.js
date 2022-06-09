import * as Yup from 'yup';

const validate = Yup.object().shape({
    name: Yup.string().required("Role name is required"),
});

export default validate;
