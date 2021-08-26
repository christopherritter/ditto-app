import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#36207f",
    color: "#fff"
  },
  header: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    color: "#15151d",
    marginTop: "1em"
  }
}));

const JumbotronComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={5}>
            <Typography variant="h2" className={classes.header}>
              Amplify your voice
            </Typography>
            <Typography variant="body1">
              Share your emails to elected officials so that others can use them as a template to write and send their own email messages.
            </Typography>
            <Button className={classes.button}>Write an Email</Button>
            <Button className={classes.button}>Select a Template</Button>
          </Grid>
          <Grid item sm={7}>
            <img
              src={process.env.PUBLIC_URL + "/img/megaphone.svg"}
              alt="Megaphone"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
