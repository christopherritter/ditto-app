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
            {props.templates.map((template, index) => (
              <Grid item xs={4} key={index}>
                <Paper className={classes.letter} elevation={2} square>
                  <Typography variant="body1">{template.subject}</Typography>
                  <Typography variant="body2">{template.body}</Typography>
                  {props.user && props.user.authorID === template.authorID ? (
                    <Button onClick={() => props.deleteTemplate(template)}>
                      Delete template
                    </Button>
                  ) : null}
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
