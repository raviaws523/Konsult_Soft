import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {

  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


 
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  return(

<div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
  <div className="modal-dialog modal-xl login-pop-form" role="document">
    <div className="modal-content" id="loginmodal">
      <div className="modal-headers">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span className="ti-close" />
        </button>
      </div>
      <div className="modal-body p-5">
        <div className="text-center mb-4">
          <h2 className="m-0 ft-regular">Register</h2>
        </div>
        <Form onSubmit= {handleRegister} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input 
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange = {onChangeEmail}
            validations = {[required, validEmail]}
               />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
            type="password"
            className="form-control"
            placeholder="Password*"
            name="password"
            value = {password}
            onChange = {onChangePassword}
            validations = {[required, vpassword]}
              />
          </div>
          <div className="form-group">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-1">
                <Input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
              </div>
              <div className="eltio_k2">
                <a href="#" className="theme-cl">Lost Your Password?</a>
              </div>	
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-md full-width theme-bg text-light fs-md ft-medium" disabled={loading}>{loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}<span>Register</span></button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <div className="form-group text-center mb-0">
            <p className="extra">Not a member?<a href="#et-register-wrap" className="text-dark"> Register</a></p>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  </div>
</div>

);
};
export default Register;
