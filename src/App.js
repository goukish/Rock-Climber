import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import Home from './components/Pages/Home';
import page2 from './components/Pages/page2';
import Data from './components/Data';

function App() {
  return (
   <>
   <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component = {Home}/>
         <Route path='/page2' component={page2} />
       </Switch>
   </Router>
   </>
  );
}

export default App;
