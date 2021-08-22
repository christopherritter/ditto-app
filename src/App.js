import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Grid } from "@material-ui/core";

import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import SelectTemplate from './components/SelectTemplate.jsx';
import CreateTemplate from './components/CreateTemplate.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SelectTemplate />
      <CreateTemplate />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
