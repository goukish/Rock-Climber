import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import Home from './components/Pages/Home';
import page2 from './components/Pages/page2';
import page3 from "./components/Pages/page3";
import page4_report from "./components/Pages/page4_report";
//import Data from './components/Data';

function App() {
  return (
   <>
   <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component = {Home}/>
         <Route path='/page2' component={page2} />
         <Route path='/page3' component={page3} />
         <Route path='/page4_report' component={page4_report} />
       </Switch>
   </Router>
   </>
  );
}

export default App;


