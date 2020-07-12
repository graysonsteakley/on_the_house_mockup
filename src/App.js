import React from 'react';
import { NavBar } from './components/NavBar';
import { Container } from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LandingPage} from './components/LandingPage';
import {Taters} from './components/Taters'
import { Events } from './components/Events';
import {Footer} from './components/Footer';

function App() {
  return (

     <Router>
      <NavBar/>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/taters" exact component={Taters}/>
      <Route path="/eventsat" exact component={Events}/>
      <Footer/>
    </Router>
  
  );
}

export default App;
