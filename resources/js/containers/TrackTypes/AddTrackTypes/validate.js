import * as Yup from 'yup';

const validate = Yup.object().shape({
    name: Yup.string().required("Track name is required"),
});

export default validate;
