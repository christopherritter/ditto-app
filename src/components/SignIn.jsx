import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Avatar, Button, TextField, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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

const SignIn = ({ signedIn }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formState, setFormState] = useState("signIn");

  const [formInputState, setFormInputState] = useState({
    username: "",
    password: "",
    email: "",
    verificationCode: "",
  });

  function onChange(e) {
    setFormInputState({ ...formInputState, [e.target.name]: e.target.value });
  }

  function showSignUp(e) {
    e.preventDefault();
    setFormState("signUp");
  }

  async function signUp(e) {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: formInputState.username,
        password: formInputState.password,
        attributes: {
          email: formInputState.email,
        },
      });
      /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
      setFormState("confirmSignUp");
    } catch (err) {
      console.log({ err });
    }
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(
        formInputState.username,
        formInputState.verificationCode
      );
      /* Once the user successfully confirms their account, update form state to show the sign in form*/
      setFormState("signIn");
    } catch (err) {
      console.log({ err });
    }
  }

  function showSignIn(e) {
    e.preventDefault();
    setFormState("signIn");
  }

  async function signIn(e) {
    e.preventDefault();
    try {
      await Auth.signIn(formInputState.username, formInputState.password);
      /* Once the user successfully signs in, update the form state to show the signed in state */
      setFormState("signedIn");
      signedIn();
      history.push("/");
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {
        {
          signUp: (
            <form className={classes.form} noValidate>
              <TextField name="username" onChange={onChange} />
              <TextField name="password" type="password" onChange={onChange} />
              <TextField name="email" onChange={onChange} />
              <Button onClick={signUp}>Sign Up</Button>
              <Button onClick={showSignIn}>
                Already have an account? Sign In
              </Button>
            </form>
          ),
          confirmSignUp: (
            <form className={classes.form} noValidate>
              <TextField name="username" onChange={onChange} />
              <TextField name="verificationCode" onChange={onChange} />
              <Button onClick={confirmSignUp}>Confirm Sign Up</Button>
            </form>
          ),
          signIn: (
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={onChange}
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
                onChange={onChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={signIn}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button>Forgot password?</Button>
                </Grid>
                <Grid item>
                  <Button onClick={showSignUp}>
                    Don't have an account? Sign Up
                  </Button>
                </Grid>
              </Grid>
            </form>
          ),
          signedIn: (
            <form className={classes.form} noValidate>
              <h1>Welcome to my app!</h1>
            </form>
          ),
        }[formState]
      }
    </div>
  );
};

export default SignIn;
