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
          First Name:
          <input type="text" {...bindFirstName} />
        </label>
        <label>
          Last Name:
          <input type="text" {...bindLastName} />
        </label>
        <label>
          Email:
          <input type="email" {...bindEmail} />
        </label>
        <label>
          Password:
          <input type="password" {...bindPassword} />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUpForm;
