/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Task1Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibilty = () => setPasswordVisible(!passwordVisible);

  const handleEmailErrors = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value.length == 0) return setEmailErrors("Email is required");
    else if (!emailRegex.test(value))
      return setEmailErrors("Enter valide Email");
    setEmailErrors("");
  };

  const handlePasswordErrors = (value) => {
    if (value.length == 0) return setPasswordErrors("Password is required");
    else if (value.length < 8)
      return setPasswordErrors("Enter valide password");
    setPasswordErrors("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailErrors(email);
    handlePasswordErrors(password);
  };

  return (
    <form className="col-6 m-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${
            emailErrors && "border-danger shadow-none"
          }`}
          id="exampleInputEmail1"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleEmailErrors(e.target.value);
          }}
        />
        {emailErrors && <p>{emailErrors}</p>}
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <div onClick={togglePasswordVisibilty}>
          {passwordVisible ? (
            <span>
              <BsFillEyeSlashFill />
            </span>
          ) : (
            <span>
              <BsFillEyeFill />
            </span>
          )}
        </div>
        <input
          type={`${passwordVisible ? "text" : "password"}`}
          className={`form-control ${
            passwordErrors && "border-danger shadow-none"
          }`}
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            handlePasswordErrors(e.target.value);
          }}
        />
      </div>
      {passwordErrors && <p>{passwordErrors}</p>}
      <button type="submit" className="btn btn-primary">
        log In
      </button>
    </form>
  );
};

export default Task1Form;
