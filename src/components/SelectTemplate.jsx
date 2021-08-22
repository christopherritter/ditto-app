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

const SelectTemplate = () => {
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
            <Grid item xs={4}>
              <Paper className={classes.letter} elevation={2} square>
                <Typography variant="body1" className={classes.header}>
                  Nulla non est sit amet ipsum maximus ultricies ut nec lacus. Mauris sit amet nulla at massa iaculis luctus. Curabitur bibendum a ipsum et tempus.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.letter} elevation={2} square>
                <Typography variant="body1" className={classes.header}>
                  Proin eget enim porttitor, sollicitudin diam vel, pellentesque nisi. Nulla quis dolor eget tellus suscipit iaculis in eget ligula.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.letter} elevation={2} square>
                <Typography variant="body1" className={classes.header}>
                  Morbi imperdiet euismod ipsum eget porttitor. Cras dapibus leo lorem, ut hendrerit dolor blandit vitae. Maecenas imperdiet gravida eleifend.
                </Typography>
              </Paper>
            </Grid>
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
