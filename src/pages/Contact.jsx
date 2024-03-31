import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { validateEmail } from '../../utils/helpers';

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
      alert(`Hi ${values.name}, your message has been received. Thank you for reaching out!`);
      formik.resetForm();
    },
  });

  return (
    <div className="container">
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
