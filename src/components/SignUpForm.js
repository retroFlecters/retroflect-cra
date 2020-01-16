import React from "react";
import { useInput } from "../hooks/input-hook";

const SignUpForm = ({ handleRequest }) => {
  const { value: firstName, bind: bindFirstName } = useInput("");
  const { value: lastName, bind: bindLastName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    handleRequest({ firstName, lastName, email, password });
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:&nbsp;
          <input type="text" {...bindFirstName} />
        </label>
        &nbsp;&nbsp;
        <label>
          Last Name:&nbsp;
          <input type="text" {...bindLastName} />
        </label>
        &nbsp;&nbsp;
        <label>
          Email:&nbsp;
          <input type="email" {...bindEmail} />
        </label>
        &nbsp;&nbsp;
        <label>
          Password:&nbsp;
          <input type="password" {...bindPassword} />
        </label>
        &nbsp;&nbsp;
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUpForm;
