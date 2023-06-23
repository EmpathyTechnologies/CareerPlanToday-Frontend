import React, { useState } from "react";
import UserPool from "./UserPool";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();

    const emailAttribute: any = {
      Name: "email",
      Value: email,
    };

    UserPool.signUp(username, password, [emailAttribute], [], (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor='username'>Username</label>
        <input value={username} onChange={(event) => setUsername(event.target.value)} />

        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
