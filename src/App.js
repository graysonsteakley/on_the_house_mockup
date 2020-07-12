import React from 'react';
import { NavBar } from './components/NavBar';
import { Container } from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

     <Router>
        <NavBar/>
        <Container>
     
          YO
        </Container>
    </Router>
  
  );
}

export default App;
