import React, { useState, useEffect } from "react";
import "./App.css";
import { Auth, API } from "aws-amplify";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { listTemplates } from "./graphql/queries";
import {
  createTemplate as createTemplateMutation,
  deleteTemplate as deleteTemplateMutation,
} from "./graphql/mutations";

import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import SelectTemplate from "./components/SelectTemplate.jsx";
import WriteEmail from "./components/WriteEmail.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./components/SignIn.jsx";

// Making a simple change to the App component

function App() {
  const [user, setUser] = useState(null);
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

  const setCurrentUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUser({
      username: user.username,
      email: user.attributes.email,
      authorID: user.attributes.sub,
    });
  };

  useEffect(() => {
    AssessLoggedInState();
    if (loggedIn) {
      setCurrentUser();
    }
  }, [loggedIn]);

  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  async function fetchTemplates() {
    const apiData = await API.graphql({
      query: listTemplates,
    });
    setTemplates(apiData.data.listTemplates.items);
  }

  async function createTemplate(formData) {
    console.log("createTemplate", formData);
    if (!formData.subject || !formData.body) return;
    formData = { ...formData, authorID: user.authorID };
    await API.graphql({
      query: createTemplateMutation,
      variables: { input: formData },
    });
    setTemplates([...templates, formData]);
  }

  async function deleteTemplate({ id }) {
    const newTemplatesArray = templates.filter(
      (template) => template.id !== id
    );
    setTemplates(newTemplatesArray);
    await API.graphql({
      query: deleteTemplateMutation,
      variables: {
        input: {
          id,
        },
      },
    });
  }

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log("Successfully signed out");
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  function signedIn() {
    setLoggedIn(true);
  }

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} signOut={signOut} />
        <Switch>
          <Route exact path="/">
            <Jumbotron />
            <SelectTemplate
              user={user}
              templates={templates}
              deleteTemplate={(template) => deleteTemplate(template)}
            />
            <WriteEmail
              user={user}
              createTemplate={(formData) => createTemplate(formData)}
            />
          </Route>
          <Route path="/signin">
            <SignIn signedIn={signedIn} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
