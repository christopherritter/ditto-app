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

const initialFormState = { subject: "", body: "" };

const WriteEmail = (props) => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialFormState);

  function createTemplate() {
    props.createTemplate(formData);
    setFormData(initialFormState);
  }

  async function sendEmail() {
    window.location.href = `mailto:email@address.com?subject=${formData.subject}&body=${formData.body}`;
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
                  label="Subject"
                  variant="outlined"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Subject"
                  value={formData.subject}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  label="Body"
                  variant="outlined"
                  multiline
                  onChange={(e) =>
                    setFormData({ ...formData, body: e.target.value })
                  }
                  placeholder="Body of the email."
                  value={formData.body}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={createTemplate}
                >
                  Save Template
                </Button>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={sendEmail}
                >
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
