import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffbd27",
    color: "#36207f"
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.header}>
            Another project created by Christopher Ritter.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
