import React from 'react';
import logo from './logo.svg';
import './App.css';


// React, Redux & Firebase
// Thunk used in redux works really well for async code
// Firebase 
// -Firestore, authentication, cloud functioons, hosting

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
