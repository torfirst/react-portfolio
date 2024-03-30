import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// import { useFormik, FormikProvider, Form, useField } from 'formik';
// import * as Yup from 'yup';

// const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
//   const [field, meta] = useField(props);
//   const [didFocus, setDidFocus] = React.useState(false);
//   const handleFocus = () => setDidFocus(true);
//   const showFeedback =
//     (!!didFocus && field.value.trim().length > 2) || meta.touched;

//   return (
//     <div
//       className={`form-control ${
//         showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
//       }`}
//     >
//       <div className="flex items-center space-between">
//         <label htmlFor={props.id}>{label}</label>{' '}
//         {showFeedback ? (
//           <div
//             id={`${props.id}-feedback`}
//             aria-live="polite"
//             className="feedback text-sm"
//           >
//             {meta.error ? meta.error : '✓'}
//           </div>
//         ) : null}
//       </div>
//       <input
//         {...props}
//         {...field}
//         aria-describedby={`${props.id}-feedback ${props.id}-help`}
//         onFocus={handleFocus}
//       />
//       <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
//         {helpText}
//       </div>
//     </div>
//   );
// };

// const Example = () => {
//   const formik = useFormik({
//     initialValues: {
//       username: '',
//     },
//     onSubmit: async (values) => {
//       await sleep(500);
//       alert(JSON.stringify(values, null, 2));
//     },
//     validationSchema: Yup.object({
//       username: Yup.string()
//         .min(8, 'Must be at least 8 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           'Cannot contain special characters or spaces'
//         ),
//     }),
//   });

//   return (
//     <FormikProvider value={formik}>
//       <Form>
//         <TextInputLiveFeedback
//           label="Username"
//           id="username"
//           name="username"
//           helpText="Must be 8-20 characters and cannot contain special characters."
//           type="text"
//         />
//         <div>
//           <button type="submit">Submit</button>
//           <button type="reset">Reset</button>
//         </div>
//       </Form>
//     </FormikProvider>
//   );
// }

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Please fill out all fields.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hi ${name}, your message has been received. Thank you for reaching out!`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h2>contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="What would you like to say?"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}


