import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import CreateProject from './components//projects/createProject'
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
       <Route exact path='/' component={Dashboard} />
       <Route path='/signin' component={SignIn}/>
       <Route path='/signup' component={SignUp}/>   
       <Route path='/createproject' component={CreateProject}/>
       <Route path='/:id' component={ProjectDetails}/> 
     </Switch>
    </div>
    {/* <Route to="/" component={Dashboard}/> */}
    </BrowserRouter>
  );
}

export default App;
