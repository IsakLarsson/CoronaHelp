import React, { useState } from "react";
import { authMethods } from "../firebase/authmethods";
import { userMethods } from "../firebase/usermethods";

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("");
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    return authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignin = () => {
    return authMethods.signin(inputs.email, inputs.password, setErrors, setToken, setStatus);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };
  return (
    <firebaseAuth.Provider
      value={{ handleSignup, handleSignin, handleSignout, token, inputs, setInputs, errors, status }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;

export const firebaseAuth = React.createContext();
