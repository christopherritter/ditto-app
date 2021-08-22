import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    color: "#15151d",
  },
  header: {
    color: "#15151d",
  },
  letter: {
    margin: "1em",
  },
}));

const SelectTemplate = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.header}>
            Select a Template
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {props.emails.map((email) => (
              <Grid item xs={4} key={email.id || email.name}>
                <Paper className={classes.letter} elevation={2} square>
                  <Typography variant="body1">{email.name}</Typography>
                  <Typography variant="body2">{email.description}</Typography>
                  <Button onClick={() => props.deleteEmail(email)}>
                    Delete email
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button>View More ▾</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SelectTemplate;
