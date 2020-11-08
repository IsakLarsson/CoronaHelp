import React, { useContext, useState } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { withRouter } from "react-router-dom";

const Signup = (props) => {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup();
    props.history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputs.username} name="email" placeholder="email" onChange={handleChange} />
        <input type="password" value={inputs.password} name="password" placeholder="password" onChange={handleChange} />
        <button>Signup</button>
        {errors.length > 0
          ? errors.map((error) => (
              <p key={error} style={{ color: "red" }}>
                {error}
              </p>
            ))
          : null}
      </form>
    </>
  );
};
export default withRouter(Signup);
