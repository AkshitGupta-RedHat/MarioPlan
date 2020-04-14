import React from 'react';
import { BrowserRouter } from 'react-router-dom'


// React, Redux & Firebase
// Thunk used in redux works really well for async code
// Firebase 
// -Firestore, authentication, cloud functioons, hosting

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1>MarioPlan</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
