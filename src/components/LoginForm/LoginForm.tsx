import { FieldInputProps, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import TextInput from "../TextInput/TextInput";

interface FeildLabelsProps {
  firstName:string,
  email:string,
  lastName:string,
}

const LoginForm = React.memo(() => {
  const fieldLabels:FeildLabelsProps = {
    firstName: 'First Name',
    email: 'Email',
    lastName: 'Last Name',
  };
  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
    lastName: '',
  });

  const updateFormValues = (fieldName:string, value:string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };
  return (
    <>
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        lastName: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        lastName: Yup.string()
          .max(5, 'Must be 5 characters or less')
          .min(3, "Must be 3 characters or more")
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          {Object.keys(values).map((fieldName:string) => (
            <TextInput
            key={fieldName}
            label={fieldLabels[fieldName]}
            name={fieldName}
            type="text"
            placeholder={`Enter your ${fieldLabels[fieldName]}`}
            onChange={handleChange}
            value={values[fieldName]}
              onValueChange={(value) => updateFormValues(fieldName, value)}
            />
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </>
  );
});

export default LoginForm;
