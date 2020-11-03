import "./login.css";
import React, { useState } from "react";

const Login = (props) => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const validate = (name, value) => {
    if (name === "email") {
      if (value.length === 0 || value.length <= 4 || !value.includes("@")) {
        setValidation({ ...validation, email: true });
      } else {
        setValidation({ ...validation, email: false });
      }
    } else if (name === "password") {
      if (value.length === 0 || value.length < 4) {
        setValidation({ ...validation, password: true });
      } else {
        setValidation({ ...validation, password: false });
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(creds);

    // static email and password check
    if (creds.email === "root@gmail.com" && creds.password === "root") {
      props.history.push("/restaurants");
    }
  };

  return (
    <div className="login">
      <h2 className="text-center">Login to order food </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <i className="fas fa-envelope-open fa-2x"></i>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={creds.email}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            style={{ border: validation.email ? "1px solid red" : "none" }}
            required
          />
        </div>
        <div className="form-control">
          <i className="fas fa-key fa-2x"></i>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={creds.password}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            style={{ border: validation.password ? "1px solid red" : "none" }}
            required
          />
        </div>
        <input
          type="submit"
          value="LOGIN"
          className="btn btn-primary"
          disabled={validation.email || validation.password}
        />
      </form>
    </div>
  );
};

export default Login;
