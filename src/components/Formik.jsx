


import React from 'react';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import * as Yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, type, ...props }) => {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;

  let validationSchema;
  switch (type) {
    case 'name':
      validationSchema = Yup.string()
        // .min(2, 'Please enter ')
        // .max(20, 'Must be less than 20 characters')
        .required('Name is required')
        // .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces');
      break;
    case 'email':
      validationSchema = Yup.string()
        .email('Invalid email address')
        .required('Email is required');
      break;
    case 'textarea':
      validationSchema = Yup.string()
      .required('Field cannot be empty.');
      break;
    default:
      validationSchema = Yup.string();
  }

  return (
    <div className={`form-control ${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
      <div className="flex items-center space-between"> 
        <label htmlFor={props.id}>{label}</label>{' '}
        {showFeedback ? (
          <div id={`${props.id}-feedback`} aria-live="polite" className="feedback text-sm">
            {meta.error ? meta.error : '✓'}
          </div>
        ) : null}
      </div>
      {type === 'textarea' ? (
        <textarea
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
      ) : (
        <input
          {...props}
          {...field}
          type={type}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
      )}
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      message: '',
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        // .min(8, 'Must be at least 8 characters')
        // .max(20, 'Must be less than 20 characters')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Field cannot be empty'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label="Username"
          id="username"
          name="username"
          helpText="Must be 8-20 characters and cannot contain special characters."
          type="username"
        />
        <TextInputLiveFeedback
          label="Email"
          id="email"
          name="email"
          helpText="Please enter a valid email address."
          type="email"
        />
        <TextInputLiveFeedback
          label="Message"
          id="message"
          name="message"
          helpText="Please enter your message."
          type="textarea"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </FormikProvider>
  );
}