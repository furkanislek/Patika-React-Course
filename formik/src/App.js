import React from "react";
import { useFormik } from "formik";

function App() {
    const {handleSubmit, handleChange, values} = useFormik({
      initialValues: {
        firstName: "Furkan Akif",
        lastName: "İŞLEK",
        email: "furkanakifislek@gmail.com",
        gender: "female",
        hobies: [],
        country: "",
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
      
     
    });
  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />

            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />

            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />

            <div>
              Football
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
            </div>
            <div>
              Cinema
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              Photography
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
            </div>

            <br />
            <br />

            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Turkey">Turkey</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
            </select>

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

export default App;
