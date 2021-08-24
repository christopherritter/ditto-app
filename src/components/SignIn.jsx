import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {
            {
              signUp: (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    autoFocus
                    onChange={onChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    onChange={onChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    onChange={onChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={signUp}
                  >
                    Sign Up
                  </Button>
                  <Button fullWidth onClick={showSignIn}>
                   Already Have An Account?
                  </Button>
                </>
              ),
              confirmSignUp: (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    onChange={onChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="verificationCode"
                    label="Verification code"
                    name="verificationCode"
                    onChange={onChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={confirmSignUp}
                  >
                    Confirm Sign Up
                  </Button>
                </>
              ),
              signIn: (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
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
                    <Grid item sm={6}>
                      <Button>Forgot password?</Button>
                    </Grid>
                    <Grid item sm={6}>
                      <Button onClick={showSignUp}>Need an account?</Button>
                    </Grid>
                  </Grid>
                </>
              ),
              signedIn: <h1>Welcome to Ditto!</h1>,
            }[formState]
          }
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
