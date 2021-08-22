import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

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
  }
}));

const JumbotronComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item sm={5}>
          <Typography variant="h2" className={classes.header}>
            Repeat after me
          </Typography>
          <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel feugiat massa, in bibendum purus. Vivamus nec metus enim. Nulla a magna nibh.
          </Typography>
          <Button className={classes.button}>Click me</Button>
        </Grid>
        <Grid item sm={7}>
          <img
            src={process.env.PUBLIC_URL + "/img/megaphone.svg"}
            alt="Megaphone"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default JumbotronComponent;
