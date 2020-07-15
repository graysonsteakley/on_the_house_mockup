import React from 'react';
import { NavBar } from './components/NavBar';
import { Container } from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LandingPage} from './components/LandingPage';
import {Cobbler} from './components/Cobbler'
import { Jamboree } from './components/Jamboree';
import {Footer} from './components/Footer';
import {LoginPage} from './components/LoginPage'
import {SignUp} from './components/SignUp'

function App() {
  return (

     <Router>
      <NavBar/>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/cobbler" exact component={Cobbler}/>
      <Route path="/jamboree" exact component={Jamboree}/>
      <Route path="/signin" exact component={LoginPage}/>
      <Route path="/signup" exact component={SignUp}/>
      <Footer/>
    </Router>
  
  );
}

export default App;
