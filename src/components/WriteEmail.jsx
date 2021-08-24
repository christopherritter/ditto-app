import React, { useState } from "react";
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

// var AWS = require('aws-sdk');
// AWS.config.update({
//   apiVersion: "2010-12-01",
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_DEFAULT_REGION,
// });

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

  // const client = new SESClient({ region: "us-east-2" });

  // const params = {
  //   Destination: {
  //     /* required */
  //     CcAddresses: [
  //       /* 'EMAIL_ADDRESS', */
  //       /* more items */
  //     ],
  //     ToAddresses: [
  //       "chris@christopherritter.com",
  //       /* more items */
  //     ],
  //   },
  //   Message: {
  //     /* required */
  //     Body: {
  //       /* required */
  //       Html: {
  //         Charset: "UTF-8",
  //         Data: "This is the Body Html Data field.",
  //       },
  //       Text: {
  //         Charset: "UTF-8",
  //         Data: "This is the Body Text Data field.",
  //       },
  //     },
  //     Subject: {
  //       Charset: "UTF-8",
  //       Data: "This is the subject line.",
  //     },
  //   },
  //   Source: "chris@christopherritter.com" /* required */,
  //   ReplyToAddresses: [
  //     "chris@christopherritter.com",
  //     /* more items */
  //   ],
  // };

  // const command = new SendEmailCommand(params);

  function createEmail() {
    props.createEmail(formData);
    setFormData(initialFormState);
  }

  async function sendEmail() {
    console.log("send email", formData);

    window.location.href = `mailto:${formData.name}?subject=Big%20News&body=${formData.description}`;

    // var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    //   .sendEmail(params)
    //   .promise();

    // sendPromise
    //   .then(function (data) {
    //     console.log(data.MessageId);
    //   })
    //   .catch(function (err) {
    //     console.error(err, err.stack);
    //   });

    // try {
    //   const data = await client.send(command);
    //   console.log("data", data);
    // } catch (error) {
    //   // error handling.
    //   console.log("error", error);
    // } finally {
    //   // finally.
    // }
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
