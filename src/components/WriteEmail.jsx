import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listEmails } from "../graphql/queries";
import {
  createEmail as createEmailMutation,
  deleteEmail as deleteEmailMutation,
} from "../graphql/mutations";

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

const WriteEmail = () => {
  const classes = useStyles();

  const [emails, setEmails] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchEmails();
  }, []);

  async function fetchEmails() {
    const apiData = await API.graphql({ query: listEmails });
    setEmails(apiData.data.listEmails.items);
  }

  async function createEmail() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createEmailMutation,
      variables: { input: formData },
    });
    setEmails([...emails, formData]);
    setFormData(initialFormState);
  }

  async function deleteEmail({ id }) {
    const newEmailsArray = emails.filter((email) => email.id !== id);
    setEmails(newEmailsArray);
    await API.graphql({
      query: deleteEmailMutation,
      variables: { input: { id } },
    });
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
                  onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                  placeholder="Email description"
                  value={formData.description}
                />
              </Grid>
              <Grid item xs={12}>
              {
                emails.map(email => (
                  <div key={email.id || email.name}>
                    <h2>{email.name}</h2>
                    <p>{email.description}</p>
                    <button onClick={() => deleteEmail(email)}>Delete email</button>
                  </div>
                ))
              }
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="primary" onClick={createEmail}>
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
