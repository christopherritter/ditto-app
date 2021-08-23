import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({ onSignIn }) => {
  const classes = useStyles();

  /* Create the form state and form input state */
  let formState = "signUp";
  let formInputState = {
    username: "",
    password: "",
    email: "",
    verificationCode: "",
  };

  /* onChange handler for form inputs */
  function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
  }

  /* Sign up function */
  async function signUp() {
    try {
      await Auth.signUp({
        username: formInputState.username,
        password: formInputState.password,
        attributes: {
          email: formInputState.email,
        },
      });
      /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
      formState = "confirmSignUp";
    } catch (err) {
      console.log({ err });
    }
  }

  function switchToSignIn() {
    formState = "signIn";
    console.log(formState);
  }

  /* Confirm sign up function for MFA */
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(
        formInputState.username,
        formInputState.verificationCode
      );
      /* Once the user successfully confirms their account, update form state to show the sign in form*/
      formState = "signIn";
    } catch (err) {
      console.log({ err });
    }
  }

  /* Sign in function */
  async function signIn() {
    try {
      await Auth.signIn(formInputState.username, formInputState.password);
      /* Once the user successfully signs in, update the form state to show the signed in state */
      formState = "signedIn";
    } catch (err) {
      console.log({ err });
    }
  }

  /* In the UI of the app, render forms based on form state */
  /* If the form state is "signUp", show the sign up form */
  if (formState === "signUp") {
    return (
      <div>
        <input name="username" onChange={onChange} />
        <input name="password" type="password" onChange={onChange} />
        <input name="email" onChange={onChange} />
        <button onClick={signUp}>Sign Up</button>
        <button onClick={switchToSignIn}>Already have an account? Sign In</button>
      </div>
    );
  }

  /* If the form state is "confirmSignUp", show the confirm sign up form */
  if (formState === "confirmSignUp") {
    return (
      <div>
        <input name="username" onChange={onChange} />
        <input name="verificationCode" onChange={onChange} />
        <button onClick={confirmSignUp}>Confirm Sign Up</button>
      </div>
    );
  }

  /* If the form state is "signIn", show the sign in form */
  if (formState === "signIn") {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  /* If the form state is "signedIn", show the app */
  if (formState === "signedIn") {
    return (
      <div>
        <h1>Welcome to my app!</h1>
      </div>
    );
  }
};

export default SignIn;
