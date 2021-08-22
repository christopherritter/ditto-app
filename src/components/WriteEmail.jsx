import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#36207f",
    color: "#fff",
  },
  header: {
    color: "#fff",
  },
  textfield: {
    borderRadius: 4,
    backgroundColor: "#fff",
  },
}));

const initialFormState = { name: "", description: "" };

const WriteEmail = (props) => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialFormState);

  function createEmail() {
    props.createEmail(formData);
    setFormData(initialFormState);
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.header}>
            Create a Template
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  label="Email Address"
                  variant="outlined"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Email name"
                  value={formData.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  label="Email Template"
                  variant="outlined"
                  multiline
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Email description"
                  value={formData.description}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={createEmail}
                >
                  Save Template
                </Button>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="secondary">
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default WriteEmail;
