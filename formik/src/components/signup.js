import React from "react";
import { useFormik } from "formik";
import validation from "./validations.js";
import "../App.css";

function Signup() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      /*firstName: '',
            lastName: '',
            gender: 'male',
            hobies: '[]',
            country: "",*/
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validation,
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && <div className="errstyle">{errors.email}</div>}

        <br />
        <br />

        <label htmlFor="passwoord">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && <div className="errstyle">{errors.password}</div>}

        <br />
        <br />

        <label htmlFor="passwoordConfirm">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          onChange={handleChange}
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && <div className="errstyle">{errors.passwordConfirm}</div>}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)};</code>
      </form>
    </div>
  );
}

export default Signup;
