import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();

    const user: any = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data: any) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (data: any) => {
        console.error("onFailure: ", data);
      },
      newPasswordRequired: (data: any) => {
        console.log("newPasswordRequired: ", data);
      },
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

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
