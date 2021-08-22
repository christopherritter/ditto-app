import React, { useState, useEffect } from "react";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listEmails } from "./graphql/queries";
import {
  createEmail as createEmailMutation,
  deleteEmail as deleteEmailMutation,
} from "./graphql/mutations";

import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import SelectTemplate from "./components/SelectTemplate.jsx";
import WriteEmail from "./components/WriteEmail.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  async function fetchEmails() {
    const apiData = await API.graphql({
      query: listEmails,
    });
    setEmails(apiData.data.listEmails.items);
  }

  async function createEmail(formData) {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createEmailMutation,
      variables: { input: formData },
    });
    setEmails([...emails, formData]);
  }

  async function deleteEmail({ id }) {
    const newEmailsArray = emails.filter((email) => email.id !== id);
    setEmails(newEmailsArray);
    await API.graphql({
      query: deleteEmailMutation,
      variables: {
        input: {
          id,
        },
      },
    });
  }

  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SelectTemplate
        emails={emails}
        deleteEmail={(email) => deleteEmail(email)}
      />
      <WriteEmail createEmail={(formData) => createEmail(formData)} />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
