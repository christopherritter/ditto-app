import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

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
      <Container>
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
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {template.subject}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {template.body}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="primary" onClick={() => props.selectTemplate(template)}>Select template</Button>
                      {props.user &&
                      props.user.authorID === template.authorID ? (
                        <Button onClick={() => props.deleteTemplate(template)}>
                          Delete template
                        </Button>
                      ) : null}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button>View More ▾</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SelectTemplate;
