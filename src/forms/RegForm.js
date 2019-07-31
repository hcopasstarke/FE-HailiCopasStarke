import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

window.axios = axios;

function Register({ errors, touched, isSubmitting }) {
  // console.log(errors);
  console.log(isSubmitting);
  // console.log(touched);
  return (
    <Form className="login-form">
      <h2>Register here to begin your bucket list!</h2>
      <div className="form-group">
        <label htmlFor="username">First Name</label>
        <Field
          autoComplete="off"
          type="text"
          id="first_name"
          name="firstName"
          className={errors.firstName ? "invalid" : ""}
        />
        <p className="error-text">
          {touched.firstName && errors.firstName}
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="password">Last Name</label>
        <Field
          autoComplete="off"
          type="text"
          id="last_name"
          name="lastName"
        />
        <p className="error-text">
          {touched.lastName && errors.lastName}
        </p>
      </div>
      {isSubmitting && <p>Loading...</p>}
      <div className="form-group">
        <label htmlFor="password">Email</label>
        <Field
          autoComplete="off"
          type="text"
          id="email"
          name="email"
        />
        <p className="error-text">
          {touched.email && errors.email}
        </p>
      </div>
      {isSubmitting && <p>Loading...</p>}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          autoComplete="off"
          id="password"
          name="password"
        />
        <p className="error-text">
          {touched.password && errors.password}
        </p>
      </div>
      {isSubmitting && <p>Loading...</p>}
      <button
        className="submit-button"
        disabled={isSubmitting}
      >
        Submit &rarr;
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      firstName: "",
      lastName: ""
    };
  },
  handleSubmit: (values, formikBag) => {
    formikBag.resetForm();
    console.log("FORM SUCCESSFULLY SUBMITTED");
    const url = "https://reqres.in/api/users";
    formikBag.setSubmitting(true);
    axios.post(url, values).then(response => {
      console.log(response.data);
      window.alert(
        "Form submitted " + response.data.firstName
      );
      formikBag.setSubmitting(false);
    });
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(
        3,
        "First Name should be at least 5 characters long"
      )
      .max(10)
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3)
      .max(10)
      .required()
  })
})(Register);