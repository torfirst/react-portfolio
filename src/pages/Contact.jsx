import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .required('Email is required')
        .matches(/\w+@\w+\.\w{2,}/, 'Please enter a valid email address'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      // Use EmailJS to send the form data via email
      emailjs.send('service_gnfkpcm', 'template_xck87kf', values)
        .then((response) => {
          alert('Your message has been sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
          formik.resetForm();
        }, (error) => {
          alert('An error occurred while sending your message. Please try again later.');
          console.error('FAILED...', error);
        });
    },
  });

  return (
    <div className="formik">
      <h2>contact</h2>
      <form id="custom-form" onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error-text">{formik.errors.name}</div>
        ) : null}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-text">{formik.errors.email}</div>
        ) : null}

        <textarea
          name="message"
          placeholder="What would you like to say?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className="error-text">{formik.errors.message}</p>
        ) : null}

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
