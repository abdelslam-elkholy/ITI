/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import React from "react";

const Task2Form = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameErrors, setNameErrors] = useState("");
  const [userNameErrors, setUserNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [confirmpasswordErrors, setConfirmPasswordErrors] = useState("");

  const handleEmailErrors = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value.length == 0) return setEmailErrors("Email is required");
    else if (!emailRegex.test(value))
      return setEmailErrors("Enter valide Email");
    setEmailErrors("");
  };

  const handlePasswordErrors = (value, setState) => {
    if (value.length == 0) return setState("Password is required");
    else if (value.length < 8) return setState("at Least 8 chars");
    if (setState == setConfirmPasswordErrors) {
      if (value != password) return setState("password dosn't match");
    }

    setState("");
  };

  const handleNameErrors = (value) => {
    if (value.length < 1) return setNameErrors("Name is required");
    setNameErrors("");
  };

  const handleUserNameErrors = (value) => {
    const userNameRegex = /^[^\s]+$/;

    if (value.length == 1) return setUserNameErrors("userName is required");
    else if (!userNameRegex.test(value))
      return setUserNameErrors("User Name shouldn have spaces");
    setUserNameErrors("");
  };
  return (
    <form className="col-6 m-5">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="email"
          className={`form-control ${
            nameErrors && "border-danger shadow-none"
          }`}
          id="exampleInputEmail1"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleNameErrors(e.target.value);
          }}
        />
        {nameErrors && <p>{nameErrors}</p>}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          User Name
        </label>
        <input
          type="email"
          className={`form-control ${
            nameErrors && "border-danger shadow-none"
          }`}
          id="exampleInputEmail1"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            handleUserNameErrors(e.target.value);
          }}
        />
        {userNameErrors && <p>{userNameErrors}</p>}
      </div>
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

        <input
          type="password"
          className={`form-control ${
            passwordErrors && "border-danger shadow-none"
          }`}
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            handlePasswordErrors(e.target.value, setPasswordErrors);
          }}
        />
        {passwordErrors && <p>{passwordErrors}</p>}
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          confirm Password
        </label>

        <input
          type="password"
          className={`form-control ${
            confirmpasswordErrors && "border-danger shadow-none"
          }`}
          id="exampleInputPassword1"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            handlePasswordErrors(e.target.value, setConfirmPasswordErrors);
          }}
        />
        {confirmpasswordErrors && <p>{confirmpasswordErrors}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        log In
      </button>
    </form>
  );
};

export default Task2Form;
