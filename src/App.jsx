import React, { useState, useEffect } from "react";
import "./App.css";
import { Auth, API } from "aws-amplify";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
import SignIn from "./components/SignIn.jsx";

// Making a simple change to the App component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {

        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    AssessLoggedInState();
  }, []);

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

  const signIn = async () => {
    setLoggedIn(true);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log("Successfully signed out");
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} signOut={signOut} />
        <Switch>
          <Route exact path="/">
            <Jumbotron />
            <SelectTemplate
              emails={emails}
              deleteEmail={(email) => deleteEmail(email)}
            />
            <WriteEmail createEmail={(formData) => createEmail(formData)} />
          </Route>
          <Route path="/signin">
            <SignIn onSignIn={signIn} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
