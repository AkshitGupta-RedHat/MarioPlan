import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'

// React, Redux & Firebase
// Thunk used in redux works really well for async code
// Firebase 
// -Firestore, authentication, cloud functioons, hosting

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     <Switch>
       <Route path='/' component={Dashboard} />
     </Switch>
    </div>
    {/* <Route to="/" component={Dashboard}/> */}
    </BrowserRouter>
  );
}

export default App;
