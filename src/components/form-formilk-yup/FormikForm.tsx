import { FormikFormData } from "../../interface.form";
import { useFormik } from 'formik';

const initialValues: FormikFormData = {
  name: '',
  email: '',
  phone: '',
  description: ''
}


const FormikForm: React.FC = () => {
  const formik = useFormik({
    initialValues : initialValues,
    onSubmit: (values) =>{
      console.log(values);
    }
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        />
      </div>
      <div>
        <label htmlFor="description">Comments:</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <button type="submit" >Send</button>
    </form>
  )
}

export default FormikForm