import React from "react";
import { useInput } from "../hooks/input-hook";

const SignInForm = ({ handleRequest }) => {
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    handleRequest({ email, password });
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" {...bindEmail} />
        </label>
        <label>
          Password:
          <input type="password" {...bindPassword} />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    </>
  );
};

export default SignInForm;
