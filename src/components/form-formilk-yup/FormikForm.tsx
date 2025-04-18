import { FormikFormData } from "../../interface.form";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import AppInput from "../app-input/AppInput";
import ErrorMassage from "../error-message/ErrorMassage";
import AppTextArea from "../app-textarea/AppTextArea";

const initialValues: FormikFormData = {
  name: '',
  email: '',
  phone: '',
  description: ''
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required('Name is required'),
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
    .required('Phone number is required'),
})

const FormikForm: React.FC = () => {
  const formik = useFormik({
    initialValues : initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) =>{
      console.log(values);
    }
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <AppInput 
        label="Name"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <ErrorMassage message={formik.errors.name}/>
        ) : null}
      <AppInput 
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMassage message={formik.errors.email}/>
        ) : null}
      <AppInput 
        label="Phone number"
        id="phone"
        name="phone"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <ErrorMassage message={formik.errors.phone}/>
        ) : null}
      <AppInput 
        label="Comments"
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <AppTextArea
        label="Tell us your story"
        id="description"
        rows={5}
        cols={33}
        onChange={formik.handleChange}
        value={formik.values.description}
        text="Your comments"
      />
      <button type="submit" >Send</button>
    </form>
  )
}

export default FormikForm