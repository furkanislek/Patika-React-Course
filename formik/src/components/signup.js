import React from "react";
import { useFormik } from "formik";
import validation from "./validations.js";

function Signup() {
    const {handleSubmit, values, handleChange} = useFormik({
        initialValues: {
            email: '',
            password: "",
            passwordConfirm: "",
            /*firstName: '',
            lastName: '',
            gender: 'male',
            hobies: '[]',
            country: "",*/
        },
        onSubmit: values => {
            console.log(values);
        },
    validationSchema:validation,
    })
;
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
        />

        <br />
        <br />

        <label htmlFor="passwoord">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />

        <br />
        <br />

        <label htmlFor="passwoordConfirm">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          onChange={handleChange}
          value={values.passwordConfirm}
        />

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
