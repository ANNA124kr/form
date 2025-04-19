import * as Yup from 'yup'
import AppInput from "../app-input/AppInput";
import SendIcon from '@mui/icons-material/Send';
import AppTextArea from "../app-textarea/AppTextArea";
import { styles } from "./FormikForm.style";
import { useFormik } from 'formik';
import { Box, Button } from "@mui/material";
import { FormikFormData } from "../../interface.form";

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
    },
    onReset: (values, actions) => {
      console.log('Form reset! Current values:', values);
      actions.setSubmitting(false);
    }
  })
  return(
    <Box
      sx={styles.container}
      component='form'
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      noValidate
    >
      <AppInput 
        label="Name"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <AppInput 
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error = {formik.touched.email && Boolean(formik.errors.email)}
        helperText = {formik.touched.email && formik.errors.email}
      />
      <AppInput 
        label="Phone number"
        id="phone"
        name="phone"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error = {formik.touched.phone && Boolean(formik.errors.phone)}
        helperText = {formik.touched.phone && formik.errors.phone}
      />
      <AppTextArea
        label="Tell us your story"
        id="description"
        rows={5}
        cols={33}
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <Box
        sx={styles.buttonsContainer}>
        <Button
          type="reset"
          variant="outlined"
          sx={styles.buttonReset}
        >
          Clean
        </Button>
        <Button 
          type="submit"
          variant="contained"
          sx={styles.buttonSubmit}
          endIcon = {<SendIcon/>}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default FormikForm