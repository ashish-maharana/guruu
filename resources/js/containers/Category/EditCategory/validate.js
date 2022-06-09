import * as Yup from 'yup';

const validate = Yup.object().shape({
    name: Yup.string().required("Category name is required"),
});

export default validate;
