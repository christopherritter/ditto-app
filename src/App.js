import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

import Navbar from './components/Navbar.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import SelectTemplate from './components/SelectTemplate.jsx';
import WriteEmail from './components/WriteEmail.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SelectTemplate />
      <WriteEmail />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
