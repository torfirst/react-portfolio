/* eslint-disable no-undef */
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const [submissionMessage, setSubmissionMessage] = useState(null);

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
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        await emailjs.sendForm('service_gnfkpcm', 'template_xck87kf', '#custom-form');
        setSubmissionMessage({ type: 'success', text: 'Your message has been sent successfully!' });
        formik.resetForm();
      } catch (error) {
        console.error('FAILED...', error);
        setSubmissionMessage({ type: 'error', text: 'An error occurred while sending your message. Please try again later.' });
      } finally {
        setSubmitting(false);
        setTimeout(() => {
          setSubmissionMessage(null);
        }, 5000); // Hide the message after 5 seconds
      }
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

        {submissionMessage && (
          <div className={`submission-message ${submissionMessage.type}`}>
            {submissionMessage.text}
          </div>
        )}
      </form>
    </div>
  );
}
