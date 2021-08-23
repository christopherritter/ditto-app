import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      history.push("/");
      onSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signin">
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button id="signInButton" color="primary" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
