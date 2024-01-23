import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FeildLabelsProps } from "Types";
import TextInput from "@components/TextInput/TextInput";


const LoginForm = React.memo(() => {
  const fieldLabels: FeildLabelsProps = {
    firstName: "First Name",
    email: "Email",
    lastName: "Last Name",
  };
  const [formValues, setFormValues] = useState<FeildLabelsProps>({
    firstName: "",
    email: "",
    lastName: "",
  });
  const initialValues: FeildLabelsProps = {
    firstName: "",
    email: "",
    lastName: "",
  };
  const updateFormValues = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          lastName: Yup.string()
            .max(5, "Must be 5 characters or less")
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        })}
        onSubmit={(
          values,
          { setSubmitting }: FormikHelpers<FeildLabelsProps> // added formik helpers for the setSubmitting func</FeildLabelsProps>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            {Object.keys(values).map((fieldName: string) => (
              <TextInput
                key={fieldName}
                label={fieldLabels[fieldName]}
                name={fieldName}
                type="text"
                placeholder={`Enter your ${fieldLabels[fieldName]}`}
                onChange={handleChange}
                value={values[fieldName]}
                onValueChange={(value: string) =>
                  updateFormValues(fieldName, value)
                }
                onBlur={() => {}} // added onBLur prop (Review)
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
