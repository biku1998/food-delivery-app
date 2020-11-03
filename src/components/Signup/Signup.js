import "./signup.css";

import React, { useState } from "react";

const Signup = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [validation, setValidation] = useState({
    name: false,
    email: false,
    password: false,
    mobile: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
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
      if (value.length === 0 || value.length <= 4) {
        setValidation({ ...validation, password: true });
      } else {
        setValidation({ ...validation, password: false });
      }
    } else if (name === "mobile") {
      if (value.length === 0 || value.length < 10) {
        setValidation({ ...validation, mobile: true });
      } else {
        setValidation({ ...validation, mobile: false });
      }
    } else if (name === "name") {
      if (value.length === 0 || value.length < 2) {
        setValidation({ ...validation, name: true });
      } else {
        setValidation({ ...validation, name: false });
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(info);
  };
  return (
    <div className="signup">
      <h2 className="text-center">
        Join the most loved food delivery service{" "}
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <i className="fas fa-user fa-2x"></i>
          <input
            type="name"
            name="name"
            placeholder="Your name"
            value={info.name}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            style={{ border: validation.name ? "1px solid red" : "none" }}
            required
          />
        </div>
        <div className="form-control">
          <i className="fas fa-envelope-open fa-2x"></i>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={info.email}
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
            value={info.password}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            style={{ border: validation.password ? "1px solid red" : "none" }}
            required
          />
        </div>
        <div className="form-control">
          <i className="fas fa-mobile fa-2x"></i>
          <input
            type="text"
            name="mobile"
            placeholder="Your mobile number"
            value={info.mobile}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            style={{ border: validation.mobile ? "1px solid red" : "none" }}
            required
          />
        </div>
        <input type="submit" value="JOIN" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Signup;
